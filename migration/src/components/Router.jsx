import React from "react";
import { Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../utils/routes";
import { RequireAuth } from "../hoc/RequireAuth";

export const Router = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ))}
      {PRIVATE_ROUTES.map(({ id, path, element }) => (
        <Route
          key={id}
          path={path}
          element={<RequireAuth>{element}</RequireAuth>}
        />
      ))}
    </Routes>
  );
};
