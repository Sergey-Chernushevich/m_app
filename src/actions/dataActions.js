import { GET_MOVIES, GET_MOVIE } from "./actionTypes";

export function getMovies(currentPage = 1) {
  return async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ef49482d&s="man"&plot=full&page=${currentPage}`
    );
    const json = await response.json();
    dispatch({ type: GET_MOVIES, payload: json });
  };
}

export function getMovie(id) {
  return async (dispatch) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ef49482d&i=${id}&plot=full`
    );
    const json = await response.json();
    dispatch({ type: GET_MOVIE, payload: json });
  };
}
