// App.js
import logo from './logo.svg';
import './App.css';
import React, { useContext, useState } from "react";
import { TaskProvider, TaskContext } from "./context/TaskContext";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <><div className="App">
      <header className="App-header">
       
      </header>
    </div><TaskProvider>
        <div className="container">
          <h1 className="text-center">Task Manager</h1>
          <AddTaskForm/>
          <TaskList />
        </div>
      </TaskProvider></>
  );
}
export default App;