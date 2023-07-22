import api from "../Axios";
import {
    BOOK_LIST_REQUEST,
    BOOK_LIST_FAIL,
    BOOK_LIST_SUCCESS,
    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_FAIL,
    BOOK_DETAILS_SUCCESS

} from "../constants/BookConstants";

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



export const detailsBook = (BookID) => async (dispatch) => {
    dispatch({
        type: BOOK_DETAILS_REQUEST,
        payload: BookID
    });

    try {
        const { data } = await api.get(`/books/${BookID}`);

        dispatch({
            type: BOOK_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: BOOK_DETAILS_FAIL,
            payload: error.response && error.response.data.mesaage
                ? error.response.data.message
                : error.message,
        });
    }
};