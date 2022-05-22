export const themeInitialState = {
  lightMode: true,
  darkMode: false,
  theme: {
    primary: "#6200EE",
    secondary: "#F50057",
    tertiary: "#F6F6F6",
    bg: "white",
    text: "#000000",
  },
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      localStorage.setItem("theme", "dark");
      return {
        lightMode: false,
        darkMode: true,
        theme: {
          primary: "#1F1F1F",
          secondary: "#F50057",
          tertiary: "#1F1F1F",
          bg: "#121212",
          text: "white",
        },
      };
    case "LIGHT_MODE":
      localStorage.setItem("theme", "light");
      return {
        lightMode: true,
        darkMode: false,
        theme: {
          primary: "#6200EE",
          secondary: "#F50057",
          tertiary: "#F6F6F6",
          bg: "white",
          text: "#000000",
        },
      };
    default:
      return { state };
  }
};
