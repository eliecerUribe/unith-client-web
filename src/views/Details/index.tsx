import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../redux/types";

import "./styles.scss";

interface DetailsProps {
  index: number;
  title: string;
  description: string;
  image: string;
}

const Details: React.FC<DetailsProps> = ({
  index,
  title,
  description,
  image,
}) => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/");
  };

  return (
    <div className="details">
      <img src={image} width={360} height={360} />
      <div className="title">
        {index}.{title}
      </div>
      <div>{description}</div>
      <button onClick={onClickButton}>Go Home</button>
    </div>
  );
};

const stateToProps = (state: RootState) => {
  const { index, title, description, image } = state.activeItem;
  return { index, title, description, image };
};

const ConnectedComponent = connect(stateToProps)(Details);

export default ConnectedComponent;
