import React, { Component } from 'react'
import '../styles/TaskList.css'

import {Droppable} from 'react-beautiful-dnd'

import Task from './Task'

export default class TaskList extends Component {

    render() {
        const tasks = this.props.tasks.map( 
            (task,index) => <Task index={index} task={task} key={task.id} flipComplete={this.props.flipComplete}/> 
        )

        return (
            <Droppable droppableId='0'>
                { provided => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps} 
                        className='TaskList'
                        >
                        {tasks}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        )
    }
}
