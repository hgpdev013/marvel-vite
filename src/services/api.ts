import axios, { AxiosError } from "axios";
import { useAuth } from "../hooks";

const BASE_URL = "https://gateway.marvel.com/v1/public";

export const setupAPIClient = () => {
  const { publicKey, handleLogout } = useAuth();

  const marvelApi = axios.create({
    baseURL: BASE_URL,
    params: {
      apikey: publicKey,
    },
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.status === 401 || error.status === 403) {
        handleLogout();
      }
      return Promise.reject(error);
    }
  );
  return marvelApi;
};
