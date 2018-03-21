import React, { Component } from 'react';
import './App.css';
// import Form from '../component/form.js';
// import Form2 from '../component/login_form'

// import VoterInfo from '../component/voter_info'
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

const Wrapper = styled.div`
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
						</Switch>
					</div>
					<Footer />
				</Wrapper>
    );
  }
};


export default App