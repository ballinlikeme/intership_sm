import React from "react";
import { SubMenuElement } from "./SubMenuElement";
import "../../../styles/header/menu/subMenu.css";

export const SubMenu = ({ list }) => {
  return (
    <ul class="menu__sub-menu sub-menu">
      {list.map((item) => (
        <SubMenuElement title={item.title} />
      ))}
    </ul>
  );
};
