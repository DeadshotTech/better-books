import React from "react";

import "./SearchBar.css";

function SearchBar({ query, onQueryChange }) {
  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
