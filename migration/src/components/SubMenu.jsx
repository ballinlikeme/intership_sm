import React from "react";
import { SubMenuElement } from "./SubMenuElement";
import "../styles/subMenu.css";

export const SubMenu = () => {
  return (
    <ul class="menu__sub-menu sub-menu">
      <SubMenuElement />
      <SubMenuElement />
      <SubMenuElement />
      <SubMenuElement />
      <SubMenuElement />
    </ul>
  );
};
