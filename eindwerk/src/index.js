import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom'

import snackApp from "./redux/reducer";
import {createStore} from 'redux';
import {Provider} from 'react-redux'


ReactDOM.render(
<BrowserRouter>
  <Provider store={createStore(snackApp)}>
    <App />
  </Provider>
</BrowserRouter>, document.getElementById('root'));