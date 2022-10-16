import React from "react";
import CenterBtn from "../CenterBtn/CenterBtn";
import "./CenterButton.css";

const CenterButton = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={` ${props.click ? "centerButton-active" : "centerButton-btn"}`}
    >
      <CenterBtn click={props.click} />
    </button>
  );
};

export default CenterButton;
