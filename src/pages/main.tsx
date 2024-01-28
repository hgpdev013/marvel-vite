import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import {
  AuthProvider,
  SidebarProvider,
  ThemeManagementProvider,
} from "../contexts";
import { Routes } from "../router/router";
import { GlobalStyle } from "../styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <CookiesProvider defaultSetOptions={{ path: "/" }}>
    <AuthProvider>
      <ThemeManagementProvider>
        <SidebarProvider>
          <Routes />
          <GlobalStyle />
        </SidebarProvider>
      </ThemeManagementProvider>
    </AuthProvider>
  </CookiesProvider>
  // </React.StrictMode>
);
