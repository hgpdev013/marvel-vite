import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { AuthProvider, ThemeManagementProvider } from "../contexts";
import { Routes } from "../router/router";
import { GlobalStyle } from "../styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <AuthProvider>
        <ThemeManagementProvider>
          <Routes />
          <GlobalStyle />
        </ThemeManagementProvider>
      </AuthProvider>
    </CookiesProvider>
  // </React.StrictMode>
);
