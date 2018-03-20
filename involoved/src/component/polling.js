import React from 'react'

const Polling = (props) => {
  return (
    <div>
    <h1>Polling Location</h1>
    <p>Location Name: {props.locationName}</p>
    <p>Address: {props.line1}</p>
    <div>
    {props.city},{props.state}
    {props.zip}
    </div>
    <p>Hours: {props.pollingHours}</p>
    </div>
  )
}

export default Polling
