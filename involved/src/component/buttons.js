import React from 'react';


class Button extends React.Component {
	constructor(props){
		super(props);
		this.handleClickElections = this.handleClickElections.bind(this);
		this.handleClickGetVoterInfo = this.handleClickGetVoterInfo.bind(this);
		this.handleClickRepresentatives = this.handleClickRepresentatives.bind(this);
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

	render(){
		return (
			<div>
				<button onClick={() => {this.handleClickElections();}}>Elections</button>
				<button onClick={() => {this.handleClickGetVoterInfo();}}>Voter Information</button>
				<button onClick={() => {this.handleClickRepresentatives();}}>Representatives</button>
			</div>
		);
	}
}

export default Button;