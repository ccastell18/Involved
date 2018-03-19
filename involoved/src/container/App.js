import React from 'react';
import './App.css';
// import Form from '../component/form.js';
// import Form2 from '../component/login_form'
import Election from '../component/elections'
import Button from '../component/buttons'
import Representatives from '../component/representatives'
// import VoterInfo from '../component/voter_info'

const api_key = 'AIzaSyBgfiDlTi-VtbLrQ0CjcV6z2KbVX_h7kwA';
const street_address='7201 Wood Hollow Drive';
const city="Austin";
const state="TX";

class App extends React.Component{
  constructor(){
    super();
    this.state = {

      elections: [],
      ocd: [],
      representatives: [],
      div: [],
      voterInfo: [],
    };

    this.getElections = this.getElections.bind(this);
    this.getRepresentatives = this.getRepresentatives.bind(this);
    this.getVoterInfo= this.getVoterInfo.bind(this);
  }
  componentWillMount() {
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

  async getRepresentatives() {
    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${api_key}&address=${street_address} ${city} ${state}`)
    const data = await api_call.json()
    console.log(data)
    let div = Object.keys(data.divisions)
    console.log(div)
    let reps = []
    data.offices.map(office => {
      let newRep = {}
        office.officialIndices.forEach(officialIndex =>{
        newRep.office= office.name;
        newRep.official=data.officials[officialIndex];
        reps.push(newRep);
      });
    })
    console.log(reps)
    this.setState({
      representatives: reps,
      ocd: div
    });
  }

  async getVoterInfo() {
    console.log('Starting to fetch voterinfo now.');
    const api_call = await fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=${api_key}&address=${street_address} ${city} ${state}&electionId=2000`)
    console.log("got info")
    const data = await api_call.json()
    console.log(data);
    this.setState({
      voterInfo: data.voterInfo
    });
    console.log('New State', this.state);
  }


  displayElections() {
    if (this.state.elections.length > 0) {
      return this.state.elections.map( election => {
        return (<Election key={election.id} name={election.name} electionDay={election.electionDay}/>);
      })
    } else {
      return (<p>Press a button above to begin.</p>);
    }
  }


  displayRepresentatives() {
    if (this.state.representatives.length > 0) {
      return this.state.representatives.map( representative => {

        return (<Representatives office={representative.office} name={representative.official.name} party={representative.official.party}
        phones={representative.official.phones}
        urls={representative.official.urls}/>);
      })
    } else {
      return (<p>No representatives as of now.</p>);
    }
  }

  // displayVoterInfo() {
  //   if (this.state.voterInfo.length > 0) {
  //     return this.state.voterInfo.map( voterInfo => {
  //       return (<VoterInfo />);
  //     })
  //   } else {
  //     return (<p>Press a button above to begin.</p>);
  //   }
  // }

  render(){
    const list = this.displayElections();
    const list1 = this.displayRepresentatives();

    return(
      <div>
        <Button

          getElections={this.getElections}
          getRepresentatives={this.getRepresentatives}
          getVoterInfo={this.getVoterInfo}
          />
        {list}
        {list1}

      </div>
    );
  }
};


export default App
