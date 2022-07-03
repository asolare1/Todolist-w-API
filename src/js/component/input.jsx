import React, { useState } from "react";
import Todo from "./todo.jsx";

const Input = (props) => {
  
  const [input, setInput] = useState("");
  
  const handleSubmit = e =>{

    e.preventDefault();

    props.onSubmit({

        id: Math.floor(Math.random() * 10000),
        text: input

    });

    setInput("");
  };

  const handleOnChange = (e) =>{

    setInput(e.target.value);

  };
  
  return (

      
<div class="input-group mb-3">
<form class="d-flex input-group mb-3" onSubmit={handleSubmit}>
  <input 
  type="text" 
  value={input}
  onChange={handleOnChange}
  class="form-control" 
  placeholder="ToDo" 
 />
  <button class="btn btn-outline-secondary" >Add todo</button>
</form>
</div>

  );
};

export default Input;
