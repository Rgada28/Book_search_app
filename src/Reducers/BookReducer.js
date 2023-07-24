import {
    BOOK_LIST_REQUEST,
    BOOK_LIST_FAIL,
    BOOK_LIST_SUCCESS,
    ADD_BOOK_REQUEST,
    BOOK_ADD_SUCCESS,
    BOOK_ADD_FAIL
} from "../constants/BookConstants";

export const bookListReducer = (state = {
    loading: true, books: [], pagination: {
        sortDirection: '',
        totalPages: 1,
        pageSize: 0,
        currentPage: 1,
        totalElements: 0,
    }
}, action) => {
    switch (action.type) {

        case BOOK_LIST_REQUEST:
            return { loading: true };

        case BOOK_LIST_SUCCESS:
            return { loading: false, books: action.data, pagination: action.pagination };

        case BOOK_LIST_FAIL:
            return { loading: false, error: action.data };

        default:
            return state;


    }
}

export const updateBookReducer = (state = {
    loading: true, book: {}
}, action) => {
    switch (action.type) {

        case ADD_BOOK_REQUEST:
            return { loading: true };

        case BOOK_ADD_SUCCESS:
            return { loading: false, book: action.data };

        case BOOK_ADD_FAIL:
            return { loading: false, error: action.data };

        default:
            return state;
    }
}


export const addBookReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_BOOK_REQUEST:
            return { loading: true };
        case BOOK_ADD_SUCCESS:
            return { loading: false, book: action.payload };
        case BOOK_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}