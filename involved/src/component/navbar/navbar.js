import React, { Component } from 'react';
// import Flag from '../../public/flag.jpg';
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
								<li><a href="/">HomeScreen</a></li>
								<li><a href="/form">Register</a></li>
								<li><a href="/Map">Map of U.S. District</a></li>
								<li><a href="/voterHomePage">VHP</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default NavBar;
