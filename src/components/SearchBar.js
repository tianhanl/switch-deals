import React from 'react';

const SearchBar = ({ value, onChange }) => (
  <div className="search-bar">
    <input
      type="text"
      value={value}
      onChange={e => {
        e.preventDefault();
        onChange(e.target.value);
      }}
    />
  </div>
);

export default SearchBar;
