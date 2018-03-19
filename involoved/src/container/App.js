import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


import Form from '../component/form.js';

import Form2 from '../component/login_form'
//email password address city state zipcode
class App extends Component {
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
