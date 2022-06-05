import React, { createContext, useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const login = () => {
    setisLoggedIn(true);
  };
  const logout = () => {
    setisLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export const AuthConsumer = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const isLoggedIn = context.isLoggedIn;
        return (
          <>
          <h1>{isLoggedIn ? "Logged In " : "Logged Out"}</h1>
          </>
        )
      }}
    </AuthContext.Consumer>
  );
};