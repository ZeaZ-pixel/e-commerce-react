import { combineReducers } from "redux";
import cartReducer from "./cart";
import productsReducer from "./product";
import orderReducer from './order'
import errorReducer from "./error";

export const rootReducer = combineReducers(
  {
    cartReducer,
    productsReducer,
    orderReducer,
    errorReducer
  }
)