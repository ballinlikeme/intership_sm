import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  changeUserName,
  setPasswordError,
  setUserNameError,
} from "../../store/slices/authSlice";
import "../../styles/authBody.css";

export const AuthBody = () => {
  const [userName, setUserName] = useState(
    useSelector((state) => state.auth.userName)
  );
  const [password, setPassword] = useState(
    useSelector((state) => state.auth.password)
  );

  const isUserNameError = useSelector((state) => state.auth.isUserNameError);
  const isPasswordError = useSelector((state) => state.auth.isPasswordError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeUserName(userName));
  }, [userName, dispatch]);

  useEffect(() => {
    dispatch(changePassword(password));
  }, [password, dispatch]);

  const onUserNameBlur = (value) => {
    dispatch(setUserNameError(!!!value));
  };

  const onPasswordBlur = (value) => {
    dispatch(setPasswordError(!!!value));
  };

  return (
    <div className="form__body">
      <div className="form__item">
        <label htmlFor="username">Username</label>
        <input
          className={isUserNameError ? "invalid" : ""}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onBlur={(e) => onUserNameBlur(e.target.value)}
        />
      </div>
      <div className="form__item">
        <label htmlFor="password">Password</label>
        <input
          className={isPasswordError ? "invalid" : ""}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={(e) => onPasswordBlur(e.target.value)}
        />
      </div>
    </div>
  );
};
