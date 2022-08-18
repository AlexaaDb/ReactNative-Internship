import * as api from "../api";

export const registerUser = (values) => ({
  type: "AUTH_USER",
  payload: api.registerUser(values),
});

export const loginUser = (values) => ({
  type: "AUTH_USER",
  //type: "LOGIN_USER",
  payload: api.loginUser(values),
});

export const autoSignIn = () => ({
  type: "AUTH_USER",
  //type: "AUTO_SIGNIN",
  payload: api.autoSignIn(),
});

export const logoutUser = () => ({
  type: "LOGOUT_USER",
  //type: "AUTO_SIGNIN",
  payload: api.logoutUser(),
});

export const clearAuthError = () => ({
  type: "CLEAR_AUTH_ERROR",
});
