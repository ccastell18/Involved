import React, { Component } from 'react';
import axios from 'axios';
import Election from '../component/smart_buttons/elections'
import Button from '../component/buttons'
import Representatives from '../component/smart_buttons/representatives'
import VoterInfo from '../component/smart_buttons/voter_info'
import Polling from '../component/smart_buttons/polling'
import './App.css'
import Form  from '../component/registration/form.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userInfo } from '../store/action/index.js'
import Iframe from 'react-iframe';
const api_key = 'AIzaSyBgfiDlTi-VtbLrQ0CjcV6z2KbVX_h7kwA';
const address = ''
const city = ''
const state = ''
const id = '2000';


class VoterHomePage extends Component {

	constructor(props){
    super(props)


    this.state = {
			showMap: false,

			address: null,
			city: null,
			state: null,




			showItems: false,
			showElections: false,
			showReps: false,
			showVotorInfo: false,
			showPollingInfo: false,
			showMap: false,


			voterInfoId: [],

      elections: [],
      representatives: [],
    	voterInfo: [],
			pollInfo: [],

			id: [],
    };



		this.showItems = this.showItems.bind(this);
    this.getElections = this.getElections.bind(this);
    this.getRepresentatives = this.getRepresentatives.bind(this);
    this.getVoterInfo= this.getVoterInfo.bind(this);
		this.getPollingInfo= this.getPollingInfo.bind(this);
}

	async getElections() {
    console.log('Starting to fetch elections now.');
    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/elections?key=` + api_key)
    const data = await api_call.json()
    console.log(data);
    let electionDivId = data.elections.map(election =>{
        return election.ocdDivisionId;
    });
    console.log(electionDivId)
    this.setState({
      elections: data.elections,
    });
  }

  async getRepresentatives(e) {

		console.log('props in api call', this.props.userCredentials);
		// const userCredentials = this.props.userCredentials
		console.log('inside of vhp',this.props.userCredentials);
    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${api_key}&address=${this.props.userCredentials.address} ${this.props.userCredentials.city} ${this.props.userCredentials.state}`)

    const data = await api_call.json()
    console.log(data)
    let reps = []
    data.offices.forEach(office => {
      let newRep = {}
        office.officialIndices.forEach(officialIndex =>{
        newRep.office= office.name;
        newRep.official=data.officials[officialIndex];
				if(!reps.includes(newRep.name)){
        	reps.push(newRep);
				}
      });
    })
    console.log("reps",reps)
    this.setState({
      representatives: reps,
    });
}
  async getVoterInfo() {
    console.log('Starting to fetch voterinfo now.');

    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=${api_key}&address=${this.props.userCredentials.address} ${this.props.userCredentials.city} ${this.props.userCredentials.state}&electionId=${id}`)

    console.log("got info")
    const data = await api_call.json()
		console.log(data)
		let vote = [];
		if (!data.error) {
			data.contests.forEach((contest) =>{
				if(contest.candidates){
				contest.candidates.forEach((candidate) =>{
					let rep = {}
					rep.office = contest.office;
					rep.candidate = candidate;
					vote.push(rep)
					})
				}
			})
			console.log('voter info here', vote)
				this.setState({
	      voterInfo: vote
			});
	    console.log('New State', this.state);
		}
  }

	async getPollingInfo() {
    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=${api_key}&address=${this.props.userCredentials.address} ${this.props.userCredentials.city} ${this.props.userCredentials.state}&electionId=${id}`)
    const data = await api_call.json()
		console.log("got info", data)
    console.log(data);
		this.setState({
			pollInfo: data.pollingLocations
		})
	}

  displayVoterInfo() {
    if (this.state.voterInfo.length >0) {
      return this.state.voterInfo.map( voter => {

        return (<VoterInfo
					key={voter.candidate.name}
					office={voter.office}
					name={voter.candidate.name}
					party={voter.candidate.party}
					candidateUrl={voter.candidate.candidateUrl}/>
				);
      })
    }
		else {
      return (<p>No Information to present.</p>);
    }
  }
  displayElections() {
    if (this.state.elections.length > 0) {
      return this.state.elections.map( election => {

							return (<Election
								key={election.id}
								name={election.name}
								electionDay={election.electionDay}/>
						);
      })
    }
		else {
      return (<p>No Elections scheduled at this time!</p>);
    }
  }

	displayRepresentatives() {
    if (this.state.representatives.length > 0) {
      return this.state.representatives.map( (representative, index) => {
        return (<Representatives
					key={index}
					office={representative.office} 						 name={representative.official.name} party={representative.official.party}
        	phones={representative.official.phones}
        	urls={representative.official.urls}
					image={representative.official.photoUrl}
					/>
				);
      })
    }
		else{
			<p>Can Not Retrieve Information.</p>
		}
  }

	displayPollingInfo(){
		 console.log('here1', this.state.pollInfo);
		if(this.state.pollInfo.length > 0) {
			console.log('here2');
			return this.state.pollInfo.map( polling => {
				return (<Polling
					key={polling.address.line1}
					locationName={polling.address.locationName}
					line1={polling.address.line1}
					city={polling.address.city}
					state={polling.address.state}
					zip={polling.address.zip}
					pollingHours={polling.pollingHours}
					/>
				);
			})
		}
	}

	showItems(type){
		console.log('this!', this);
		let showElections = (type === 'elections') ? true : false;
		let showReps = (type === 'reps') ? true : false;
		let showVotorInfo = (type === 'voter') ? true : false;
		let showPollingInfo = (type === 'polling') ? true : false;

		this.setState({
			showElections,
			showReps,
			showVotorInfo,
			showPollingInfo,
		})
	}
	_showMap = bool =>{
		this.setState({
			showMap: bool
		})
	}
	render() {
		return(
			<div >
				<div id="smart_buttons">
					<Button className="VHP"
					showItems={this.showItems}
					getElections={this.getElections}
					getRepresentatives={this.getRepresentatives}
					getVoterInfo={this.getVoterInfo}
					getPollingInfo={this.getPollingInfo}
					/>
				</div>
				<div className="row">

					<Form />
				</div>
							<div className="row">
				{
					this.state.showElections &&
					(
							<div className="container-fluid">
								<div className="row">
									{this.displayElections()}
								</div>
							</div>
						)
				}
				{
					this.state.showReps &&
					(
						<div className="container-fluid">
							<div className="row">
								{this.displayRepresentatives()}
							</div>
						</div>
					)
				}
				{
					this.state.showVotorInfo &&
					(
						<div className="container-fluid">
							<div className="row">
								{this.displayVoterInfo()}
							</div>
						</div>
					)
				}
				{
					(this.state.showPollingInfo)&&
					(
						<div className="container-fluid">
							<div className="row">
								{this.state.pollInfo !== undefined ? this.displayPollingInfo() : (
									<p> No Info Avialable.
										<button className="VHP"><a href="https://www.vote.org/polling-place-locator/">Other Sources</a></button>
									</p>
								)
							}
							</div>
						</div>
					)
				}
</div>

<div className="row">
	<button className="btn" onClick={this._showMap.bind(null, true)}>Show Map</button>
	<button className="btn" onClick={this._showMap.bind(null,false)}>Hide Map</button>
	{
		this.state.showMap && (
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
	</div>
) }
</div>
</div>
);
	}
}

const mapStateToProps = state => {
	console.log('state in mapstatetoprops', state);
	return {
		userCredentials: state.reducer.userCredentials,
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		userInfo
	})
}
export default connect(mapStateToProps, mapDispatchToProps)(VoterHomePage)
