import { createContext } from "react";

export default createContext<{
  token?: string;
  userId?: string;
  login: (token?: string, userId?: string, expiresIn?: number) => void;
  logout?: () => void;
}>({
  token: "",
  userId: "",
  login: (token?: string, userId?: string, expiresIn?: number) => {},
  logout: () => {},
});
