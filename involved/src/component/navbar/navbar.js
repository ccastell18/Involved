import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
class NavBar extends Component {
	render(){

		return(
			<div className="first">
				<div className="navbar navbar-default navbar-fixed-top" data-spy="affix" data-offset-top="400">
					<div className="nav-bar-container">
						<div className="navbar-header">
							<a href="/" className="navbar-brand">Involved</a>
						</div>
						<div className="nav nav-pills nav-stacked">
							<ul className="nav navbar-nav">
								<li><Link to="/">HomeScreen</Link></li>
								<li><Link to="/form">Get Involved</Link></li>
								<li><Link to="/Map">Map</Link></li>
								<li><Link to="/voterHomePage">Voter Home Page</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default NavBar;
