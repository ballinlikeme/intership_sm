import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  authorizeUser,
  changePassword,
  changeUserName,
  setPasswordError,
  setUserNameError,
  clearErrors,
} from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import "../../styles/authFooter.css";

export const AuthFooter = () => {
  const [disabled, setDisabled] = useState(false);

  const userName = useSelector((state) => state.auth.userName);
  const password = useSelector((state) => state.auth.password);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName || !password) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [userName, password]);

  const handleClick = (event) => {
    event.preventDefault();
    if (userName !== "admin" || password !== "1234") {
      if (userName !== "admin") dispatch(setUserNameError(true));
      if (password !== "1234") dispatch(setPasswordError(true));
      return;
    }
    dispatch(authorizeUser());
    dispatch(changePassword(""));
    dispatch(changeUserName(""));
    return navigate("/");
  };

  return (
    <div className="form__footer">
      <div className="form__restore">Forgot your password?</div>
      <div className="form__button">
        <button disabled={disabled} onClick={(e) => handleClick(e)}>
          Login
        </button>
      </div>
    </div>
  );
};
