import React from 'react'
import '../styles/book.css'

const handleEditBook = (bookId) => {

};

const Book = ({ book }) => {

    return (
        <div >
            <div className="book-card" >
                <h2  >{book.title}</h2>
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                            <p>Author : {book.author}</p>
                        </div>
                        <div class="col">
                            <p >Year : {book.year}</p>
                        </div>
                        <div class="col">
                            <p >{book.language}</p>
                        </div>
                        <div class="col">
                            <button onClick={() => handleEditBook(book.id)}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Book
