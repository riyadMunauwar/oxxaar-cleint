import { db } from "../services/firebaseInit";
import getCollection from "../services/getCollection";

export const ORDER_LIST_REQUEST = "ORDER_LIST_REQUEST";
export const ORDER_LIST_SUCCESS = "ORDER_LIST_SUCCESS";
export const ORDER_LIST_FAIL = "ORDER_LIST_FAIL";

const initState = { loading: false, items: [], error: "" };

export default function ordersReducer(state = initState, action) {
  switch (action.type) {
    case ORDER_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case ORDER_LIST_SUCCESS: {
      return { ...state, loading: false, items: action.payload };
    }
    case ORDER_LIST_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
}

export const getAllOrder = function () {
  return async function (dispatch) {
    dispatch({ type: ORDER_LIST_REQUEST });

    try {
      const data = await getCollection({ db, collection: "orders" });
      dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ORDER_LIST_FAIL, payload: error });
    }
  };
};
