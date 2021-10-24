/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import searchActions from "../../actions/searchActions";
import { connect, useDispatch } from "react-redux";
import { getMovies } from "../../actions/dataActions";

function SearchForm(props) {
  const { searchText, setNewSearchText } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const handleSearchTextChange = (e) => {
    setNewSearchText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleSearchTextChange} value={searchText} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchText: state.movies.searchText,
});

export default connect(mapStateToProps, { ...searchActions })(SearchForm);
