import React from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const isAuth = false;

  if (!isAuth) return <Navigate to={"/login"} />;

  return children;
};
