import React, { useState } from "react";
import { MenuIcon } from "../../ui/MenuIcon";
import { MenuList } from "./MenuList";
import "../../styles/menu.css";

export const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav class="header__menu menu">
      <MenuIcon setIsActive={setIsActive} isActive={isActive} />
      <MenuList isActive={isActive} />
    </nav>
  );
};
