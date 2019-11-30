import React from "react";
import { render } from "react-dom";
import { App } from "./App.jsx";
import "./styles/app.css";
import { StoreProvider } from "./Store";
render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
