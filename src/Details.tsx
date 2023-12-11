import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/");
  };

  return (
    <div>
      "Details" <button onClick={onClickButton}>Go Home</button>
    </div>
  );
};

export default Details;
