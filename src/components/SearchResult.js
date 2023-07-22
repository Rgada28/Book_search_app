import React, { useState } from 'react';
import ResultsList from './ResultsList';
import axios from 'axios';
import Navbar from './NavBar';

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [pagination, setPagination] = useState({
        sortDirection: '',
        totalPages: 0,
        pageSize: 0,
        currentPage: 0,
        totalElements: 0,
    });
    // const [books, setBooks] = useState([]);
    // const [selectedBookId, setSelectedBookId] = useState(null);


    const handleSearch = (query) => {
        // Make an API call to search for books by title using Axios
        axios
            .get(`http://68.178.162.203:8080/application-test-v1.1/books?title=${query}`)
            .then((response) => {
                setSearchResults(response.data.data);
                setPagination(response.data.pagination);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    };

    return (
        <div>
            <Navbar handleSearch={handleSearch} />
            <ResultsList results={searchResults} pagination={pagination} />
        </div>
    );
};

export default SearchResults;
