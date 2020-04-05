import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import HeaderComp from './components/HeaderComp';
import AddTaskComp from './components/AddTaskComp';

function App() {

  return (
    <div className="App">
      <div className="container-fluid">
        <HeaderComp />
        <AddTaskComp /> 
      </div>

    </div>
  );


}

export default App;
