import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReduser from "./redusers";

const middleware = [thunk];
const initialState = {};

const store = createStore(
  initialState,
  rootReduser,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
