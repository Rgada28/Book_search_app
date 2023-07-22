import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { bookListReducer, bookDetailsReducer } from './Reducers/BookReducer';

const initialState = {

};
const reducer = combineReducers({
    bookList: bookListReducer,
    bookdetails: bookDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;