/* eslint-disable import/no-anonymous-default-export */
import { SEARCH_MOVIE, SET_NEW_SEARCH_TEXT } from "./actionTypes";

const searchMovie = (searchText) => ({
  type: SEARCH_MOVIE,
  payload: searchText,
});

const setNewSearchText = (searchText) => ({
  type: SET_NEW_SEARCH_TEXT,
  payload: searchText,
});

export default {
  searchMovie,
  setNewSearchText,
};
