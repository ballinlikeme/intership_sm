import React from "react";
import { MenuElement } from "./MenuElement";
import { MENU_ITEMS } from "../mockups/menu";
import "../styles/menuList.css";

export const MenuList = () => {
  return (
    <ul class="menu__list" id="menu-body">
      {MENU_ITEMS.map((item) => (
        <MenuElement
          key={item.id}
          title={item.title}
          children={item.children || []}
        />
      ))}
    </ul>
  );
};
