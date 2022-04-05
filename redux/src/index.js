import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from './redux/reducers'

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <App />
    </Provider>
    , document.getElementById('root')
);
