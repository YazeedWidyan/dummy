import React from "react";
import style from "../styles/searchBar.module.css";

const SearchBar = ({ setKeyword }) => {
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className={style.SearchBarContainer}>
      <div className="container">
        <input
          onChange={(e) => handleSearch(e)}
          className={style.searchBar}
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchBar;
