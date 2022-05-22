import React, { useCallback, useEffect, useReducer } from "react";
import { themeInitialState, themeReducer } from "./Reducers/ThemeReducer";
import { userInitialState, userReducer } from "./Reducers/UserReducer";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState
  );

  // to check theme after page reload
  const currentTheme = localStorage.getItem("theme");
  const themeCheck = useCallback(() => {
    if (currentTheme === "dark") {
      themeDispatch({ type: "DARK_MODE" });
    } else if (currentTheme === "light") {
      themeDispatch({ type: "LIGHT_MODE" });
    }
  }, [currentTheme]);
  useEffect(() => {
    themeCheck();
  }, [themeCheck]);

  return (
    <Context.Provider
      value={{
        //   user States
        user: userState.user,
        loggedIn: userState.loggedIn,
        fetchingUser: userState.isFetching,
        userError: userState.error,
        userMessage: userState.message,
        userDispatch,
        // theme states
        light: themeState.lightMode,
        dark: themeState.darkMode,
        theme: themeState.theme,
        themeDispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
