import { Projects } from "../../../pages/Projects/Projects";
import { Login } from "../../../pages/Login/Login";

export const PUBLIC_ROUTES = [
  {
    id: 1,
    path: "/login",
    element: <Login />,
  },
];

export const PRIVATE_ROUTES = [
  {
    id: 1,
    path: "/",
    element: <Projects />,
  },
];
