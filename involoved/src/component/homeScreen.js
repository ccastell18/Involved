import React, { Component } from 'react';

class HomeScreen extends Component{
	render(){
		return(
			<div>
			
				<p> homeScreen </p>
				<a type="button" href ="/">HomeScreen</a>
				<br/>
				<a type="button" href ="/form">Register</a>
				<br/>
				<a type="button" href ="/auth">Login</a>
			</ div>


		);
	}
}
export default HomeScreen;
