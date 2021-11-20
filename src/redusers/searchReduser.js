import {
  SEARCH_MOVIE,
  SET_NEW_SEARCH_TEXT,
  GET_MOVIES,
  GET_MOVIE,
  FIND_MOVIE,
  LOADING,
  SET_CURRENT_PAGE,
} from "../actions/actionTypes";

const initialState = {
  searchText: "",
  movies: [],
  loading: false,
  movie: [],
  currentPage: 1,
  totalCount: 0,
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
        loading: false,
        totalCount: action.payload.totalResults,
      };
    case FIND_MOVIE:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        totalCount: action.payload.totalResults,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
