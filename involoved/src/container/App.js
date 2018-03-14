import React, { Component } from 'react';
import './App.css';
import Form from './form.js';
//email password address city state zipcode
class App extends Component {
  onSubmit = (fields) =>{
    console.log('App comp got; ', fields)
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
