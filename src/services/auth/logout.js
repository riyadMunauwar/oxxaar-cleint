import { signOut } from "@firebase/auth";
import { auth } from "../firebaseInit";

const logOut = async () => {
  return await signOut(auth);
};

export default logOut;
