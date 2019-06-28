import React from 'react';
import Welcome from "./Welcome/Welcome";
import Header from "./Header/Header"
import TodoList from "./Todo/TodoList"
import "./Header/App.css";


function App() {
  return (
    <div>
      <div className="App-header">
      <Header/>
      </div>

      <div className="container"> 
      <Welcome name="Donatien Eneman"/>
      <TodoList/>
      </div>
    </div>
  );
}

export default App;
