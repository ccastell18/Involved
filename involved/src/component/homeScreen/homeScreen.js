import React, { Component } from 'react';
import './homeScreen.css';
import { Link } from 'react-router-dom';
class HomeScreen extends Component{



	render() {


		return(
			<div>

				<section className="HomeScreen">
					<h3>Involved</h3>
					<br />
					<p>
						Involved is a website that helps get people involved in the voting process.  By typing in your address you can look up every politician that represents you, from local representatives to US representatives. It will have links to all politicians in office.  It will also have information about voting.  It will have a list of voting dates that are coming up, a list of all politicians running, information on how to register, and a list of polling places.
					</p>
					<br />
					<button	className="btn"><Link to="/form">Get Involved</Link></button>

				</section>
			</div>


		);
	}
}
export default HomeScreen;
