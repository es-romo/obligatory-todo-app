import React from 'react'
import tasksData from './tasksData'
import './App.css'

import Heading from './components/Heading'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

class App extends React.Component {

  constructor(){
    super()
    this.state = { tasks: tasksData }
    this.addTask = this.addTask.bind(this)
    this.flipComplete = this.flipComplete.bind(this)
  }

  addTask(text){
    const tasks = this.state.tasks;
    const id = tasks ? tasks[tasks.length - 1].id + 1 : 1

    const task = {
      id: id,
      text: text,
      completed: false
    }

    const mergeState = {
      tasks: [ ...tasks, task ],
    };
    this.setState(mergeState)
  }

  flipComplete(id){
    let newState = {...this.state}
    newState.tasks = newState.tasks.map( task => {
      if (task.id === id) task.completed = !task.completed
      return task;
    })
    console.log(newState.tasks)
    this.setState(newState)
  }

  render(){
    return (
      <div className="App">
        <Heading/>
        <TaskList tasks={this.state.tasks} flipComplete={this.flipComplete} />
        <TaskInput addTask={this.addTask}/>
      </div>
    );
  }
  
}

export default App;
