import React, { useReducer } from "react";
import { themeInitialState, themeReducer } from "./Reducers/ThemeReducer";
import { userInitialState, userReducer } from "./Reducers/UserReducer";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState
  );
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
