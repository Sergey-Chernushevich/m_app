import {
  SEARCH_MOVIE,
  SET_NEW_SEARCH_TEXT,
  GET_MOVIES,
} from "../actions/actionTypes";

const initialState = {
  searchText: "",
  movies: [],
  loading: false,
  movie: [],
};

export const searchReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        searchText: action.payload,
        loading: false,
      };
    case SET_NEW_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};
