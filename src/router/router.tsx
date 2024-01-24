import { ReactElement } from "react";
import {
  Route,
  BrowserRouter,
  Routes as RoutesR,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import { useAuth } from "../contexts/auth";

export const Routes = () => {
  function verifyAuthentication(component: ReactElement) {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) return component;
    return <Navigate to="/login" />;
  }

  return (
    <BrowserRouter>
      <RoutesR>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={verifyAuthentication(<HomePage />)} />
      </RoutesR>
    </BrowserRouter>
  );
};

export default Routes;
