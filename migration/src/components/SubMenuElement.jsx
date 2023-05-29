import React from "react";
import "../styles/subMenuElement.css";

export const SubMenuElement = ({ title }) => {
  return (
    <li class="sub-menu__element">
      <span>{title}</span>
    </li>
  );
};
