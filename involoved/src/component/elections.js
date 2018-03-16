import React from 'react';

const Election = (props) =>{

  return (
    <div>
      <p> Name: {props.name}</p>
      <p> Election Day: {props.electionDay}</p>
      <br/>
    </div>
  )
}

export default Election
