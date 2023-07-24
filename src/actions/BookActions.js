import api from "../Axios";
import {
    BOOK_LIST_REQUEST,
    BOOK_LIST_FAIL,
    BOOK_LIST_SUCCESS,
    ADD_BOOK_REQUEST,
    BOOK_ADD_SUCCESS,
    BOOK_ADD_FAIL

} from "../constants/BookConstants";

const Swal = require('sweetalert2');

export const listBooks = (page) => async (dispatch) => {
    dispatch({
        type: BOOK_LIST_REQUEST
    });

    try {
        const { data } = await api.get(`/books?page=${page}`);
        dispatch({
            type: BOOK_LIST_SUCCESS,
            data: data,
            pagination: data.pagination
        });
    }
    catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.message
        })
    }
}

export const searchBook = (queryString) => async (dispatch) => {
    dispatch({
        type: BOOK_LIST_REQUEST,
        payload: queryString
    });

    try {
        const { data } = await api.get(`/books/?title=${queryString}`);

        dispatch({
            type: BOOK_LIST_SUCCESS,
            data: data,
            pagination: data.pagination
        });
    }
    catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.mesaage
                ? error.response.data.message
                : error.message,
        });
    }
};



export const addBook = ({ author, country, language, link, pages, title, year }) => async (dispatch) => {

    dispatch({
        type: ADD_BOOK_REQUEST,
        payload: { author, country, language, link, pages, title, year }
    });
    try {
        var book = {
            author: author,
            country: country,
            language: language,
            link: link,
            pages: pages,
            title: title,
            year: year,
        }
        Swal.showLoading();
        Swal.fire({
            title: 'Please Wait !',
            html: 'data uploading',// add html attribute if you want or remove
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading(
                )
            },
        });
        // setTimeout(async () => {
        // const { data } = 
        await api.post('/books', book, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(data => {
            dispatch({
                type: BOOK_ADD_SUCCESS,
                payload: data
            });
            Swal.fire({
                title: "Book Added Successfully",
                icon: "success",
                showConfirmButton: true,
            });
        }).catch(error => {
            Swal.fire({
                title: "Failed to add Book",
                text: "Please try again later",
                icon: "error",
            });
            dispatch({
                type: BOOK_ADD_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        });
        // }, 4000);

    }
    catch (error) {
        Swal.close();
        dispatch({
            type: BOOK_ADD_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });

    }
}

export const updateBook = (book) => async (dispatch) => {

    dispatch({
        type: ADD_BOOK_REQUEST,
        payload: book
    });

    try {
        Swal.showLoading();
        Swal.fire({
            title: 'Please Wait !',
            html: 'data uploading',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading(
                )
            },
        });
        // setTimeout(async () => {
        await api.put(`/books/${book.id}`, book, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(data => {
            dispatch({
                type: BOOK_ADD_SUCCESS,
                payload: data
            });
            Swal.fire({
                title: "Book Updated Successfully",
                icon: "success",
                showConfirmButton: true,
            });
        }).catch(error => {
            Swal.fire({
                title: "Failed to Update Book",
                text: "Please try again later",
                icon: "error",
            });
            dispatch({
                type: BOOK_ADD_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        });
        // }, 4000);

    }
    catch (error) {
        Swal.close();
        dispatch({
            type: BOOK_ADD_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });

    }
}