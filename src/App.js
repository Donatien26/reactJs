import React from 'react';
import './App.css';
import Welcome from "./Welcome";
import Header from "./Header"

function App() {
  return (
    <div>
      <Header/>
      <Welcome name="Donatien Eneman"/>
    </div>
  );
}

export default App;
