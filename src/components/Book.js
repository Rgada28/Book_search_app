import React from 'react'
import '../styles/book.css'

const handleEditBook = (bookId) => {

};

const Book = ({ book }) => {

    return (
        <div >
            <div className="book-card" >
                <h2  >{book.title}</h2>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <p>Author : {book.author}</p>
                        </div>
                        <div className="col">
                            <p >Year : {book.year}</p>
                        </div>
                        <div className="col">
                            <p >{book.language}</p>
                        </div>
                        <div className="col">
                            <button onClick={() => handleEditBook(book.id)}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Book
