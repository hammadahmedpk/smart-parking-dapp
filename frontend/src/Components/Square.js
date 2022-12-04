import React from "react";

const Square = ({ value, onClick, isHighlight }) => {
  const classes = ["square"];
  if (isHighlight) {
    classes.push("highlight");
  }
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
