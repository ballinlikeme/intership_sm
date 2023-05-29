import React, { useState } from "react";
import { SubMenu } from "./SubMenu";
import "../styles/menuElement.css";

export const MenuElement = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      onClick={() => handleClick()}
      class={isActive ? "menu__element active" : "menu__element"}
    >
      <span>{title}</span>
      <SubMenu list={children} />
    </li>
  );
};
