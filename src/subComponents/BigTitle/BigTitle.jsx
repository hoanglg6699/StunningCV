import React from "react";
import './BigTitle.css'

const BigTitle = (props) => {
  return (
    <h1 className="bigTitle" style={{top: `${props.top}`, left: `${props.left}`, right: `${props.right}`, color: `rgba(${props.theme.textRgba}, 0.1)`}}>
      {props.text}
    </h1>
  );
};

export default BigTitle;
