import React from "react";

const handleSearchTextChange = (e) => {};

function SearchForm(props) {
  return (
    <div>
      <input type="text" onChange={handleSearchTextChange} />
    </div>
  );
}

export default SearchForm;
