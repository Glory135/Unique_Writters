export const userInitialState = {
  user: null,
  loggedIn: false,
  isFetching: false,
  error: false,
  message: null,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loggedIn: false,
        isFetching: true,
        error: false,
        message: "Getting user details.....",
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loggedIn: true,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loggedIn: false,
        isFetching: false,
        error: true,
        message: "Error Loading User Details!!!",
      };
    case "LOGOUT":
      return {
        user: null,
        loggedIn: false,
        isFetching: false,
        error: false,
        message: "Logged Out!!",
      };
    default:
      return { state };
  }
};
