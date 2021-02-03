import React from 'react'
import '../styles/TaskInput.css'
import {FaPlus} from 'react-icons/fa'

export default class TaskInput extends React.Component {
    
    constructor(){
        super()
        this.state = {
            text: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        if(!this.state.text) return
        this.props.addTask(this.state.text)
        this.setState({text: ''})
    }

    render(){

        return(
            <div className="TaskInput" >
                <form className="TaskInput-Form" onSubmit={this.handleSubmit}>
                    <FaPlus onClick={this.handleSubmit}/>
                    <input 
                    value={this.state.text}
                    onChange={e => this.setState({text: e.target.value})}
                    className="TaskInput-Input"
                    placeholder="Add a Todo" />
                </form>
            </div>
        )
    }

}
