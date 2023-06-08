import React from "react";
import "./SubMenuElement.css";

export const SubMenuElement = ({ title }) => {
  return (
    <li className="sub-menu__element">
      <span>{title}</span>
    </li>
  );
};
