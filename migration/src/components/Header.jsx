import React from "react";
import { Logo } from "../ui/Logo";
import { Menu } from "./Menu";
import "../styles/header.css";

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
