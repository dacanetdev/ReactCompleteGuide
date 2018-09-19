import React from 'react';

const FuncPerson = (props) => {
  return(
    <div>
      <h3>{props.exclamation}!</h3>
      <p>This is a Person from function</p>
    </div>
  );
}

export default FuncPerson;