import React from "react";
import "../../styles/authBody.css";

export const AuthBody = () => {
  return (
    <div className="form__body">
      <div className="form__item">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
      </div>
      <div className="form__item">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
    </div>
  );
};
