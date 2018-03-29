import React from 'react';
import '../container/App.css';

class Button extends React.Component {
	constructor(props){
		super(props);
		this.handleClickElections = this.handleClickElections.bind(this);
		this.handleClickGetVoterInfo = this.handleClickGetVoterInfo.bind(this);
		this.handleClickRepresentatives = this.handleClickRepresentatives.bind(this);
		this.handleClickPollingInfo = this.handleClickPollingInfo.bind(this);

	}
	handleClickElections(){
		this.props.getElections();
		this.props.showItems('elections');
	}

	handleClickGetVoterInfo(){
		this.props.getVoterInfo();
		this.props.showItems('voter');
	}

	handleClickRepresentatives(){
		this.props.getRepresentatives();
		this.props.showItems('reps');
	}
	handleClickPollingInfo(){
		this.props.getPollingInfo();
		this.props.showItems('polling');
	}
	render(){
		return (
			<div >
				<button  className="elections" onClick={() => {this.handleClickElections();}}>Elections</button>
				<button className="Voter"  onClick={() => {this.handleClickGetVoterInfo();}}>Voter Information</button>
				<button className="Representatives"  onClick={() => {this.handleClickRepresentatives();}}>Representatives</button>
				<button className="Polling" onClick={() => {this.handleClickPollingInfo();}}>Polling Information</button>
			</div>
		);
	}
}

export default Button;
