import React from 'react';

const ResultsList = ({ results, pagination }) => {
    if (!pagination) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Search Results</h2>
            <p>Total Results: {pagination.totalElements}</p>
            {results.map((book) => (
                <div key={book.id}>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                </div>
            ))}
            <div>
                <button>Previous</button>
                <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
                <button>Next</button>
            </div>
        </div>
    );
};

export default ResultsList;
