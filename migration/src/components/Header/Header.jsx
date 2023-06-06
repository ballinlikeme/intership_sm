import React from "react";
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";
import "../../styles/header/header.css";

export const Header = () => {
  return (
    <header class="header">
      <div class="header__container">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
