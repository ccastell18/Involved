import React from 'react';
import './tech.css';
const FAQ = () => {
	return (
		<div className="Faq" >
			<section>
				<h3>Frequently Asked Questions?</h3>
				<p className="Paragraph3">What?</p>
				<li className="Listfaq">
						We are making a site that will give the everyday person a way of finding out a little more about their own government, how they can get Involved, and how they can register to vote.
				</li>
				<p className="Paragraph3">Why?</p>
				<li className="Listfaq">
						We feel that the more you know, the more that you can be Involved with your daily political climate.
				</li>
				<br/>
				<p className="Paragraph3">Who?</p>
				<li className="Listfaq">
					Chris and James
				</li>
				<br/>
				<br/>
				<p className="Paragraph3"> How can I register to vote?</p>
				<li className="Listfaq">
					<a href="https://www.usa.gov/register-to-vote">Us Registration</a>
				</li>

				<li className="Listfaq">
					<a href="https://www.vote.org/register-to-vote/texas/?gclid=CjwKCAjwhcjVBRBHEiwAoDe5x-B1Sq62fRC9Js1j1MDqgzTWoUJRx-HvHhNuofQ8YeB22UGgnf5NshoCm_0QAvD_BwE">Texas Registration</a>
				</li>
			</section>
		</div>
	);
};
export default FAQ;
