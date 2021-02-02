import React, { Component } from 'react'
import '../styles/TaskList.css'

import Task from './Task'

export default class TaskList extends Component {
    constructor(){
        super()
        this.state= {
            tasks: [
                {
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    text: 'Eat Ass',
                    completed: true
                },
                {
                    text: 'Buy groceries',
                    completed: false
                }
            ]
        }
    }
    render() {
        let tasks = this.state.tasks.map( (task) => <Task task={task}/> )

        return (
            <div className='TaskList'>
                {tasks}
            </div>
        )
    }
}
