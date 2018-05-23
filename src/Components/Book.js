import React from 'react';

function Book(props) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <div>{props.book.book}</div>
                <div>{props.book.autor}</div>
                <div>{props.book.year}</div>
                <img className="card-img-top" src={props.book.cover} alt={props.book.book}></img>
                <div className="card-footer d-flex justify-content-around">
                    <button type="button" className="btn btn-warning" onClick={()=>props.edit(props.book.id)} data-toggle="modal" data-target="#myModal">Edit</button>
                    <button type="button" className="btn btn-danger" onClick={()=>props.delete(props.book.id)} >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Book;