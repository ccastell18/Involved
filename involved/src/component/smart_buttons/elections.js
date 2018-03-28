import React, { Component} from 'react';
import styled from 'styled-components';
import classes from './smart_buttons.css'

class Election extends Component{


	getCandidates = (props) => {
		
		let api_key = 'AIzaSyBgfiDlTi-VtbLrQ0CjcV6z2KbVX_h7kwA';

		fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=${api_key}&address=${address} ${city} ${state}&electionId=${id}`)

	}
	render(){
	return (
		<div className="col-md-3 repBoxes wrapper">
			<p>{this.props.name}</p>
			<p> Election Day: {this.props.electionDay}</p>
			<button onClick={this.getCandidates}>Get Candidates</button>
			<br/>
		</div>
	);
}
};

export default Election ;
