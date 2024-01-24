import axios, { AxiosError } from "axios";
import { useAuth } from "../contexts/auth";

const BASE_URL = "https://gateway.marvel.com/";

const { publicKey, privateKey, handleLogout } = useAuth();

export const api = axios.create({
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
