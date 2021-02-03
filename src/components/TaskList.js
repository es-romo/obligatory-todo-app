import React, { Component } from 'react'
import tasksData from '../tasksData'

import Task from './Task'

export default class TaskList extends Component {
    constructor(){
        super()
        this.state = { tasks: tasksData }
    }

    render() {
        const tasks = this.state.tasks.map( (task) => <Task task={task} key={task.id}/> )

        return (
            <div className='TaskList'>
                {tasks}
            </div>
        )
    }
}
