import React, { useState, useEffect } from 'react';

const BookDetails = ({ bookId, handleSave }) => {
    const [book, setBook] = useState({
        title: '',
        author: '',
    });

    useEffect(() => {

    }, [bookId]);

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveClick = () => {
        handleSave(book);
    };

    return (
        <div>
            <h2>Edit Book Details</h2>
            <input
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                placeholder="Enter book title..."
            />
            <input
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                placeholder="Enter author..."
            />
            {/* Add other input fields for other book details */}
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
};

export default BookDetails;
