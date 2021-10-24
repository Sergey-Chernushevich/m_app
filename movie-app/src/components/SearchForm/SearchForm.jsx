/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import searchActions from "../../actions/searchActions";
import { connect, useDispatch } from "react-redux";
import { getMovies } from "../../actions/dataActions";

function SearchForm(props) {
  const { searchText, setNewSearchText, findMovie } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getMovies());
  }, []);

  const handleSearchTextChange = (e) => {
    setNewSearchText(e.target.value);
  };
  const handleSearchMovie = (e) => {
    e.preventDefault();
    findMovie(searchText);
  };
  return (
    <div>
      <form action="submit" onSubmit={handleSearchMovie}>
        <input
          type="text"
          onChange={handleSearchTextChange}
          value={searchText}
        />
        <button type="submit" className="">
          Search
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchText: state.movies.searchText,
});

export default connect(mapStateToProps, { ...searchActions })(SearchForm);
