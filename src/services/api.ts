import axios, { AxiosError } from "axios";
import { md5 } from "js-md5";
import { Cookies } from "react-cookie";

const BASE_URL = "https://gateway.marvel.com/v1/public";

export const setupAPIClient = () => {
  const cookies = new Cookies();
  const ts = new Date().toString();
  const publicKey = cookies.get("publicKey");
  const privateKey = cookies.get("privateKey");

  const marvelApi = axios.create({
    baseURL: BASE_URL,
  });

  marvelApi.interceptors.request.use((config) => {
    const newConfig = config;
    newConfig.params = {
      ...config.params,
      apikey: publicKey,
      ts,
      hash: md5(ts + privateKey + publicKey),
    };
    return newConfig;
  });

  marvelApi.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.status === 401 || error.status === 403) {
        cookies.remove("publicKey");
        cookies.remove("privateKey");
      }
      return Promise.reject(error);
    }
  );
  return marvelApi;
};
