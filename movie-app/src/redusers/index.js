import { combineReducers } from "redux";
import searchReduser from "./searchReduser";

export default combineReducers({
  movies: searchReduser,
});
