import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
class Footer extends Component{
	render(){
		return(

			<footer id="myFooter">
				<div className="container">
					<div className="row">
						<div className="col-sm-2">
							<h5>Get started</h5>
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/form">Get Involved</Link></li>
							</ul>
						</div>
						<div className="col-sm-2">
							<h5>About us</h5>
							<ul>
								<li><Link to="/Tech">Tech Used</Link></li>
								<li><Link to="/ContactInfo">Contact us</Link></li>
							</ul>
						</div>
						<div className="col-sm-4">
							<h5>Support</h5>
							<ul>
								<li><Link to="/FAQ">FAQ</Link></li>
								<li><Link to="/Map">Map of U.S. Districts</Link></li>
							</ul>
						</div>
						<div className="col-sm-2">
							<h5>Legal</h5>
							<ul>
								<li><Link to="/TermsOfUse">Terms of Use</Link></li>
								<li><a href ="http://www.politifact.com/">Fact Checker</a></li>
							</ul>
						</div>
						<div className="col-sm-2">
							<h5>Features</h5>
							<ul>
								<li><a href="https://www.usa.gov/register-to-vote">U.S Voters Registration</a></li>
								<li><a href="https://www.votetexas.gov/register-to-vote/index.html">Texas Voters Registration</a></li>
							</ul>
						</div>
					</div>

				</div>
				<div className="footer-copyright">
					<p>© 2018 Copyright  made by Chris and James</p>
				</div>
			</footer>
		);}}
export default Footer;
