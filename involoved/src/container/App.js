import React, { Component } from 'react';
import './App.css';
// import Form from '../component/form.js';
// import Form2 from '../component/login_form'

// import VoterInfo from '../component/voter_info'
import { Route, Switch } from 'react-router-dom';
import Form from '../component/form.js';
import HomeScreen from '../component/homeScreen'
import Auth from '../component/Auth'
import NavBar from '../component/navbar'//email password address city state zipcode
import VoterHomePage from './voterHomePage'


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
				<div className="App">
					<NavBar />
					<Switch>
						<Route path="/VoterHomePage" component={VoterHomePage} />
						<Route path="/form" component={Form} />
						<Route path="/auth" component={Auth} />
						<Route path="/" exact component={HomeScreen} />
					</Switch>
				</div>
    );
  }
};


export default App
