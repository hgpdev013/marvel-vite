import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export interface LoginParams {
  publicKey: string;
  privateKey: string;
}

type AuthContextData = {
  isAuthenticated: boolean;
  handleLogin: ({ publicKey, privateKey }: LoginParams) => void;
  handleLogout: () => void;
  publicKey: string;
  privateKey: string;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "publicKey",
    "privateKey",
  ]);
  const [publicKey, setPublicKey] = useState(cookies.publicKey || "");
  const [privateKey, setPrivateKey] = useState(cookies.privateKey || "");

  function handleLogin({ publicKey, privateKey }: LoginParams) {
    if (!publicKey || !privateKey) return;
    setPublicKey(publicKey);
    setPrivateKey(privateKey);
  }

  function handleLogout() {
    setPublicKey("");
    setPrivateKey("");
    removeCookie("publicKey");
    removeCookie("privateKey");
  }

  useEffect(() => {
    setCookie("publicKey", publicKey, {
      maxAge: 60 * 60 * 24, // 1 day
    });
    setCookie("privateKey", privateKey, {
      maxAge: 60 * 60 * 24, // 1 day
    });
  }, [publicKey, privateKey]);

  useEffect(() => {
    if (cookies.publicKey || cookies.privateKey) return;
    handleLogout();
  }, [cookies.publicKey, cookies.privateKey]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!cookies.publicKey || !!cookies.privateKey,
        publicKey: cookies.publicKey,
        privateKey: cookies.privateKey,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
