import React from 'react'
import listSVG from './assets/checkList.svg'
import './App.css'

import {DragDropContext} from 'react-beautiful-dnd'

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
    this.onDragEnd = this.onDragEnd.bind(this)
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
    const id = tasks.length ? Math.max.apply(Math, tasks.map(x => x.id)) + 1 : 1
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

  onDragEnd(result){
    const { destination, source } = result;
    
    if (!destination) return
    if (destination.index === source.index) return
    console.log(`Source: ${source.index}`)
    console.log(`Destination: ${destination.index}`)
    let tasks = [...this.state.tasks]
    let task = tasks[source.index]
    tasks.splice(source.index,1)
    tasks.splice(destination.index,0,task)
    this.setState({tasks: tasks}, ()=>this.setTasks())
  }

  render(){
    return (
      <div className="App">
        <DragDropContext
          onDragEnd={this.onDragEnd}
        >
          <Heading/>
          <div className="App-Container">
            {
              this.state.tasks === undefined || this.state.tasks.length === 0 ? 
              <div className="App-Empty">
                <img className="App-SVG" src={listSVG} alt="Checklist"></img>
                <p>Try adding some tasks</p>
              </div> :
              <TaskList tasks={this.state.tasks} flipComplete={this.flipComplete} />
            }
          </div>
          <TaskInput addTask={this.addTask}/>
        </DragDropContext>
      </div>
    );
  }
  
}

export default App;
