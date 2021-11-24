import getCollection from "../services/getCollection";
import { db } from "../services/firebaseInit";

export const CATEGORY_LIST_REQUEST = "CATEGORY_LIST_REQUEST";
export const CATEGORY_LIST_SUCCESS = "CATEGORY_LIST_SUCCESS";
export const CATEGORY_LIST_FAIL = "CATEGORY_LIST_FAIL";

const initState = { loading: false, items: [], error: "" };

export default function categoryReducer(state = initState, action) {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case CATEGORY_LIST_SUCCESS: {
      return { ...state, loading: false, items: action.payload };
    }
    case CATEGORY_LIST_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
}

export const getAllCategory = () => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_LIST_REQUEST });

  try {
    const categories = await getCollection({ db, collection: "categories" });
    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: categories,
    });
  } catch (error) {
    dispatch({ type: CATEGORY_LIST_FAIL, payload: error });
  }
};
