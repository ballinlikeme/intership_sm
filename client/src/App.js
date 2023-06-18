import React, { useEffect } from "react";
import { Router } from "./lib/router/Router";
import { useLazyCheckAuthQuery } from "lib/redux/api/authApi";

function App() {
  const [checkAuth] = useLazyCheckAuthQuery();

  useEffect(() => {
    checkAuth();
  }, []);

  return <Router />;
}

export default App;
