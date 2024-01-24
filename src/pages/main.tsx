import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "../router/router";
import { CookiesProvider } from "react-cookie";
import { GlobalStyle } from "../styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <Routes />
      <GlobalStyle />
    </CookiesProvider>
  </React.StrictMode>
);
