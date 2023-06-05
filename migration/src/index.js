import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./lib/redux/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./styles/common/index.css";
import "./styles/common/null.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
