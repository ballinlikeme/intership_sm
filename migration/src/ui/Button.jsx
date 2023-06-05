import React from "react";
import "../styles/ui/button.css";

export const Button = (props) => {
  const { children } = props;
  return (
    <button className="app__button" {...props}>
      {children}
    </button>
  );
};
