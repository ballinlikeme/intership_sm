import React, { useState, useEffect } from "react";
import { Input } from "../../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, setPasswordError } from "../lib/redux/authStore";

export const AuthPassword = () => {
  const [password, setPassword] = useState(
    useSelector((state) => state.auth.password)
  );

  const isPasswordError = useSelector((state) => state.auth.isPasswordError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePassword(password));
  }, [password, dispatch]);

  const handleChange = (value) => {
    setPassword(value);
    dispatch(setPasswordError(!!!value));
  };

  return (
    <div className="form__item">
      <label htmlFor="password">Password</label>
      <Input
        className={isPasswordError ? "app__input invalid" : "app__input"}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
