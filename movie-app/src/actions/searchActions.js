/* eslint-disable import/no-anonymous-default-export */
import {
  SEARCH_MOVIE,
  SET_NEW_SEARCH_TEXT,
  FIND_MOVIE,
  LOADING,
} from "./actionTypes";

import { APIKey } from "../APIKey";

const searchMovie = (searchText) => ({
  type: SEARCH_MOVIE,
  payload: searchText,
});

const setNewSearchText = (searchText) => ({
  type: SET_NEW_SEARCH_TEXT,
  payload: searchText,
});

const findMovie = (searchText) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${APIKey}&s=${searchText}`
    );
    const json = await response.json();
    dispatch({ type: FIND_MOVIE, payload: json.Search });
  };
};
const setLoading = () => {
  return {
    type: LOADING,
  };
};

export default {
  searchMovie,
  setNewSearchText,
  findMovie,
  setLoading,
};
