import  React from 'react'

const Button = (props) =>{
  return (
    <div>
    <button onClick={props.getElections}>Elections</button>
    <button>Divisions</button>
    <button>Voter Information</button>
    <button onClick={props.getRepresentatives}>Representatives</button>
    </div>
  )
}

export default Button
