import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

// Class-Based Compoenent
class App extends Component {
  state ={
    persons:[
      {name: 'Max', age:25},
      {name:'Nishanth',  age:25},
      {name:'Alrich',  age:20}
    ]
  }

  // switchNameHandler is the convention for naminga handler.
  // No need to use const here for the handler
  switchNameHandler = (newName) =>{
    console.log('Was Clicked');
    this.setState({persons:[
      {name: newName, age:25},
      {name:'Nishanth',  age:25},
      {name:'Alrich',  age:27}
    ]})
  }

  nameChangedHandler = (event) =>{
    this.setState({persons:[
      {name: 'Max', age:25},
      {name: event.target.value,  age:25},
      {name:'Alrich',  age:26}
    ]})
  }
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        {/* We do not use () for the handler because it will call the method while rendering the react. It won't work as a listener */}
        <button 
        style={style}
        // Making changes for Module 4
        onClick={this.switchNameHandler.bind(this, "Max!")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click ={this.switchNameHandler.bind(this, "Max")}
        changed={this.nameChangedHandler} > Hobbies : Reading</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
