import React, { useEffect, useState } from "react";
import { Input } from "ui/Input";
import { useSelector, useDispatch } from "react-redux";
import { changeUserName, setUserNameError } from "../lib/redux/authStore";

export const AuthUserName = () => {
  const [userName, setUserName] = useState(
    useSelector((state) => state.auth.userName)
  );

  const dispatch = useDispatch();
  const isUserNameError = useSelector((state) => state.auth.isUserNameError);

  const handleChange = (value) => {
    setUserName(value);
    dispatch(setUserNameError(!!!value));
  };

  useEffect(() => {
    dispatch(changeUserName(userName));
  }, [userName, dispatch]);

  return (
    <div className="form__item">
      <label htmlFor="username">Username</label>
      <Input
        className={isUserNameError ? "app__input invalid" : "app__input"}
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={userName}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
