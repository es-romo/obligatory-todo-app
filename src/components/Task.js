import React, { Component } from 'react'
import '../styles/Task.css'

import {FaRegCircle, FaCheckCircle} from 'react-icons/fa'
import {Draggable} from 'react-beautiful-dnd'

export default class Task extends Component {

    render() {
        const icon = this.props.task.completed ? <FaCheckCircle /> : <FaRegCircle />
        const clases = `Task${this.props.task.completed ? ' Task-Completed': ''}`
        
        return (
            <Draggable draggableId={this.props.task.id.toString()} index={this.props.index}>
                { (provided) => (
                    <div 
                        onClick={()=>this.props.flipComplete(this.props.task.id)}
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
