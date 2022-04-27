import React, { createContext, useReducer } from "react";
import { LoginReducer } from "./reducer/auth";
import {auctionReducer} from "./reducer/auction";


const initialStateAuth = {
  loading: false,
  auth: true,
  error: "",
  token: "",
};

const initialStateAuction = [];

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(LoginReducer, initialStateAuth);
  const [auctionState, auctionDispatch] = useReducer(auctionReducer, initialStateAuction);

  // Async Action
  const contextValue = {
    authState,
    authDispatch,
    auctionState,
    auctionDispatch
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
