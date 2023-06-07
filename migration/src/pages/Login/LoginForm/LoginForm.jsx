import React, { useState, useEffect } from "react";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { useDispatch } from "react-redux";
import { authorizeUser } from "../../../lib/redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

export const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isUserNameError, setIsUserNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isPasswordError || isUserNameError) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isPasswordError, isUserNameError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isDisabled) {
      return;
    }
    if (!userName || !password) {
      return setIsDisabled(true);
    }
    if (userName !== "admin") {
      return setIsUserNameError(true);
    }
    if (password !== "1234") {
      return setIsPasswordError(true);
    }
    dispatch(authorizeUser());
    navigate("/");
  };

  const handleUserNameChange = (value) => {
    setUserName(value);
    if (value) {
      setIsUserNameError(false);
    } else {
      setIsUserNameError(true);
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value) {
      setIsPasswordError(false);
    } else {
      setIsPasswordError(true);
    }
  };

  return (
    <form className="form">
      <div className="form__header">
        <h1>Login</h1>
      </div>
      <div className="form__content">
        <div className="form__body">
          <div className="form__item">
            <label>Username</label>
            <Input
              className={isUserNameError ? "app__input invalid" : "app__input"}
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => handleUserNameChange(e.target.value)}
            />
          </div>
          <div className="form__item">
            <label>Password</label>
            <Input
              className={isPasswordError ? "app__input invalid" : "app__input"}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </div>
        </div>
        <div className="form__footer">
          <div className="form__restore">Forgot your password?</div>
          <div className="form__button">
            <Button disabled={isDisabled} onClick={(e) => handleSubmit(e)}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
