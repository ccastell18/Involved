import React from 'react';
import styled from 'styled-components';
// import './homeScreen/homeScreen.css';
const Wrapper =styled.div`
border: 3px solid yellow;
margin: auto;
width: 33%;
height: 200px;
float: none;

`;
const Polling = (props) => {
	return (
		<Wrapper className="col-lg-12 repBoxes">
			Polling Location
			<br/>
			{props.locationName}
			<br/>
			Address:
			<br/>
			{props.line1}
			<br/>
			{props.city},{props.state}
			<br/>
			{props.zip}
			<br/>
			Hours:
			<br/>
			{props.pollingHours}
		</Wrapper>
	);
};

export default Polling;
