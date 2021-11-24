import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseInit";

const signUpWithEmailPassword = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return error;
  }
};

export default signUpWithEmailPassword;
