import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const StartApp = (props) => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );

};

ReactDOM.render(<StartApp/>, document.getElementById('root'));
registerServiceWorker();
