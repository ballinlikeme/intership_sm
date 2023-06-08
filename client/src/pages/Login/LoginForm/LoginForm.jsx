import React, { useState, useEffect } from "react";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { authorizeUser } from "lib/redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "lib/redux/api/authApi";
import { Loader } from "components/Loader/Loader";
import "./LoginForm.css";

export const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isFormError, setIsFormError] = useState(false);
  const [isErrorFromApi, setIsErrorFromApi] = useState(false);

  const [login, { error, isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormError(false);
    setIsErrorFromApi(false);
  }, [userName, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormError) {
      return;
    }
    if (!userName || !password) {
      return isFormError(true);
    }
    const user = { username: userName, password };
    login(user).then((response) => {
      if (response.data) {
        dispatch(authorizeUser());
        navigate("/");
      } else {
        setIsFormError(true);
        setIsErrorFromApi(true);
      }
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form className="form">
      <div className="form__header">
        <h1>Login</h1>
      </div>
      <div className="form__content">
        <div className="form__body">
          <div className="form__list">
            <div className="form__item">
              <label>Username</label>
              <Input
                className={isFormError ? "app__input invalid" : "app__input"}
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form__item">
              <label>Password</label>
              <Input
                className={isFormError ? "app__input invalid" : "app__input"}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {isErrorFromApi && (
            <div className="form__error">{error.data.message}</div>
          )}
        </div>
        <div className="form__footer">
          <div className="form__restore">Forgot your password?</div>
          <div className="form__button">
            <Button disabled={isFormError} onClick={(e) => handleSubmit(e)}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
