import React from "react";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
    </div>
  );
};
