import { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RoutesR,
} from "react-router-dom";
import { useAuth } from "../hooks";
import DetailsPage from "../pages/details";
import HomePage from "../pages/home";
import ListsPage from "../pages/lists";
import LoginPage from "../pages/login";

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
      <ToastContainer position="top-right" />
      <RoutesR>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={verifyIsLogged(<LoginPage />)} />
        <Route path="/home" element={verifyAuthentication(<HomePage />)} />
        <Route path="/:type" element={verifyAuthentication(<ListsPage />)} />
        <Route
          path="/:type/:id/"
          element={verifyAuthentication(<DetailsPage />)}
        />
        <Route
          path="/:type/:id/:subType"
          element={verifyAuthentication(<DetailsPage />)}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </RoutesR>
    </BrowserRouter>
  );
};

export default Routes;
