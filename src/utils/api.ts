import axios from "axios";
import { useAuth } from "../contexts/auth";

const BASE_URL = "https://gateway.marvel.com/";

const { publicKey, privateKey } = useAuth();

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: publicKey,
  },
});
