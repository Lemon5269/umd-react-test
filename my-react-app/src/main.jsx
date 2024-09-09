import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
window.React = React;
window.ReactDOM = ReactDOM;
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
