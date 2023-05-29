import React from "react";
import "../styles/menuIcon.css";

export const MenuIcon = ({ setIsActive, isActive }) => {
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={() => handleClick()}
      class={isActive ? "menu__icon active" : "menu__icon"}
      id="menu-icon"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
