import React, { Component } from 'react'
import '../styles/TaskList.css'

import Task from './Task'

export default class TaskList extends Component {

    render() {
        const tasks = this.props.tasks.map( 
            task => <Task task={task} key={task.id} flipComplete={this.props.flipComplete}/> 
        )

        return (
            <div className='TaskList'>
                {tasks}
            </div>
        )
    }
}
