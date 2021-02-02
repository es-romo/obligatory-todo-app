import React, { Component } from 'react'
import '../styles/Task.css'

import {FaPlus} from 'react-icons/fa'

export default class Task extends Component {
    render() {
        let icon = <FaPlus />
        return (
            <div className="Task">
                <div className='Task-Container'>
                    {icon}
                    <p className="Task-Text">{this.props.task.text }</p>
                </div>
            </div>
        )
    }
}
