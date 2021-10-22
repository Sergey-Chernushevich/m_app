import { SEARCH_MOVIE } from "./types";

export const searchMovie = (text) => ({
  type: SEARCH_MOVIE,
  payload: text,
});
