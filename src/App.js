import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import FuncPerson  from './Person/FuncPerson.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>React Works!</h1>
          <Person></Person>
          <FuncPerson exclamation="OK"></FuncPerson>
      </div>
    );
  }
}

export default App;
