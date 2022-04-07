import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css" 
import TodoList from './components/TodoList';

function TodoView(){
  return(
    <TodoList/>
  )
}

ReactDOM.render(<TodoView/>, document.getElementById("root"))