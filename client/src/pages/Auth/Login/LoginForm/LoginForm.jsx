import React, { useState, useEffect } from "react";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import { useLoginMutation } from "lib/redux/api/authApi";
import { Loader } from "components/Loader/Loader";
import { ROUTE_NAMES } from "lib/router/utils/routerNames";
import { Link } from "react-router-dom";
import "./LoginForm.css";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isRequestError, setIsRequestError] = useState(false);

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (isUsernameError || isPasswordError || isRequestError) {
      setIsUsernameError(false);
      setIsPasswordError(false);
      setIsRequestError(false);
    }
  }, [username, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      login({ username, password }).then((result) => {
        if (result.error) {
          setErrorMessage(result.error.message);
          const erroredField = result.error.message.split(" ")[1];
          switch (erroredField) {
            case "username":
              setIsUsernameError(true);
              break;
            case "password":
              setIsPasswordError(true);
              break;
          }
        }
      });
    } catch (error) {
      setIsRequestError(true);
    }
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
              <label htmlFor="username">Username</label>
              <Input
                className={
                  isUsernameError ? "app__input invalid" : "app__input"
                }
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                aria-label="username"
                data-testid="username"
              />
              {isUsernameError && (
                <div className="form__error">{errorMessage}</div>
              )}
            </div>
            <div className="form__item">
              <label htmlFor="pass">Password</label>
              <Input
                className={
                  isPasswordError ? "app__input invalid" : "app__input"
                }
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="pass"
                aria-label="password"
              />
              {isPasswordError && (
                <div className="form__error">{errorMessage}</div>
              )}
            </div>
          </div>
        </div>
        {isRequestError && (
          <div className="form__error">Unexpected error. Try again later.</div>
        )}
        <div className="form__footer">
          <div className="form__redirect">
            Not a member?{" "}
            <Link to={ROUTE_NAMES.REGISTRATION}>
              <span>Sign up</span>.
            </Link>
          </div>
          <div className="form__button">
            <Button
              aria-label="submit-button"
              disabled={isUsernameError || isPasswordError}
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
