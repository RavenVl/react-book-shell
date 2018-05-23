import {ADD_BOOK, DELETE_BOOK, EDIT_BOOK, GET_BOOKS} from './actions'
import axios from './axiousInstance';
function reducer(state, action) {
    switch (action.type) {
        case ADD_BOOK:
            let ind = state.editMode;
            if (ind === -1) {
                let temp = state.books;
                let maxId = Math.max(...temp.map(book => book.id));
                let id = maxId>=0 ? maxId + 1: 0;
                action.book.id = id;
                let newBooks = [...state.books];
                newBooks.push(action.book);
                let rez = {
                    books: newBooks,
                    editMode: -1
                };
                axios.post('/books',rez)
                    .then(resp=>console.log(resp))
                    .catch(err=>console.error(err));
                return rez;
            } else {
                let newBooks = [...state.books];
                newBooks = newBooks.map(_book => {
                    if (_book.id === ind) {
                        action.book.id = ind;
                        return action.book;
                    }
                    else {
                        return _book;
                    }


                });
                let rez = {
                    books: newBooks,
                    editMode: -1
                };
                axios.post('/books',rez)
                    .then(resp=>console.log(resp))
                    .catch(err=>console.error(err));
                return rez;
            }
        case GET_BOOKS:
            return {
                ...state,
                books: action.books
            };
        case EDIT_BOOK:
            return {...state, editMode: action.id};

        case  DELETE_BOOK:
            let newBooks = state.books.filter(book => book.id !== action.id);
            let rez = {
                books: newBooks,
                editMode: -1
            };
            axios.post('/books',rez)
                .then(resp=>console.log(resp))
                .catch(err=>console.error(err));
            return rez;

        default:
            return state
    }
}

export default reducer;