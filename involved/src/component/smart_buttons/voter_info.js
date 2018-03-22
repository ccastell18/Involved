import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
border: 3px solid green;

width: 33%;
height: 132px;

`;

const VoterInfo = (props) =>{

	return (
		<Wrapper className="col-md-3 repBoxes">
			<p>Office: {props.title}</p>
			<p>candidate name: {props.name}</p>
			<p>candidate party: {props.party}</p>
			<p>candidate URL: {props.candidateUrl}</p>
		</Wrapper>

	);
};

export default VoterInfo;
