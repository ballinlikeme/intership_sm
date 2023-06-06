import React from "react";
import { AuthUserName } from "./AuthUserName";
import { AuthPassword } from "./AuthPassword";
import "../styles/authBody.css";

export const AuthBody = () => {
  return (
    <div className="form__body">
      <AuthUserName />
      <AuthPassword />
    </div>
  );
};
