import { auth } from "../firebaseInit";

export const isLogin = () => {
  if (auth.currentUser) {
    return true;
  }
  return false;
};

export const getUser = () => {
  if (auth.currentUser) {
    return auth.currentUser.user;
  }
  return false;
};
