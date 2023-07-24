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



    const goToPreviousPage = (pagination) => {
        var page = pagination.currentPage;
        if (page !== 1) {
            page = pagination.currentPage - 1;
        }
        dispatch(listBooks(page));
    }
    const sortBooksByAsc = () => {

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
                <div className='me-2 mt-2 mb-5 d-flex justify-content-end' >
                    {pagination != null ?
                        <div>
                            <button onClick={sortBooksByAsc}>Sort Title</button>
                            <span className='ms-2 me-2'>Page <b>{pagination.currentPage}</b> of <b>{pagination.totalPages}</b></span>
                            <button onClick={() => goToNextPage(pagination)}>Next</button>
                        </div> : null}

                </div>
                {loading ? <LoadingBox />
                    :
                    error ? <MessageBox variant="danger">{error}</MessageBox>
                        :
                        (
                            <>
                                <div className="book-container">
                                    {
                                        // books.data ? <h1>No Books founds</h1> :
                                        books.data.map((book, index) => {
                                            return (
                                                <div key={index}>
                                                    <Book book={book} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        )
                }
                <div className='mt-5 d-flex justify-content-center' >
                    {pagination != null ?
                        <div>
                            {pagination.currentPage !== 1 ? <button className='btn btn-warning' onClick={() => goToPreviousPage(pagination)}>Previous</button> : null}
                            <span className='ms-2 me-2'>Page <b>{pagination.currentPage}</b> of <b>{pagination.totalPages}</b></span>
                            {pagination.currentPage !== pagination.totalPages ? <button className='btn btn-warning' onClick={() => goToNextPage(pagination)}>Next</button> : null}
                        </div> : null}

                </div>
            </div>
        </div>
    );
};

export default BooksList;
