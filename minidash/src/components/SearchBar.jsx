import React from "react";
import "../css/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <button className="menu-btn">☰</button>
      <input type="text" placeholder="e.g. files.doc" />
      <button className="search-btn">🔍</button>
    </div>
  );
}

export default SearchBar;
