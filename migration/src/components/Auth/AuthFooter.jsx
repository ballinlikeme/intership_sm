import React from "react";
import "../../styles/authFooter.css";

export const AuthFooter = () => {
  return (
    <div className="form__footer">
      <div className="form__restore">Forgot your password?</div>
      <div className="form__button">
        <button>Login</button>
      </div>
    </div>
  );
};
