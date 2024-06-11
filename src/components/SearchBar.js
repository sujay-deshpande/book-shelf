import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search by book name..."
            value={query}
            onChange={handleSearch}
            className="search-input"
        />
    );
};

export default SearchBar;
