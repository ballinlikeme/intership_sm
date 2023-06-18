import React, { useState } from "react";
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

  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
                // className={isFormError ? "app__input invalid" : "app__input"}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                aria-label="username"
              />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <div className="form__item">
                <label className="reg__label" htmlFor="pass">
                  Password
                </label>
                <Input
                  // className={isFormError ? "app__input invalid" : "app__input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  id="pass"
                  aria-label="password"
                />
              </div>
              <div className="form__item">
                <label className="reg__label" htmlFor="pass-confirm">
                  Confirm Password
                </label>
                <Input
                  // className={isFormError ? "app__input invalid" : "app__input"}
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  id="pass-confirm"
                  aria-label="password-confirm"
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <div className="form__item">
                <label className="reg__label" htmlFor="first-name">
                  First Name
                </label>
                <Input
                  // className={isFormError ? "app__input invalid" : "app__input"}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  id="first-name"
                  aria-label="first-name"
                />
              </div>
              <div className="form__item">
                <label className="reg__label" htmlFor="last-name">
                  Last Name
                </label>
                <Input
                  // className={isFormError ? "app__input invalid" : "app__input"}
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  id="last-name"
                  aria-label="last-name"
                />
              </div>
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
