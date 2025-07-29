"use client";
import { AuthContextI } from "@/interfaces";
import { createContext, useContext, useEffect, useState } from "react";

const AuthenticationContext = createContext<AuthContextI | undefined>(
  undefined
);

export const AuthenticationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasAuthenticationLoaded, setHasAuthenticationLoaded] = useState(false);

  useEffect(() => {
    const localStoredAuthentication = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(localStoredAuthentication === "true");
    setHasAuthenticationLoaded(true);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, hasAuthenticationLoaded, login }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error("Context error");
  }
  return context;
};
