import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import TodoListContainer from './TodoListContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoListContainer />
  </React.StrictMode>,
  document.getElementById('root')
);