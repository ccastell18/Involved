import React, { Component } from 'react';
import Form from '../component/form'
import Election from '../component/elections'
import Button from '../component/buttons'
import Representatives from '../component/representatives'
import VoterInfo from '../component/voter_info'

import Polling from '../component/polling'



const api_key = 'AIzaSyBgfiDlTi-VtbLrQ0CjcV6z2KbVX_h7kwA';
const street_address='3308 John Muir Court';
const city="Plano";
const state="TX";
const id = '2000'

class VoterHomePage extends Component {

	constructor(props){
    super(props);
    this.state = {


			showElections: false,
			showReps: false,
			showVotorInfo: false,

      elections: [],
      ocd: [],
      representatives: [],
      div: [],

    	voterInfo: [],
			pollingInfo: []
    };

    	


    };
		this.showItems = this.showItems.bind(this);
    this.getElections = this.getElections.bind(this);
    this.getRepresentatives = this.getRepresentatives.bind(this);
    this.getVoterInfo = this.getVoterInfo.bind(this);
		this.getPollingInfo = this.getPollingInfo.bind(this);
  }

	async getElections() {
    console.log('Starting to fetch elections now.');
    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/elections?key=` + api_key)
    const data = await api_call.json()
    console.log(data);
    let electionId = data.elections.map(election =>{
        return election.ocdDivisionId;
    });
    console.log(electionId)
    this.setState({
      elections: data.elections,
      ocd: electionId
    });
  }

  async getRepresentatives(e) {

    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${api_key}&address=${street_address} ${city} ${state}`)
    const data = await api_call.json()
    console.log(data)
    let div = Object.keys(data.divisions)
    console.log(div)
    let reps = []
    data.offices.forEach(office => {
      let newRep = {}
        office.officialIndices.forEach(officialIndex =>{
        newRep.office= office.name;
        newRep.official=data.officials[officialIndex];
        reps.push(newRep);
      });
    })
    console.log("reps",reps)
    this.setState({
      representatives: reps,
      ocd: div
    });
  }


  async getVoterInfo(e) {
		

    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=${api_key}&address=${street_address} ${city} ${state}&electionId=${id}`)
    console.log("got info")
    const data = await api_call.json()
    console.log(data);
		let vote = [];
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
		console.log(vote)

		this.setState({

      voterInfo: vote
		});
    console.log('New State', this.state);
  }



	async getPollingInfo(e) {

    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=${api_key}&address=${street_address} ${city} ${state}&electionId=${id}`)
    console.log("got info")
    const data = await api_call.json()
    console.log(data.pollingLocations);
		this.setState({
			pollingInfo: data.pollingLocations
		})
	}


  displayVoterInfo() {
    if (this.state.voterInfo.length >0) {
      return this.state.voterInfo.map( voter => {
        return (<VoterInfo
					office={voter.office}
					name={voter.candidate.name}
					party={voter.candidate.party}
					candidateUrl={voter.candidate.candidateUrl}/>
				);
      })
    }
		else {
      return (<p>Press a button above to begin.</p>);
    }
  }


  displayVoterInfo() {

    if (this.state.voterInfo.length >0) {
      return this.state.voterInfo.map( voter => {
        return (<VoterInfo
						title={voter.candidate.office}
						name={voter.candidate.name}
						party={voter.candidate.party}
						candidateUrl={voter.candidate.candidateUrl}/>);
      })
    } else {
      return (<p>Press a button above to begin.</p>);
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
      return (<p>Press a button above to begin.</p>);

    }
  }

  displayRepresentatives() {
    if (this.state.representatives.length > 0) {
      return this.state.representatives.map( representative => {

        return (<Representatives
					office={representative.office} 						 name={representative.official.name} party={representative.official.party}
        	phones={representative.official.phones}
        	urls={representative.official.urls}/>
				);
      })
    }
		else {
      return (<p>No representatives as of now.</p>);
    }
  }

	displayPolling(){
		if(this.state.pollingInfo.length > 0) {
			return this.state.pollingInfo.map( polling => {
				return (<Polling
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
		else{
			return (<p>No Polling</p>)
		}
	}

	render() {
		const list = this.displayElections();
		const list1 = this.displayRepresentatives();
		const list2 = this.displayVoterInfo();
		const list3 = this.displayPolling();

				console.log("PICTURES", representative);
        return (
					<Representatives 																											office={representative.office} 	 																			name={representative.official.name} 			party={representative.official.party}
        	phones={representative.official.phones}
        	urls={representative.official.urls}
					image={representative.official.photoUrl}/>
				);
      })
    } else {
      return (<p></p>);
    }
  }

	showItems(type){
		console.log('this!', this);
		let showElections = (type === 'elections') ? true : false;
		let showReps = (type === 'reps') ? true : false;
		let showVotorInfo = (type === 'voter') ? true : false;
		this.setState({
			showElections,
			showReps,
			showVotorInfo,
		})
	}

	render() {



		return(
			<div>
				<Button
					showItems={this.showItems}
					getElections={this.getElections}
					getRepresentatives={this.getRepresentatives}
					getVoterInfo={this.getVoterInfo}
					getPollingInfo={this.getPollingInfo}
					/>

				{list}
				{list1}
				{list2}
				{list3}
			</div>);

				/>
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
			</div>
		);

	}


}
export default VoterHomePage;
// {list}
// {list1}
// {list2}
