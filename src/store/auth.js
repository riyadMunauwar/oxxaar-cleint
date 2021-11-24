import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import invoke from "../utils/invokeCallback";
import { auth } from "../services/firebaseInit";

export const ON_AUTH_STATE_CHANGE = "ON_AUTH_STATE_CHANGE";

export const SIGNUP_WITH_PROVIDER_REQUEST = "SIGNUP_WITH_PROVIDER";
export const SIGNUP_WITH_PROVIDER_SUCCESS = "SIGNUP_WITH_PROVIDER_SUCCESS";
export const SIGNUP_WITH_PROVIDER_FAIL = "SIGNUP_WITH_PROVIDER_FAIL";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

const initialState = {
  loading: false,
  isLogin: false,
  userInfo: {},
  error: "",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_WITH_PROVIDER_REQUEST: {
      return { ...state, loading: true };
    }
    case SIGNUP_WITH_PROVIDER_SUCCESS: {
      return {
        ...state,
        loaidng: false,
        isLogin: true,
        userInfo: action.payload,
      };
    }
    case SIGNUP_WITH_PROVIDER_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    case ON_AUTH_STATE_CHANGE: {
      return { ...state, isLogin: true, userInfo: action.payload };
    }
    case SIGNUP_REQUEST: {
      return { ...state, loading: true };
    }

    case SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLogin: true,
        userInfo: action.payload,
      };
    }

    case SIGNUP_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }

    case LOGIN_REQUEST: {
      return { ...state, loading: true };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLogin: true,
        userInfo: action.payload,
      };
    }

    case LOGIN_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }

    case LOGOUT_REQUEST: {
      return { ...state, loading: true };
    }

    case LOGOUT_SUCCESS: {
      return { ...state, loading: false, isLogin: false, userInfo: {} };
    }

    case LOGOUT_FAIL: {
      return { ...state, loading: false, error: "" };
    }

    default:
      return { ...state };
  }
}

export const signUpWithEmailPassword =
  (email, password, callback) => async (dispatch) => {
    if (email && password) {
      dispatch({ type: SIGNUP_REQUEST });

      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        dispatch({ type: SIGNUP_SUCCESS, payload: user });
        invoke(callback);
      } catch (error) {
        dispatch({ type: SIGNUP_FAIL, payload: error });
      }
    }
  };

export const loginWithEmailPassword =
  (email, password, callback) => async (dispatch) => {
    if (email && password) {
      dispatch({ type: LOGIN_REQUEST });

      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        invoke(callback);
      } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error });
      }
    }
  };

export const logOutUser = (callback) => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });

  try {
    await signOut(auth);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error });
  }
};

export const authStateChange = (user) => (dispatch) => {
  dispatch({ type: ON_AUTH_STATE_CHANGE, payload: user });
};

export const signUpWithGoogle = () => async (dispatch) => {
  dispatch({ type: SIGNUP_WITH_PROVIDER_REQUEST });

  try {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    dispatch({ type: SIGNUP_WITH_PROVIDER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: SIGNUP_WITH_PROVIDER_FAIL, payload: error });
  }
};

export const signUpWithFacebook = () => async (dispatch) => {
  dispatch({ type: SIGNUP_WITH_PROVIDER_REQUEST });

  try {
    const provider = new FacebookAuthProvider();
    const user = await signInWithPopup(auth, provider);
    dispatch({ type: SIGNUP_WITH_PROVIDER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: SIGNUP_WITH_PROVIDER_FAIL, payload: error });
  }
};
