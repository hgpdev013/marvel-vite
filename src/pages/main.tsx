import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "../router/router";
import { CookiesProvider } from "react-cookie";
import { GlobalStyle } from "../styles/global";
import { AuthProvider } from "../contexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>
);
