import React, { Component } from 'react';
import './App.css';


import Footer from '../component/navbar/footer'
import { Route, Switch } from 'react-router-dom';
import Form from '../component/registration/form';
import HomeScreen from '../component/homeScreen/homeScreen'
import Auth from '../component/registration/Auth'
import NavBar from '../component/navbar/navbar'//email password address city state zipcode
import ContactInfo from '../component/navbar/ContactInfo'
import VoterHomePage from './voterHomePage'
import TermsOfUse from '../component/navbar/termsOfUse'
import Tech from '../component/navbar/tech';
import styled from 'styled-components'
import FAQ from '../component/navbar/FAQ'
import Map from '../component/smart_buttons/map'

// import { Link }  from 'react-router-dom'

const Wrapper = styled.div`
background-color: lightgrey;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`


class App extends Component{
	constructor(){
		super();
		this.state = {};
	}

	onSubmit = (fields) =>{
    this.setState({fields})
  }

  render(){
			return (
				<Wrapper className="App">
					<div>
						<NavBar />
						<Switch>
							<Route path="/VoterHomePage" component={VoterHomePage} />
							<Route path="/form" component={Form} />
							<Route path="/auth" component={Auth} />
							<Route path="/" exact component={HomeScreen} />
							<Route path="/contactInfo" component={ContactInfo} />
							<Route path="/TermsOfUse" component={TermsOfUse} />
							<Route path="/Tech" component={Tech} />
							<Route path="/FAQ" component={FAQ} />
							<Route path="/Map" component={Map} />
						</Switch>
					</div>
					<Footer />
				</Wrapper>
    );
  }
};
export default App
