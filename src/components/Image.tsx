import React from "react";
import defaultImage from "../assets/default_image.png";

interface ImageProps {
  title: string;
  src?: string;
  isActive?: boolean;
  isDefault?: boolean;
  onClick?: Function;
  onError?: Function;
}

const Image: React.FC<ImageProps> = ({
  title,
  isDefault,
  isActive = false,
  src = "",
  onClick = null,
  onError = null,
}) => {
  const props = isDefault
    ? { src: defaultImage }
    : { src, style: { cursor: "pointer" }, onClick, onError };

  const style = isActive ? { border: "2px solid red" } : {};

  return (
    <div style={style}>
      <img
        key={title}
        alt={title}
        src={props.src}
        width={200}
        height={200}
        style={props.style}
        onClick={props.onClick}
        onError={props.onError}
      />
    </div>
  );
};

export default Image;
