import React from "react";
import "./styles.scss";

interface PaginationDotsProps {
  currentPage: number;
  onClick: Function;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  currentPage,
  onClick,
}) => {
  return (
    <ul className="slick-dots">
      <li className={currentPage === 1 ? "slick-active" : ""}>
        <button onClick={() => onClick(1)} />
      </li>
      <li className={currentPage === 2 ? "slick-active" : ""}>
        <button onClick={() => onClick(2)} />
      </li>
      <li className={currentPage === 3 ? "slick-active" : ""}>
        <button onClick={() => onClick(3)} />
      </li>
    </ul>
  );
};

export default PaginationDots;
