import React from 'react';

const VoterInfo = (props) =>{

  return (
    <div>
      <p>Office: {props.office}</p>
      <p>Candidate Name: {props.name}</p>
      <p>Party: {props.party}</p>
      <p>Website: {props.candidateUrl}</p>
    </div>

	);
};

export default VoterInfo;
