import "./App.css";
// import a CSS file that styles the app.
import React, { useState } from "react";
// Import useState hook from React library. It allows to add state to functional components.

function App() {

  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: high },
    { name: "Clean Bathroom", priority: low },
    { name: "Car's MOT", priority: high },
  ]);

  const [newTodoName, setNewTodoName] = useState("");
  const [newHighLowValue, setNewHighLowValue] = useState("low");

  function handleInputChange(event) {
    setNewTodoName(event.target.value)
  }

  function handleValueChange(event) {
    setNewHighLowValue(event.target.value)
  }

  function saveNewTodo(event) {
    event.preventDefault();
    const newTodo = {
      name: newTodoName,
      priority: newHighLowValue,
    }
    const newToDo = [...todos, newTodo];
    setTodos(newToDo);
    setNewTodoName("");

  }

  const todoNodes = todos.map((todo, index) => {
    return <div key={index}>
    {todo.priority ==="high" ? <li className="high"><span>{todo.name}</span></li> : <li className="low"><span>{todo.name}</span></li> }
    </div>});

  return (
    <div id="app">
      <h1>Todo List</h1>
      <nav>
        <form onSubmit={saveNewTodo}>
          <input className="text-box" type="text" value={newTodoName} onChange={handleInputChange}/>
          High<input type="radio" value="high" name="high/low" onChange={handleValueChange}/>
          Low<input type="radio" value="low" name="high/low" onChange={handleValueChange} defaultChecked/>
          <input className="button" type="submit" value="Save Item"/>      
        </form>
      </nav>
      <ul id="test">
        {todoNodes}
      </ul>       
    </div>
  );
}

export default App;