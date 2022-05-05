import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Logo from "./Logo.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <img src={Logo} alt="logo" />
    <App />
  </React.StrictMode>
);
reportWebVitals();
