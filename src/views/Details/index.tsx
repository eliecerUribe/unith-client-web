import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { RootState, Item } from "../../redux/types";
import "./styles.scss";

const Details: React.FC<Item> = ({ title, description, image }) => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/");
  };

  return (
    <div className="details">
      <img src={image} width={360} height={360} />
      <div className="title">{title}</div>
      <div>{description}</div>
      <button onClick={onClickButton}>Go Home</button>
    </div>
  );
};

const stateToProps = (state: RootState) => {
  const { title, description, image } = state.activeItem ?? ({} as Item);
  return { title, description, image };
};

const ConnectedComponent = connect(stateToProps)(Details);

export default ConnectedComponent;
