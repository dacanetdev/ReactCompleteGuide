import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import FuncPerson  from './Person/FuncPerson.js';

class App extends Component {
  state = {
    persons: [
      { name: 'David', age: 41},
      { name: 'Zonia', age: 45},
      { name: 'Nancy', age: 14}
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      { name: 'Arturo', age: 41},
      { name: 'Zonia', age: 45},
      { name: 'Nancy', age: 14}
    ]
  });
  }

  render() {
    return (
      <div className="App">
          <h1>React Works!</h1>
          <button onClick={this.switchNameHandler}>Switch  Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies are: Playing Violin and reading books</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
          <FuncPerson exclamation="OK"></FuncPerson>
      </div>
    );
  }
}

export default App;
