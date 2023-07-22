import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        handleSearch(searchQuery);
    };

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Enter book title..."
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default SearchBar;
