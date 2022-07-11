import React, { useEffect, useState } from "react";
import Theheader from "./header.jsx";
//include images into your bundle

import Input from "./input.jsx";
import Todo from "./todo.jsx";

//create your first component
function Home(){
const [todos,setTodos] = useState([]);




  const postTodo = () =>{
fetch('https://assets.breatheco.de/apis/fake/todos/user/asolare2', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body:[]
  })
  .then(resp => {
      return resp.json(); 
  })
  .then(data => {
      console.log(data);
  });}

const getTodo = () =>{

  fetch('https://assets.breatheco.de/apis/fake/todos/user/asolare2', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => {
      return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
  })
  .then(data => {
      setTodos(data);
  });





  
 
};




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
console.log(todos);


useEffect(() =>{
getTodo();




},[]);



fetch('https://assets.breatheco.de/apis/fake/todos/user/asolare2', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todos)
  })
  .then(resp => {
      return resp.json(); 
  })
  .then(data => {
      console.log(data);
  });

  
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
 <button onClick={() => setTodos([])}>Delete all</button>
    </div>
  );
};

export default Home;
