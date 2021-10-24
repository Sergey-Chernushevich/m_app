/* eslint-disable import/no-anonymous-default-export */
// import axios from "axios";
import {
  SEARCH_MOVIE,
  SET_NEW_SEARCH_TEXT,
  // FETCH_MOVIES,
} from "./actionTypes";
// import { APIKey } from "../APIKey";
const searchMovie = (searchText) => ({
  type: SEARCH_MOVIE,
  payload: searchText,
});

const setNewSearchText = (searchText) => ({
  type: SET_NEW_SEARCH_TEXT,
  payload: searchText,
});

// const fetchMovies = () => {
//   axios
//     .get(`http://www.omdbapi.com/?apikey=ef49482d&s="man"`)
//     .then((response) => ({
//       type: FETCH_MOVIES,
//       payload: response.data,
//     }))
//     .catch((err) => console.log(err));
// };

export default {
  searchMovie,
  setNewSearchText,
  // fetchMovies,
};
