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
        ]
    };
    handleAdd = (book)=>{
        console.log(book);
        let id = this.state.books.length;
        book.id = id;
        let newBooks = [...this.state.books];
        newBooks.push(book);
        console.log(newBooks);
        this.setState({
            books: newBooks
        });
    };
    handleDelete = (id)=>{
        console.log('delete:',id);
        let newBooks = this.state.books.filter(book=>book.id !== id);
        this.setState({books:newBooks});
    };
    handleEdit = (id)=>{
        console.log('edit:', id);
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
          <Modal add={this.handleAdd}/>

      </div>
    );
  }
}

export default App;
