import React from "react";
import { SubMenuElement } from "./SubMenuElement/SubMenuElement";
import "./SubMenu.css";

export const SubMenu = ({ list }) => {
  return (
    <ul className="menu__sub-menu sub-menu">
      {list.map((item) => (
        <SubMenuElement key={item.id} title={item.title} />
      ))}
    </ul>
  );
};
