import { ProjectsPage } from "../pages/ProjectsPage";
import { LoginPage } from "../pages/LoginPage";

export const PUBLIC_ROUTES = [
  {
    id: 1,
    path: "/login",
    element: <LoginPage />,
  },
];

export const PRIVATE_ROUTES = [
  {
    id: 1,
    path: "/",
    element: <ProjectsPage />,
  },
];
