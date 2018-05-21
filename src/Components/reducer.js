import {ADD_BOOK, DELETE_BOOK, EDIT_BOOK, GET_BOOKS} from './actions'

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
                return {
                    books: newBooks,
                    editMode: -1
                };
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
                return {
                    books: newBooks,
                    editMode: -1
                };
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
            return {
                books: newBooks,
                editMode: -1
            };
        default:
            return state
    }
}

export default reducer;