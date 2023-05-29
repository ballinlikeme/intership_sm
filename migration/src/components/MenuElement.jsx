import React from "react";
import { SubMenu } from "./SubMenu";
import "../styles/menuElement.css";

export const MenuElement = () => {
  return (
    <li class="menu__element">
      <span>Why spring</span>
      <SubMenu />
    </li>
  );
};
