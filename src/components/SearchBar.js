import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <input
    className="search-bar"
    type="text"
    placeholder="Search your target items"
    value={value}
    onChange={e => {
      e.preventDefault();
      onChange(e.target.value);
    }}
  />
);

export default SearchBar;
