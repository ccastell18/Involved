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
    let image = props.image ? props.image : 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/american-flag-vertical-linda-mears.jpg';

    return(
        <Wrapper className="col-md-3 repBoxes">
            <Image src={image}/>
            <p>Office Name: {props.office}</p>
            <p>Name: {props.name}</p>
            <p>Party: {props.party}</p>
            <p>Phone Number: {props.phones}</p>
            <p>Website: {props.urls} </p>
        </Wrapper>
    );
};

export default Representatives;
