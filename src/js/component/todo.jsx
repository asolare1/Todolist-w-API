import React, { useState } from "react";
import Home from "./home.jsx";

const Todo = ({todos, completeTodo, removeTodo}) => {

const [edit,setEdit] = useState({

id: null,
value: ""

});

  return todos.map((todo, index) => (

    <div class={todo.isComplete ? "todo-row d-flex complete" : "todo-row d-flex"} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)} class="todo p-2 flex-grow-1">
        {todo.text}
      </div>
      <button onClick={() => removeTodo(todo.id)} class="btn-close"/>
    </div>

 
  ))
 
};

export default Todo;
