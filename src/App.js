import React from 'react'
import './App.css'

import Heading from './components/Heading'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Heading/>
        <TaskList />
        <TaskInput />
      </div>
    );
  }
  
}

export default App;
