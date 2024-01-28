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
  <ThemeManagementProvider>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <AuthProvider>
        <SidebarProvider>
          <Routes />
          <GlobalStyle />
        </SidebarProvider>
      </AuthProvider>
    </CookiesProvider>
  </ThemeManagementProvider>
  // </React.StrictMode>
);
