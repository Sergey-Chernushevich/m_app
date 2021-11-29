/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import searchActions from "../../actions/searchActions";
import styles from "./SearchForm.module.scss";

function SearchForm(props) {
  const { searchText, setNewSearchText, findMovie, setLoading, currentPage } =
    props;
  useEffect(() => {
    findMovie(searchText, currentPage);
    setLoading();
  }, [currentPage, searchText]);

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
          placeholder="Search for a movie"
          className={styles.searchInput}
          type="text"
          onChange={handleSearchTextChange}
          value={searchText}
        />
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
