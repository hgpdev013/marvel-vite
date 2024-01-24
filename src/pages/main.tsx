import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Routes from "../router/router";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{path:'/'}}>
      <Routes />
    </CookiesProvider>
  </React.StrictMode>
);
