import React from 'react'
import ReactDOM from 'react-dom/client'
import Stopwatch from './Stopwatch.jsx'
import ToDoList from './todolist.jsx'



ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <ToDoList />
    <Stopwatch />
  </React.StrictMode>
)