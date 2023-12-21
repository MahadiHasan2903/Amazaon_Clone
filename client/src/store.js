import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducers from "./components/redux/reducers/Main";

const middleware = [thunk];

const store = configureStore(
  { reducer: rootreducers },
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
