import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, changeUserName } from "../../store/slices/authSlice";
import "../../styles/authBody.css";

export const AuthBody = () => {
  const [userName, setUserName] = useState(
    useSelector((state) => state.auth.userName)
  );
  const [password, setPassword] = useState(
    useSelector((state) => state.auth.password)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeUserName(userName));
  }, [userName, dispatch]);

  useEffect(() => {
    dispatch(changePassword(password));
  }, [password, dispatch]);

  return (
    <div className="form__body">
      <div className="form__item">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form__item">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
};
