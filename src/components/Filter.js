import React from "react";
import "../style/Filter.css";
import SearchButton from "@mui/icons-material/Search";

function Filter({
  handleSearchQuery,
  handleFilterChange,
  applyFilters,
  searchQuery,
}) {
  return (
    <div className="container">
      <form
        className="filter"
        onSubmit={(e) => {
          e.preventDefault();
          applyFilters();
        }}
      >
        <button className="searchButton" type="submit">
          <SearchButton />
        </button>
        <input
          className="searchInput"
          placeholder="Search"
          onChange={(e) => handleSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <select
          id="dropdown"
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option>Filter</option>
          <option value="location">Location</option>
          <option value="species">Species</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
