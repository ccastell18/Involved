import React from 'react';
import styled from 'styled-components';
const Election = (props) =>{

	const Wrapper= styled.div`
		border:3px solid blue;
		padding: 7px;
		width: 33%;
		height: 100px;
	`;

	return (
		<Wrapper className="col-md-3 repBoxes">
			<p>{props.name}</p>
			<p> Election Day: {props.electionDay}</p>
			<button>Get Candidates</button>
			<br/>
		</Wrapper>
	);
};

export default Election;
