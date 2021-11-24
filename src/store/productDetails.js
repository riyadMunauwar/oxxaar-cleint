export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";

const inititalState = { loading: false, product: {}, error: "" };

export default function productDetailsReducer(state = inititalState, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST: {
      return { ...state, loading: true };
    }
    case PRODUCT_DETAILS_SUCCESS: {
      return { ...state, product: action.payload };
    }
    case PRODUCT_DETAILS_FAIL: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
}

export const getProductDetails = (productId) => (dispatch, getState) => {
  // Featch Product Here
};
