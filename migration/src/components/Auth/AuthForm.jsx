import React from "react";
import { AuthHeader } from "./AuthHeader";
import { AuthContent } from "./AuthContent";
import "../../styles/authForm.css";

export const AuthForm = () => {
  return (
    <form className="form">
      <AuthHeader />
      <AuthContent />
    </form>
  );
};
