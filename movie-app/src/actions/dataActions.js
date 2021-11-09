import { GET_MOVIES, GET_MOVIE } from "./actionTypes";

export function getMovies() {
  return async (dispatch) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=ef49482d&s="man"&plot=full`
    );
    const json = await response.json();
    dispatch({ type: GET_MOVIES, payload: json });
  };
}

export function getMovie(id) {
  return async (dispatch) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=ef49482d&i=${id}&plot=full`
    );
    const json = await response.json();
    dispatch({ type: GET_MOVIE, payload: json });
  };
}

// export const getMovies = () => {
//   return async (dispatch) => {
//     const response = axios.get(
//       `http://www.omdbapi.com/?apikey=ef49482d&s="man"`
//     );
//     dispatch(setMovies(response.data));
//   };
// };
