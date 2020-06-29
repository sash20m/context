import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TodoListProvider } from './context/TodoListContext';
import Todolist from './ui/molecules/Todolist';

ReactDOM.render(
  <React.StrictMode>
    <TodoListProvider>
      <Todolist />
    </TodoListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
