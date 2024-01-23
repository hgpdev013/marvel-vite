import { Route, BrowserRouter, Routes as RoutesR } from "react-router-dom";
import HomePage from "../pages/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesR>
        <Route path="/" element={<HomePage />} />
      </RoutesR>
    </BrowserRouter>
  );
};

export default Routes;
