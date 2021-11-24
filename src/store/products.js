import { db } from "../services/firebaseInit";
import getCollection from "../services/getCollection";

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

const initState = { loading: false, items: [], error: "" };

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case PRODUCT_LIST_SUCCESS: {
      return { ...state, loading: false, items: action.payload };
    }
    case PRODUCT_LIST_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
}

export const getAllProduct = function () {
  return async function (dispatch, getState) {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    try {
      const data = await getCollection({ db, collection: "products" });
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
    }
  };
};
