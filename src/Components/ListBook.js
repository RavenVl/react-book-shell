import React from 'react';
import Book from './Book';
function ListBook (props){
    let books = props.books.map(book=>(
        <Book book={book}/>
    ));
    return (
        <div>
            <h2 className="text-center">List Book</h2>
            {books}
        </div>
    )
}
export default ListBook;