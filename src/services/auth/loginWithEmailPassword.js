import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebaseInit";

const loginWithEmailPassword = async (email, password) => {
  if (email && password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};

export default loginWithEmailPassword;
