import React from "react";

const Representatives = (props) =>{
  return(
    <div>
      <p>Office Name: {props.office}</p>
      <p>Name: {props.name}</p>
      <p>Party: {props.party}</p>
      <p>Phone Number: {props.phones}</p>
      <p>Website: {props.urls} </p>
    </div>
  )
}

export default Representatives
