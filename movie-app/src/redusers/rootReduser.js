import { combineReducers } from "redux";
import { searchReduser } from "./searchReduser";

export const rootReduser = combineReducers({
  movies: searchReduser,
});
