import axios from "axios";
import { env } from "../env";

export const onAxiosError = (error: unknown) => {
  throw error;
};

export const ApiPrivate = axios.create({
  baseURL: env.VITE_API_PRIVATE_URL,
});
