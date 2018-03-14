import React, { Component } from 'react';
import '../App.css';
import Form from '../component/form';
//email password address city state zipcode
class App extends Component{



  onSubmit = (fields) =>{
    this.setState({fields})
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    );
  }
}

export default App;
