import React from 'react';

const VoterInfo = (props) =>{
  return (
    <div>

      <div>
        <p>Office: {props.title}</p>

        <p>candidate name: {props.name}</p>
        <p>candidate party: {props.party}</p>
        <p>candidate URL: {props.candidateUrl}</p>
      </div>
  </div>
  )
}

export default VoterInfo
