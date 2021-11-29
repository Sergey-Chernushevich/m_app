import { createStore, compose, applyMiddleware } from "redux";
import { rootReduser } from "../redusers/rootReduser";
import thunk from "redux-thunk";
const initialState = {};

const store = createStore(
  rootReduser,
  initialState,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
