import React from "react";
import { ROUTE_NAMES } from "./routerNames";
import { Projects } from "pages/Projects/Projects";
import { Login } from "pages/Auth/Login/Login";
import { Registration } from "pages/Auth/Registration/Registration";

export const PUBLIC_ROUTES = [
  {
    id: 0,
    path: ROUTE_NAMES.LOGIN,
    element: <Login />,
  },
  {
    id: 1,
    path: ROUTE_NAMES.REGISTRATION,
    element: <Registration />,
  },
];

export const PRIVATE_ROUTES = [
  {
    id: 0,
    path: ROUTE_NAMES.PROJECTS,
    element: <Projects />,
  },
];
