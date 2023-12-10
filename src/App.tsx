import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./redux/types";
import { fetchAll } from "./redux/actions";
import defaultImage from "./assets/default_image.png";
import "./App.css";

function App({
  data,
  loading,
  errors,
  fetchAll,
}: ConnectedProps<typeof connect>) {
  const [errorIndices, setErrorIndices] = useState<number[]>([]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const handleImageError = (index: number) => {
    setErrorIndices((prev) => [...prev, index]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>Error {errors}</div>;
  }

  if (Object.values(data).length === 0) {
    return <div>No data</div>;
  }

  return (
    <>
      <div className="container-img">
        {Object.values(data).map((item, index) =>
          errorIndices.includes(index) ? (
            <img
              key={"Default" + index}
              alt={"Default" + index}
              src={defaultImage}
              width={200}
              height={200}
            />
          ) : (
            <img
              key={item.title}
              alt={item.title}
              src={item.image}
              width={200}
              height={200}
              onError={() => handleImageError(index)}
            />
          )
        )}
      </div>
    </>
  );
}

const stateToProps = (state: RootState) => {
  const { data, loading, errors } = state;
  return {
    data,
    loading,
    errors,
  };
};

const dispatchToProps = { fetchAll };

const ConnectedComponent = connect(stateToProps, dispatchToProps)(App);

export default ConnectedComponent;
