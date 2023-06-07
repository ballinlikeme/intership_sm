import React from "react";
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
