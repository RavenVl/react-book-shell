export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const GET_BOOKS = 'GET_BOOKS';

export function addBook(book) {
    return {
        type: ADD_BOOK,
        book
    };
}
export function getBooks(books) {
    return {
        type:GET_BOOKS,
        books:books
    }

}
export function editBook(id) {
    return {
        type: EDIT_BOOK,
        id:id
    };
}
export function deleteBook(id) {
    return {
        type: DELETE_BOOK,
        id:id
    };
}
