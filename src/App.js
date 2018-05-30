import React, {Component} from 'react';
import './App.css';
import {createStore} from 'redux';
import {Route, Switch} from 'react-router-dom';
import BooksMain from './Components/BooksMain';

import reducer from './Components/reducer';
import axios from './Components/axiousInstance';
import {Provider} from 'react-redux';
import {getBooks} from './Components/actions';
import Navigation from './Components/Navigation';
import Chats from './Components/Chats';

const initState = {
    books: [],
    editMode: -1
};
const store = createStore(reducer, initState);

class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <div className="container">
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={BooksMain}/>
                        <Route exact path="/chats" component={Chats}/>

                    </Switch>


                </div>
            </Provider>

        );
    }

    componentDidMount() {
        axios.get('/books')
            .then(resp => {
                let books = resp.data.books;
                store.dispatch(getBooks(books));
            })
            .catch(err => console.error(err));
    }
}

export default App;
