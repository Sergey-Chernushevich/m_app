/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import searchActions from "../../actions/searchActions";
import { connect, useDispatch } from "react-redux";
import { getMovies } from "../../actions/dataActions";
import styles from "./SearchForm.module.scss";

function SearchForm(props) {
  const { searchText, setNewSearchText, findMovie, setLoading, currentPage } =
    props;
  useEffect(() => {
    findMovie(searchText, currentPage);
  }, [currentPage, searchText]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(currentPage));
    setLoading();
  }, [currentPage]);

  const handleSearchTextChange = (e) => {
    setNewSearchText(e.target.value);
  };

  const handleSearchMovie = (e) => {
    e.preventDefault();
    findMovie(searchText, currentPage);
  };
  return (
    <div className={styles.searchForm}>
      <form action="submit" onSubmit={handleSearchMovie}>
        <input
          placeholder="Movie"
          className={styles.searchInput}
          type="text"
          onChange={handleSearchTextChange}
          value={searchText}
        />
        <button type="submit" className={styles.searchBtn}></button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchText: state.movies.searchText,
  currentPage: state.movies.currentPage,
  perPage: state.movies.perPage,
  totalCount: state.movies.totalCount,
});

export default connect(mapStateToProps, { ...searchActions })(SearchForm);
