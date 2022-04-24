import React, { createContext, useReducer } from "react";
import { LoginReducer } from "./reducer/auth";

const initialStateAuth = {
  loading: false,
  auth: true,
  error: "",
  token: "",
};

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(LoginReducer, initialStateAuth);

  // Async Action
  const contextValue = {
    authState,
    authDispatch,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
