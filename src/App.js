import React from 'react'
import './App.css'

import Heading from './components/Heading'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

class App extends React.Component {

  constructor(){
    super()
    this.state = { tasks: [] }
    this.addTask = this.addTask.bind(this)
    this.flipComplete = this.flipComplete.bind(this)
    this.getTasks = this.getTasks.bind(this)
    this.setTasks = this.setTasks.bind(this)
  }

  componentDidMount(){
    this.getTasks()
  }

  getTasks(){
    const tasks = JSON.parse(window.localStorage.getItem('tasks') || "[]")
    if (tasks) this.setState({tasks: tasks})
  }
  
  setTasks(){
    let tasks = this.state.tasks
      .map( task => ({...task}))
      .filter(task => !task.completed)
    window.localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  addTask(text){
    const tasks = this.state.tasks
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
    const task = {
      id: id,
      text: text,
      completed: false
    }

    const mergeState = {
      tasks: [ ...tasks, task ],
    };

    this.setState(mergeState,()=>this.setTasks())
  }

  flipComplete(id){
    let newState = {...this.state}
    newState.tasks = newState.tasks.map( task => {
      if (task.id === id) task.completed = !task.completed
      return task;
    })
    this.setState(newState,()=>this.setTasks())
  }

  render(){
    return (
      <div className="App">
        <Heading/>
        <div className="App-Container">
          {
            this.state.tasks === undefined || this.state.tasks.length === 0 ? 
            <h1>Try adding some tasks</h1> :
            <TaskList tasks={this.state.tasks} flipComplete={this.flipComplete} />
          }
        </div>
        <TaskInput addTask={this.addTask}/>
      </div>
    );
  }
  
}

export default App;
