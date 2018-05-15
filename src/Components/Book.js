import React from 'react';

function Book(props) {
    return (
        <div key={props.book.id} className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <div>{props.book.book}</div>
                <div>{props.book.autor}</div>
                <div>{props.book.year}</div>
                <img className="card-img-top" src={props.book.cover} alt="Card image cap"></img>
                <div className="card-footer d-flex justify-content-around">
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Book;