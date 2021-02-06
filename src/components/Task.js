import React, { Component } from 'react'
import '../styles/Task.css'

import {FaRegCircle, FaCheckCircle} from 'react-icons/fa'
import {Draggable} from 'react-beautiful-dnd'

export default class Task extends Component {

    render() {
        const icon = this.props.task.completed ? 
            <FaCheckCircle onClick={()=>this.props.flipComplete(this.props.task.id)}/> : 
            <FaRegCircle onClick={()=>this.props.flipComplete(this.props.task.id)}/>
        const clases = `Task ${this.props.task.completed ? 'Task-Completed': null}`
        
        return (
            <Draggable draggableId={this.props.task.id.toString()} index={this.props.index}>
                { (provided) => (
                    <div 
                        className={clases}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {icon}
                        <p className="Task-Text">{this.props.task.text }</p>
                    </div>
                )}
            </Draggable>
        )
    }

}
