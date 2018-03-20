import  React from 'react'

const Button = (props) =>{
  return (
    <div>
      <button onClick={props.getRepresentatives}>Current Representatives</button>
      <button onClick={props.getVoterInfo}>Candidate Information</button>
      <button onClick={props.getElections}>Elections</button>
      <button onClick={props.getPollingInfo}>Polling Information</button>
    </div>
  )
}

export default Button
