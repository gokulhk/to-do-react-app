import React from 'react';
import './App.css';

//Redux Store imports
import { Provider } from 'react-redux'
import store from './redux/tasks/taskStore'

//Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'

//Component imports
import HeaderComp from './components/HeaderComp';
import AddTaskComp from './components/AddTaskComp';
import TaskContainer from './components/TaskContainer'



function App() {

  return (
    <Provider store={store}>
      <div className="App container"><br />

        <HeaderComp />

        <Card className="card border border-white">

          <Card className="card border border-white" >
            <TaskContainer />
          </Card><br />

          <Card className="card"><br />
            <AddTaskComp />
          </Card>

        </Card>
      </div>
    </Provider>
  );


}

export default App;
