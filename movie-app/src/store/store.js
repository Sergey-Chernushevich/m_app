import { createStore, compose } from "redux";
import { rootReduser } from "../redusers/rootReduser";

// const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReduser,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
