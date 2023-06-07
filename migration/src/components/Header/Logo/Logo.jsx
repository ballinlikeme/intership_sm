import React from "react";
import logo from "../../../assets/logo.svg";
import "./Logo.css";

export const Logo = () => {
  return (
    <div className="header__logo">
      <img src={logo} alt="spring logo" />
    </div>
  );
};
