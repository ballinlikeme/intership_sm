import React, { useState } from "react";
import { SubMenu } from "./SubMenu/SubMenu";
import "./MenuElement.css";

export const MenuElement = ({ title, childrenItems }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      onClick={() => handleClick()}
      className={isActive ? "menu__element active" : "menu__element"}
    >
      <span>{title}</span>
      <SubMenu list={childrenItems} />
    </li>
  );
};
