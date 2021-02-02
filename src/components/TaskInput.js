import React from 'react'
import '../styles/TaskInput.css'
import {FaPlus} from 'react-icons/fa'

export default class TaskInput extends React.Component {
    
    constructor(){
        super()
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        let task = event.target['0'].value
        if(!task) return
        console.log(task)
        event.target['0'].value = null
    }

    render(){

        return(
            <div className="TaskInput" >
                <form className="TaskInput-Form" onSubmit={this.handleSubmit}>
                    <FaPlus onClick={this.handleSubmit}/>
                    <input placeholder="Add a Todo" className="TaskInput-Input"></input>
                </form>
            </div>
        )
    }

}
