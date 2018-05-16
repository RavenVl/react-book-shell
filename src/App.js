import React, { Component } from 'react';
import './App.css';
import ListBook from './Components/ListBook';
import Modal from './Components/Modal';

class App extends Component {
    state = {
        books: [
            {
                id: 0,
                book: 'Some book',
                autor: 'Some autor',
                year: '1984',
                cover: 'https://static.kulturologia.ru/files/u1866/alternative_bookcovers_4.jpg'
            }
        ],
        editMode:-1
    };
    handleAdd = (book)=>{
        let ind = this.state.editMode;
        if( ind=== -1){
            let temp = [...this.state.books];
            let maxId = Math.max(...temp.map(book=>book.id));
            let id = maxId+1;
            book.id = id;
            let newBooks = [...this.state.books];
            newBooks.push(book);
            this.setState({
                books: newBooks
            });
        }else {
            let newBooks = [...this.state.books];
            newBooks = newBooks.map(_book=>{
                if(_book.id=== ind){
                    book.id= ind;
                   return  book;
                }
                else{
                   return  _book;
                }


            });
            this.setState({
                books: newBooks,
                editMode:-1
            });
        }

    };
    handleDelete = (id)=>{
        let newBooks = this.state.books.filter(book=>book.id !== id);
        this.setState({books:newBooks});
    };
    handleEdit = (id)=>{
        this.setState({ editMode: id});
    };
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-10">
                  <ListBook books={this.state.books} edit={this.handleEdit} delete={this.handleDelete}/>
              </div>
              <div className="col-2">
                  <button type="button"  data-toggle="modal" data-target="#myModal">ADD Book</button>
              </div>
          </div>
          <Modal add={this.handleAdd} edit={this.state.editMode} books={this.state.books}/>

      </div>
    );
  }
}

export default App;
