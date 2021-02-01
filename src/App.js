import React from 'react'
import Heading from './components/Heading'
import './styles/App.css'


class App extends React.Component {
  
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <Heading/>
      </div>
    );
  }
  
}

export default App;
