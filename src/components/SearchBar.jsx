import React from "react";

function SearchBar({ keyword, setKeyword }) {
  return (
    <div className="px-8 bg-white w-full shadow-lg shadow-slate-100 rounded flex items-center gap-4 text-light-mode-input md:w-96 dark:bg-dark-mode-elements dark:shadow-slate-800">
      <i className="bx bx-search-alt-2 text-base"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        className="outline-none border-none h-full text-sm py-4 text-light-mode-input w-full bg-transparent"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
