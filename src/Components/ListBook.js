import React from 'react';
import Book from './Book';
function ListBook (props){
    let books = props.books.map(book=>(
        <Book key={book.id} book={book} edit={props.edit} delete={props.delete}/>
    ));
    return (
        <div>
            <h2 className="text-center">List Book</h2>
            {books}
        </div>
    )
}
export default ListBook;