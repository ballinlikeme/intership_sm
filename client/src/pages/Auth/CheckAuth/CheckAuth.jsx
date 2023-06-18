import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTE_NAMES } from "lib/router/utils/routerNames";

export const CheckAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) return <Navigate to={ROUTE_NAMES.PROJECTS} />;

  return children;
};
