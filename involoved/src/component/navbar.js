import React, { Component } from 'react';

class NavBar extends Component {
	render(){

		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="/">Invovled</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link active" href="/">HomeScreen <span className="sr-only"></span></a>
							<a className="nav-item nav-link" href="/form">Register</a>
							<a className="nav-item nav-link" href="/auth">Login</a>
							<a className="nav-item nav-link disabled" href="/VoterHomePage">VoterHomePage</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
export default NavBar;
