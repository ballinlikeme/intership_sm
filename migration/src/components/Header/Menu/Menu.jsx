import React, { useState } from "react";
import { MenuIcon } from "./MenuIcon";
import { MenuList } from "./MenuList";
import "../../../styles/header/menu/menu.css";

export const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav class="header__menu menu">
      <MenuIcon setIsActive={setIsActive} isActive={isActive} />
      <MenuList isActive={isActive} />
    </nav>
  );
};
