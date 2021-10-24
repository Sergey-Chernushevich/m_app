import { GET_MOVIES } from "./actionTypes";

export function getMovies() {
  return async (dispatch) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=ef49482d&s="man"`
    );
    const json = await response.json();
    dispatch({ type: GET_MOVIES, payload: json });
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
