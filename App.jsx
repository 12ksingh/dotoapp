import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo  } from './components/CreateTodo'
import { Todos } from './components/Todo'




export function Todos({todos}) {

  return <div>
      {todos.map(function(todo) {
          return <div>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
          </div></div>
      })}
  

export default App