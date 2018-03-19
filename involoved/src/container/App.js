import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import Form from '../component/form.js';
import HomeScreen from '../component/homeScreen'
import Auth from '../component/Auth'
import NavBar from '../component/navbar'
//email password address city state zipcode
class App extends Component {
  onSubmit = (fields) =>{
    this.setState({fields})
  }

  render() {
    return (
      <div className="App">
				<NavBar />
				<Switch>
				  	<Route path="/form" component={Form} />
				  	<Route path="/auth" component={Auth} />
				  	<Route path="/" exact component={HomeScreen} />
				  </Switch>




      </div>
    );
  }
}

export default App;
// <Form onSubmit={fields => this.onSubmit(fields)}/>
//
// <Auth />
