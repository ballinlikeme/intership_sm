import React from "react";
import { MenuIcon } from "../ui/MenuIcon";
import { MenuList } from "./MenuList";
import "../styles/menu.css";

export const Menu = () => {
  return (
    <nav class="header__menu menu">
      <MenuIcon />
      <MenuList />
    </nav>
  );
};
