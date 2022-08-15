import React from "react";
import "./search-bar.styles.css";

const SearchBar = ({ placeholder, handleChange }) => {
  // console.log(handleChange);
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
