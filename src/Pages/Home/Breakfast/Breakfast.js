import React from "react";
import "./Breakfast.css";

const Breakfast = (props) => {
  const { name, balance } = props.food;

  return (
    <div className="food">
      <h1>{balance}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Breakfast;
