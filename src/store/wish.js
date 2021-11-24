import { notification } from "antd";
export const ADD_TO_WISH = "ADD_TO_WISH";
export const REMOVE_TO_WISH = "REMOVE_TO_WISH";
export const ADD_TO_WISH_FAIL = "ADD_TO_WISH_FAIL";

const initialState = { loading: false, items: [], error: "" };

export default function wishReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISH: {
      const wishProduct = action.payload;
      const exists = state.items.find((item) => item._id === wishProduct._id);
      if (exists) {
        notification.info({
          message: "Product already exits in wishlist !",
          placement: "bottomRight",
        });
        return { ...state };
      }
      return { ...state, items: [...state.items, wishProduct] };
    }
    case REMOVE_TO_WISH: {
      return { ...state };
    }
    case ADD_TO_WISH_FAIL: {
      return { ...state };
    }
    default:
      return state;
  }
}

export const addToWishList = (productId) => (dispatch, getState) => {
  const {
    products: { items },
  } = getState();

  const product = items.find((item) => item._id === productId);

  if (product) {
    dispatch({ type: ADD_TO_WISH, payload: product });
  }
};
