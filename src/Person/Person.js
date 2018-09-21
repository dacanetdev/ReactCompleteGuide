import React, { Component } from 'react';

class Person extends Component{

  render(props){
    return (
      <div>
        <h1>I'm {this.props.name} and I'm {this.props.age} years old</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Person;