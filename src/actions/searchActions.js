/* eslint-disable import/no-anonymous-default-export */
import {
  SEARCH_MOVIE,
  SET_NEW_SEARCH_TEXT,
  FIND_MOVIE,
  LOADING,
  SET_CURRENT_PAGE,
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

const findMovie = (searchText, currentPage) => {
  if (searchText === "") {
    searchText = "man";
  }
  return async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${APIKey}&s=${searchText}&page=${currentPage}`
    );
    const json = await response.json();
    dispatch({ type: FIND_MOVIE, payload: json });
  };
};
const setLoading = () => {
  return {
    type: LOADING,
  };
};

const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};

export default {
  searchMovie,
  setNewSearchText,
  findMovie,
  setLoading,
  setCurrentPage,
};
