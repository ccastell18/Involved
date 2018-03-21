import React, { Component } from 'react';
import './footer.css';
class Footer extends Component{
	render(){
		return(

			<footer id="myFooter">
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<h5>Get started</h5>
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/form">Sign up</a></li>
							</ul>
						</div>
						<div className="col-sm-3">
							<h5>About us</h5>
							<ul>
								<li><a href="/Tech">Tech Used</a></li>
								<li><a href="/ContactInfo">Contact us</a></li>
							</ul>
						</div>
						<div className="col-sm-3">
							<h5>Support</h5>
							<ul>
								<li><a href="/">FAQ</a></li>
								<li><a href="https://www.usa.gov/register-to-vote">Voters Registration</a></li>
							</ul>
						</div>
						<div className="col-sm-3">
							<h5>Legal</h5>
							<ul>
								<li><a href="/TermsOfUse">Terms of Use</a></li>
								<li><a href="/TermsOfUse">Privacy Policy</a></li>
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
//<iframe id="map-container" frameborder="0" style="border:0"
// 	src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOwg_06VPwokRYv534QaPC8g&key=AIzaSyBcx8NGKYA105FzrDmoWibrnegRKY3l4rs" >
// </iframe>

// working on the map part down
// <div><script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcx8NGKYA105FzrDmoWibrnegRKY3l4rs&callback=initMap" async defer></script></div>;
