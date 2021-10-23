import React from "react";
import searchActions from "../../actions/searchActions";
import { connect } from "react-redux";

function SearchForm(props) {
  const { searchText, setNewSearchText } = props;

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
