import React, { useState, useEffect } from 'react';
import ResultsList from './ResultsList';
import BooksList from './BooksList';
import BookDetails from './BookDetails';
import axios from 'axios';
import Navbar from './NavBar';

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);

    const [selectedBookId, setSelectedBookId] = useState(null);

    const handleAddToBooksList = (book) => {

    };

    const handleEditBook = (bookId) => {
        setSelectedBookId(bookId);
    };

    const handleSaveBookDetails = (updatedBook) => {
        // Make an API call to update the book details using Axios
        // Update the books state with the updated book
        setSelectedBookId(null);
    };

    return (
        <div>
            <Navbar />
            <BooksList />
        </div>
    );
};

export default Home;
