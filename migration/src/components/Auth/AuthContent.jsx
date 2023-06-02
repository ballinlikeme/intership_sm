import React from "react";
import { AuthBody } from "./AuthBody";
import { AuthFooter } from "./AuthFooter";
import "../../styles/authContent.css";

export const AuthContent = () => {
  return (
    <div className="form__content">
      <AuthBody />
      <AuthFooter />
    </div>
  );
};
