import React, { Component } from 'react';
import './form.css';
import axios from 'axios';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			address: '',
			city: '',
			state: '',
			zipcode: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.changeHandler = this.changeHandler.bind(this);
		// this.submitHandler = this.submitHandler.bind(this);
	}

	changeHandler(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmitHandler(e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
		console.log('this is the stuff in the form', this.state);
		this.setState({
			email: '',
			password: '',
			address: '',
			city: '',
			state: '',
			zipcode: ''
		});

	}

	handleSubmit(event) {
		event.preventDefault();

		let data = {
			email: this.state.email,
			password: this.state.password,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zipcode: this.state.zipcode
		};

		axios.post('http://localhost:3000/user/post', data).then((result) => {
			alert('Posted:' + result);
			let clearedData = {
				email: '',
				password: '',
				address: '',
				city: '',
				state: '',
				zipcode: ''
			};
			this.setState(clearedData);
		}).catch((error) => {
			alert('Failed: ' + error);

		});
		// axios.put('http://localhost:3000/user/put', data)
		// 	.then((result) => {})
		// 	.bind(this);
	}


	render() {
		return (

			<div>
				<form onSubmit={this.handleSubmit} onChange={this.handleChange}>
					<label className="label-form">
	      Email:
					</label>
					<input name="email" placeholder="Email" value={this.state.email} onChange={e => this.changeHandler(e)}/>

					<br/>
					<label className="label-form">
	      Password:
					</label>
					<input name="password" placeholder="Password" type='password' value={this.state.password} onChange={e => this.changeHandler(e)}/>

					<br/>
					<label className="label-form">
	      Address:
					</label>
					<input name="address" placeholder="Address" value={this.state.address} onChange={e => this.changeHandler(e)}/>

					<br/>
					<label className="label-form">
	      City:
					</label>
					<input name="city" placeholder="City" value={this.state.city} onChange={e => this.changeHandler(e)}/>
					<br/>
					<label className="label-form">
	      State:
					</label>
					<input name="state" placeholder="State" value={this.state.state} onChange={e => this.changeHandler(e)}/>
					<br/>
					<label className="label-form">
	      ZipCode:
					</label>
					<input name="zipcode" placeholder="Zipcode" value={this.state.zipcode} onChange={e => this.changeHandler(e)}/>
					<br/>

					<button className="btn" type="submit">Submit</button>

					<button className="btn" type="delete">Delete</button>
				</form>
				<div>
					<br />
					<a type="button" href ="/">HomeScreen</a>
					<br/>

					<a type="button" href ="/auth">Login</a>
				</ div>
			</div>
		);


	}
}

export default Form;
