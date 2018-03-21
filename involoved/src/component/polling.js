import React from 'react'

const Polling = (props) => {
  return (
    <div>
    <h1>Polling Location</h1>
    <p>Location Name: {props.locationName}</p>
    <p>Address: {props.line1}</p>
    <div>
<<<<<<< HEAD
    {props.city},{props.state}
=======
    <p>{props.city},{props.state}</p>
>>>>>>> 384225127b06aa15f5b181cc260f2d4402306b31
    {props.zip}
    </div>
    <p>Hours: {props.pollingHours}</p>
    </div>
  )
}

export default Polling
