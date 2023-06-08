import React from "react";
import "./Button.css";

export const Button = (props) => {
  const { children } = props;
  return (
    <button className="app__button" {...props}>
      {children}
    </button>
  );
};
