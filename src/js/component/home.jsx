import React, { useState } from "react";
import Theheader from "./header.jsx";
//include images into your bundle

import Input from "./input.jsx";
import Todo from "./todo.jsx";

//create your first component
function Home(){
const [todos,setTodos] = useState([]);
const addTodo = todo =>{

const newTodos = [todo, ...todos]

setTodos(newTodos);
};

const removeTodo = id =>{

const removeArr = [...todos].filter(todo => todo.id !== id)

setTodos(removeArr)
};


const completeTodo = id =>{

  let updatedTodos = todos.map(todo => {
    if (todo.id === id) {
      todo.isComplete = !todo.isComplete;
    };
    return todo;
  });

  setTodos(updatedTodos);
};





  return (
    <div class="todocontainer">
      <Theheader/>
      <Input onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
      <footer class="footer mt-auto py-3 bg-light">
  <div class="container">
    <span class="text-muted">{todos.filter(todo => !todo.isComplete).length} todos left</span>
  </div>
</footer>
    </div>
  );
};

export default Home;
