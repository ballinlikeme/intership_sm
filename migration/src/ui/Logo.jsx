import React from "react";
import logo from "../assets/logo.svg";
import "../styles/ui/logo.css";

export const Logo = () => {
  return (
    <div className="header__logo">
      <img src={logo} alt="spring logo" />
    </div>
  );
};
