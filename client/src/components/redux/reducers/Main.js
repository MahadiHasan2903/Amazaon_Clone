import { getProductsReducer } from "./Productsreducer";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
  getproductsdata: getProductsReducer,
});

export default rootreducer;

// This file is used for combine all the reducer into the rootreducer
