import React from 'react';
import { useEffect } from 'react'
import Book from './Book';
import '../styles/booklist.css'
import { useSelector, useDispatch } from 'react-redux'
import { listBooks } from '../actions/BookActions'
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

const BooksList = () => {

    const dispatch = useDispatch();

    const bookList = useSelector(state => state.bookList);
    const { loading, error, books, pagination } = bookList;

    useEffect(() => {
        dispatch(listBooks(1));
    }, [dispatch])

    const handleEdit = (bookId) => {
        //TODO add SweetAlter and send data
    };

    const goToPreviousPage = (pagination) => {
        var page = pagination.currentPage;
        if (page !== 1) {
            page = pagination.currentPage - 1;
        }
        dispatch(listBooks(page));
    }

    const goToNextPage = (pagination) => {
        var page = pagination.currentPage;
        if (page < pagination.totalPages) {
            page = pagination.currentPage + 1;
        }
        dispatch(listBooks(page));
    }

    return (
        <div>
            <div className="home-book-container">
                {loading ? <LoadingBox />
                    :
                    error ? <MessageBox variant="danger">{error}</MessageBox>
                        :
                        (
                            <>
                                <div className="book-container">
                                    {
                                        // books.data ? <h1>No Books founds</h1> :
                                        books.data.map((book) => {
                                            return (
                                                <Book key={book.id} book={book} />
                                            )
                                        })
                                    }
                                </div>
                            </>
                        )
                }
                <div>
                    {pagination != null ?
                        <div>
                            <button onClick={() => goToPreviousPage(pagination)}>Previous</button>
                            <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
                            <button onClick={() => goToNextPage(pagination)}>Next</button>
                        </div> : null}

                </div>
            </div>
        </div>
    );
};

export default BooksList;
