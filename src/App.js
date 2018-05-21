import React, { Component } from 'react';
import './App.css';
import {createStore} from 'redux';
import ListBookContainer from './Components/containers/ListBookContainer';
import ModalContainer from './Components/containers/ModalContainer';
import reducer from './Components/reducer';
import axios from 'axios';
import {Provider} from 'react-redux';
import {getBooks} from  './Components/actions';
let initState = {
    books: [
    ],
    editMode:-1
};
const store = createStore(reducer, initState);
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-10">
                        <ListBookContainer />
                    </div>
                    <div className="col-2">
                        <button type="button"  data-toggle="modal" data-target="#myModal">ADD Book</button>
                    </div>
                </div>
                <ModalContainer />

            </div>
        </Provider>

    );
  }
  componentDidMount(){
    axios.get('http://localhost:3030/api/books').then(resp=>{
        let books= resp.data.books;
        store.dispatch(getBooks(books));
    }).
    catch(err=>console.error(err));
  }
}

export default App;
