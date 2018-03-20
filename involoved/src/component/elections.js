import React from 'react';
import styled from 'styled-components';
const Election = (props) =>{
	const Wrapper= styled.div`
border:3px solid blue;

padding: 7px;
width: 33%;
height: 75px;
`;



	return (
		<Wrapper className="col-md-3 repBoxes">

			<p> Name: {props.name}</p>
			<p> Election Day: {props.electionDay}</p>
			<br/>
		</Wrapper>
	);
};

export default Election;
