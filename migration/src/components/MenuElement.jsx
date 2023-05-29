import React from "react";
import { SubMenu } from "./SubMenu";
import "../styles/menuElement.css";

export const MenuElement = ({ title, children }) => {
  return (
    <li class="menu__element">
      <span>{title}</span>
      <SubMenu list={children} />
    </li>
  );
};
