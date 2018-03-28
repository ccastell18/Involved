import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
border:3px solid red;
min-height: 200px;
padding: 7px;
width: 33%;
height: 375px;
`;

const Image = styled.img`
vertical-align: middle;
   width: 100px;
   height: auto;
   padding-bottom: 15px;
`;
const Representatives = (props) =>{
	let image = props.image ? props.image : 'https://upload.wikimedia.org/wikipedia/commons/0/08/Vertical_United_States_Flag.svg';

	return(
		<Wrapper className="col-md-3 repBoxes">
			<Image src={image}/>
			<p>Office Name: {props.office}</p>
			<p>Name: {props.name}</p>
			<p>Party: {props.party}</p>
			<p>Phone Number: {props.phones}</p>
			<a href={props.urls}>{props.urls}</a>
		</Wrapper>
	);
};

export default Representatives;
