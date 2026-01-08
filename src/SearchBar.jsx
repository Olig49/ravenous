import React from "react";

const SearchBar = () => {
      const sortByOptions = {
  BestMatch: "best_match",
  HighestRated: "rating",
  MostReviewed: "review_count"
};

  return (
    <div>
      <input type="text" placeholder="Search..." />
      <input type="text" placeholder="Location..." />
      <select>
        {Object.keys(sortByOptions).map((option) => (
          <option key={option} value={sortByOptions[option]}>
            {option}
          </option>
        ))}
      </select>
      <button>Search</button>
    </div>
  );
};



export default SearchBar;
