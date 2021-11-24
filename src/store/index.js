import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./products";
import ordersReducer from "./orders";
import userOrdersReducer from "./userOrders";
import categoryReducer from "./category";
import productDetailsReducer from "./productDetails";
import cartReducer from "./cart";
import cauroselReducer from "./caurosel";
import wishReducer from "./wish";
import authReducer from "./auth";

const reducer = combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  orders: ordersReducer,
  userOrders: userOrdersReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  caurosel: cauroselReducer,
  wish: wishReducer,
  auth: authReducer,
});

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
