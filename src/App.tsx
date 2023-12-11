import { useEffect, useState, useMemo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import routes from "./router/routes";
import { RootState } from "./redux/types";
import { fetchAll, setActive } from "./redux/actions";
import Image from "./components/Image";
import "./App.scss";

function App({
  data,
  loading,
  errors,
  activeItemId,
  fetchAll,
  setActive,
}: ConnectedProps<typeof connect>) {
  const [page, setPage] = useState<number>(1);
  const [errorIndixes, setErrorIndixes] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const slicedData = useMemo(() => {
    const pageSize = 10;

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return data?.slice(startIndex, endIndex);
  }, [data, page]);

  const handleImageError = (index: number) => {
    setErrorIndixes((prev) => [...prev, index]);
  };

  const onClickButton = (id: number) => {
    setActive(id);
    navigate(`${routes.DETAILS}/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>Error {errors}</div>;
  }

  if (data?.length === 0) {
    return <div>No data</div>;
  }
  return (
    <>
      <div className="container-img">
        {slicedData?.map((item) =>
          errorIndixes.includes(item.index) ? (
            <Image
              key={"Default" + item.index}
              title={"Default" + item.index}
              isDefault
            />
          ) : (
            <Image
              key={item.title}
              title={item.title}
              src={item.image}
              isActive={activeItemId === item.index}
              onClick={() => onClickButton(item.index)}
              onError={() => handleImageError(item.index)}
            />
          )
        )}
      </div>
      <ul className="slick-dots">
        <li className={page === 1 ? "slick-active" : ""}>
          <button onClick={() => setPage(1)}>1</button>
        </li>
        <li className={page === 2 ? "slick-active" : ""}>
          <button onClick={() => setPage(2)}>2</button>
        </li>
        <li className={page === 3 ? "slick-active" : ""}>
          <button onClick={() => setPage(3)}>3</button>
        </li>
      </ul>
    </>
  );
}

const stateToProps = (state: RootState) => {
  const { data, loading, errors } = state.items;
  return {
    data: Object.values(data)?.sort((a, b) => a.index - b.index) || [],
    loading,
    errors,
    activeItemId: state.activeItemId,
  };
};

const dispatchToProps = {
  fetchAll,
  setActive,
};

const ConnectedComponent = connect(stateToProps, dispatchToProps)(App);

export default ConnectedComponent;
