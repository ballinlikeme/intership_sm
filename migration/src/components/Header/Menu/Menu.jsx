import React, { useState } from "react";
import { MenuIcon } from "./MenuIcon/MenuIcon";
import { MenuList } from "./MenuList/MenuList";
import "./Menu.css";

export const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="header__menu menu">
      <MenuIcon setIsActive={setIsActive} isActive={isActive} />
      <MenuList isActive={isActive} />
    </nav>
  );
};
