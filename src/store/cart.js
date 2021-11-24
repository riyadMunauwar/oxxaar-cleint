import { notification } from "antd";
import cartSchema from "../utils/schema/cartSchema";

export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_ADD_ITEM_FAIL = "CART_ADD_ITEM_FAIL";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_INCREAMENT_QTY = "CART_INCREAMENT_QTY";
export const CART_DECREAMENT_QTY = "CART_DECREAMENT_QTY";
export const CART_ADD_SHIPPING_ADDRESS = "CART_ADD_SHIPPING_ADDRESS";
export const CART_ADD_PAYMENT_METHOD = "CART_ADD_PAYMENT_METHOD";
export const CART_EMPTY = "CART_EMPTY";

const initialState = {
  loading: false,
  items: [],
  shppingAddress: {},
  paymentMethod: {},
  error: "",
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const cartItem = action.payload;
      const ifExists = state.items.find(
        (item) => item.productId === cartItem.productId
      );

      if (ifExists) {
        notification.info({
          message: "Product alreasy exits in cart",
          placement: "bottomRight",
        });
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === cartItem.productId ? cartItem : item
          ),
        };
      }
      return { ...state, items: [...state.items, cartItem] };
    }
    case CART_INCREAMENT_QTY: {
      const findItem = state.items.find(
        (item) => item.productId === action.payload
      );

      if (findItem) {
        if (findItem.countInStock >= findItem.qty) {
          findItem.qty++;
        } else {
          notification.error({
            message: "Quantity not available",
          });
        }
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.payload ? findItem : item
          ),
        };
      }
      return { ...state };
    }
    case CART_DECREAMENT_QTY: {
      const findItem = state.items.find(
        (item) => item.productId === action.payload
      );

      if (findItem) {
        if (findItem.qty > 1) {
          findItem.qty--;
        } else {
          notification.error({
            message: "Minimum Quntity for order is one",
          });
        }
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.payload ? findItem : item
          ),
        };
      }
      return { ...state };
    }
    case CART_ADD_ITEM_FAIL: {
      return { ...state };
    }

    case CART_REMOVE_ITEM: {
      const findItem = state.items.find(
        (item) => item.productId === action.payload
      );
      if (findItem) {
        return {
          ...state,
          items: state.items.filter((item) =>
            item.productId === action.payload ? false : true
          ),
        };
      }
      return { ...state };
    }

    case CART_ADD_SHIPPING_ADDRESS: {
      return { ...state };
    }

    case CART_ADD_PAYMENT_METHOD: {
      return { ...state };
    }

    case CART_EMPTY: {
      return { ...state };
    }

    default:
      return state;
  }
}

export const cartAddItem = (productId, qty) => (dispatch, getState) => {
  const {
    products: { items },
  } = getState();

  const product = items.find((item) => item._id === productId);
  if (product) {
    const cartItem = cartSchema({
      name: product.name,
      price: product.price,
      photo: product.photo,
      countInStock: product.countInStock,
      qty: qty,
      productId: product._id,
    });

    dispatch({
      type: CART_ADD_ITEM,
      payload: cartItem,
    });
  }
};

export const removeCartItem = (productId) => async (dispatch) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
};

export const cartIncreamentQty = (productId) => async (dispatch, getState) => {
  dispatch({ type: CART_INCREAMENT_QTY, payload: productId });
};

export const cartDecreamentQty = (productId) => async (dispatch, getState) => {
  dispatch({ type: CART_DECREAMENT_QTY, payload: productId });
};
