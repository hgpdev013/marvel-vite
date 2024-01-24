import { useContext } from "react";
import { AuthContext } from "../contexts";

export const useAuth = () => {
  const contextData = useContext(AuthContext);
  return contextData;
};
