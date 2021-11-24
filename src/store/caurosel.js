import getCollection from "../services/getCollection";
import { db } from "../services/firebaseInit";

export const CAUROSEL_REQUEST = "CAUROSEL_REQUEST";
export const CAUROSEL_SUCCESS = "CAUROSEL_SUCCESS";
export const CAUROSEL_FAIL = "CAUROSEL_FAIL";

const initialState = { loading: false, items: [], error: "" };

export default function cauroselReducer(state = initialState, action) {
  switch (action.type) {
    case CAUROSEL_REQUEST: {
      return { ...state, loading: true };
    }
    case CAUROSEL_SUCCESS: {
      return { ...state, loading: false, items: action.payload };
    }
    case CAUROSEL_FAIL: {
      return { ...state, error: "" };
    }
    default:
      return state;
  }
}

export const getCauroselFromDatabase = () => async (dispatch) => {
  dispatch({ type: CAUROSEL_REQUEST });

  try {
    const data = await getCollection({ db: db, collection: "caurosels" });
    dispatch({ type: CAUROSEL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAUROSEL_FAIL, payload: error });
  }
};
