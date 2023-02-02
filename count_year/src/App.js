//import './App.css';
import React from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch"
import TodoItem from "./components/TodoItem";
import TodoCreateBuitton from "./components/TodoCreateBuitton";
import TodoList from "./components/TodoList";

const todos = [
  {text: "Cut onion", completed: false},
  {text: "take the course of react", completed: false},
  {text: "moun", completed: false}
]
function App() {
  return (
    <div className="App">
     <TodoCounter/>
     <TodoSearch/>
     {<TodoList>
       {todos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text}/>
       ))}
     </TodoList>}
     <TodoCreateBuitton/>
    </div>
  );
}

export default App;
