import { ReactElement } from "react";
import {
  Route,
  BrowserRouter,
  Routes as RoutesR,
  Navigate,
} from "react-router-dom";
import { useAuth } from "../hooks";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import CreatorsPage from "../pages/creators";
import ComicsPage from "../pages/comics";
import CharactersPage from "../pages/characters";
import DetailsPage from "../pages/details";

export const Routes = () => {
  const { isAuthenticated } = useAuth();

  function verifyAuthentication(component: ReactElement) {
    if (isAuthenticated) return component;
    return <Navigate to="/login" />;
  }

  function verifyIsLogged(component: ReactElement) {
    if (!isAuthenticated) return component;
    return <Navigate to="/home" />;
  }

  return (
    <BrowserRouter>
      <RoutesR>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={verifyIsLogged(<LoginPage />)} />
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
        <Route
          path="/:type/:id"
          element={verifyAuthentication(<DetailsPage />)}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </RoutesR>
    </BrowserRouter>
  );
};

export default Routes;
