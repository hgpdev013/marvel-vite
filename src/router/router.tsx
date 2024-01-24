import { ReactElement } from "react";
import {
  Route,
  BrowserRouter,
  Routes as RoutesR,
  Navigate,
} from "react-router-dom";
import { useAuth } from "../contexts/auth";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import CreatorsPage from "../pages/creators";
import ComicsPage from "../pages/comics";
import CharactersPage from "../pages/characters";

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
        <Route
          path="/creators"
          element={verifyAuthentication(<CreatorsPage />)}
        />
        <Route path="/comics" element={verifyAuthentication(<ComicsPage />)} />
        <Route
          path="/characters"
          element={verifyAuthentication(<CharactersPage />)}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </RoutesR>
    </BrowserRouter>
  );
};

export default Routes;
