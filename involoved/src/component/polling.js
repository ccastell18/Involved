import React from 'react'

const Polling = (props) => {
  return (
    <div>
    <h1>Polling Location</h1>
    <p>Location Name: {props.locationName}</p>
    <p>Address: {props.line1}</p>
    <div>
    <p>{props.city},{props.state}</p>
    {props.zip}
    </div>
    <p>Hours: {props.pollingHours}</p>
    </div>
  )
}

export default Polling
