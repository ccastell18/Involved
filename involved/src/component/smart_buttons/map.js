import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Map extends Component{
	render(){
		return(


			<div>
				<h1 className="Title1">Your U.S. Congressional Districts</h1>
				<Iframe
					url="https://www.govtrack.us/congress/members/embed/mapframe?&bounds=-102.331,32.928,-94.205,28.104"
					width="600"
					height="500"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"
					allowFullScreen/>
				<div>
					<button className="btn">
						<a href="/VoterHomePage">More Information</a>
					</button>

				</div>
			</div>
		);
	}
}
export default Map;
