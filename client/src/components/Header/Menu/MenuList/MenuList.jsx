import React from "react";
import { MenuElement } from "./MenuElement/MenuElement";
import { MENU_ITEMS } from "../../../../data/menu";
import "./MenuList.css";

export const MenuList = ({ isActive }) => {
  return (
    <ul
      className={isActive ? "menu__list active" : "menu__list"}
      id="menu-body"
    >
      {MENU_ITEMS.map((item) => (
        <MenuElement
          key={item.id}
          title={item.title}
          childrenItems={item.children || []}
        />
      ))}
    </ul>
  );
};
