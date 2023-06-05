import React from "react";
import "../styles/authLayout.css";

export const AuthLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <main className="auth__main">{children}</main>
    </div>
  );
};
