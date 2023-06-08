import React from "react";
import "./MenuIcon.css";

export const MenuIcon = ({ setIsActive, isActive }) => {
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={() => handleClick()}
      className={isActive ? "menu__icon active" : "menu__icon"}
      id="menu-icon"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
