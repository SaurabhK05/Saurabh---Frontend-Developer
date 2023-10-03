import Cookies from "js-cookie";

const authValue = Cookies.get("jwt") ? true : false;

export const globalInitialState = {
  isAuthUser: authValue,
};
