import React from "react";
import { MenuElement } from "./MenuElement";
import "../styles/menuList.css";

export const MenuList = () => {
  return (
    <ul class="menu__list" id="menu-body">
      <MenuElement />
      <MenuElement />
      <MenuElement />
      <MenuElement />
    </ul>
  );
};
