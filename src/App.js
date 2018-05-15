import React, { Component } from 'react';
import './App.css';
import ListBook from './Components/ListBook';
import Modal from './Components/Modal';

class App extends Component {
    state = {
        books: [
            {
                id: 0,
                autor: 'Some autor',
                year: '1984',
                cover: 'https://static.kulturologia.ru/files/u1866/alternative_bookcovers_4.jpg'
            }
        ]
    };
    handleAdd = ()=>{

    };
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-10">
                  <ListBook books={this.state.books}/>
              </div>
              <div className="col-2">
                  <button type="button"  data-toggle="modal" data-target="#myModal">ADD Book</button>
              </div>
          </div>
          <Modal/>

      </div>
    );
  }
}

export default App;
