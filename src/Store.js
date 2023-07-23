import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { bookListReducer, bookDetailsReducer, addBookReducer } from './Reducers/BookReducer';

const initialState = {

};
const reducer = combineReducers({
    bookList: bookListReducer,
    // bookdetails: bookDetailsReducer,
    addBookReducer: addBookReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;