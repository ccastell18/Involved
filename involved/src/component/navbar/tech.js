import React from 'react';
import styled from 'styled-components';
import './tech.css';
import Axios from'./techPics/axios.png';
import Bootstrap from './techPics/Bootstrap.png';
import Css from './techPics/css.png';
import Express from './techPics/express.jpg';
import Html from './techPics/html.png';
import Js from './techPics/js.png';
// import Kknex from './techPics/kknex.png';
import Mongodb from './techPics/mongodb.png';
import MongooseJS from './techPics/MongooseJS.png';
import Nodejs from './techPics/nodejs.png';
import Npmlogo from './techPics/npmlogo.png';
import Octocat from './techPics/Octocat.png';
import RReact from './techPics/RReact.png';
import Redux from './techPics/redux.png';
import Router from './techPics/Router.png';
import Styled from './techPics/styled.png';
import Trello from './techPics/Trello.png';
import Yarn from './techPics/yarn.png';
const Image = styled.img`
width:150px;
height:200px;
padding:7px;
`;

const Tech = () => {
	return(
		<ul className="TechStack">
			<Image src={Axios}/>
			<Image src={Bootstrap}/>
			<Image src={Css}/>
			<Image src={Express}/>
			<Image src={Html}/>
			<Image src={Js}/>
			
			<Image src={Mongodb}/>
			<Image src={MongooseJS}/>
			<Image src={Nodejs}/>
			<Image src={Npmlogo}/>
			<Image src={Octocat}/>
			<Image src={RReact}/>
			<Image src={Redux}/>
			<Image src={Router}/>
			<Image src={Styled}/>
			<Image src={Trello}/>
			<Image src={Yarn}/>

		</ul>


	);
};
export default Tech;
// <Image src={'something'}/>
