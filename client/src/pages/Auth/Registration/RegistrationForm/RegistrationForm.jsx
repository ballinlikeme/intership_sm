import React, { useState, useEffect } from "react";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "lib/router/utils/routerNames";
import { useRegisterMutation } from "lib/redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authorizeUser } from "lib/redux/slices/authSlice";
import "./RegistrationForm.css";

export const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isFirstNameError, setIsFirstNameError] = useState(false);
  const [isLastNameError, setIsLastNameError] = useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsUsernameError(false);
    setIsPasswordError(false);
    setIsConfirmPasswordError(false);
    setIsFirstNameError(false);
    setIsLastNameError(false);
  }, [username, password, firstName, lastName, confirmPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      username,
      password,
      name: firstName,
      surname: lastName,
      passwordConfirmation: confirmPassword,
    };

    register(requestBody).then((result) => {
      if (result.data?.accessToken) {
        dispatch(authorizeUser());
        navigate(ROUTE_NAMES.PROJECTS);
      } else {
        setErrorMessage(result.error.message);
        if ("path" in result.error) {
          const erroredField = result.error.path[0];
          switch (erroredField) {
            case "username":
              setIsUsernameError(true);
              break;
            case "password":
              setIsPasswordError(true);
              break;
            case "name":
              setIsFirstNameError(true);
              break;
            case "surname":
              setIsLastNameError(true);
              break;
            case "passwordConfirmation":
              setIsConfirmPasswordError(true);
              break;
            default:
              return null;
          }
        }
      }
    });
  };

  return (
    <form className="form">
      <div className="form__header">
        <h1>Sing Up</h1>
      </div>
      <div className="form__content">
        <div className="form__body">
          <div className="form__list">
            <div className="form__item">
              <label className="reg__label" htmlFor="username">
                Username
              </label>
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
              />
              {isUsernameError && <div>{errorMessage}</div>}
            </div>
            <div className="form__item">
              <label className="reg__label" htmlFor="pass">
                Password
              </label>
              <Input
                className={
                  isPasswordError ? "app__input invalid" : "app__input"
                }
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                id="pass"
                aria-label="password"
              />
              {isPasswordError && <div>{errorMessage}</div>}
            </div>
            <div className="form__item">
              <label className="reg__label" htmlFor="pass-confirm">
                Confirm Password
              </label>
              <Input
                className={
                  isConfirmPasswordError ? "app__input invalid" : "app__input"
                }
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                id="pass-confirm"
                aria-label="password-confirm"
              />
              {isConfirmPasswordError && <div>{errorMessage}</div>}
            </div>
            <div className="form__item">
              <label className="reg__label" htmlFor="first-name">
                First Name
              </label>
              <Input
                className={
                  isFirstNameError ? "app__input invalid" : "app__input"
                }
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                id="first-name"
                aria-label="first-name"
              />
              {isFirstNameError && <div>{errorMessage}</div>}
            </div>
            <div className="form__item">
              <label className="reg__label" htmlFor="last-name">
                Last Name
              </label>
              <Input
                className={
                  isLastNameError ? "app__input invalid" : "app__input"
                }
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                id="last-name"
                aria-label="last-name"
              />
              {isLastNameError && <div>{errorMessage}</div>}
            </div>
          </div>
        </div>
        <div className="form__footer reg__footer">
          <div className="form__button reg__button">
            <Button onClick={handleSubmit} aria-label="submit-button">
              Sign up
            </Button>
          </div>
          <div className="form__redirect">
            Already have an account?{" "}
            <span>
              <Link to={ROUTE_NAMES.LOGIN}>Sign in</Link>
            </span>
            .
          </div>
        </div>
      </div>
    </form>
  );
};
