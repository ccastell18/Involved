import React, { Component } from 'react';
import './form.css';
import axios from 'axios';
import styled from 'styled-components';
import Party from './pics/party.jpeg';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { userInfo } from '../../store/action/index.js';
import { connect } from 'react-redux';

const Image = styled.img`
width: 300px;
height: 400px;
padding-bottom: 15px;
vertical-align: middle;
margin-left: 50px;
margin-right: 55px;
 `;

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
	
	}
	// changes the handler so you can type
	changeHandler(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmitHandler(e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
		// console.log('this is the stuff in the form', this.state);
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
		// console.log('submit handled?');
		event.preventDefault();

		let data = {
			email: this.state.email,
			password: this.state.password,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zipcode: this.state.zipcode
		};
		// console.log('in handle submit',this.props.userInfo(data));
		localStorage.getItem('data', data);
		// console.log('STATE', localStorage.getItem('data',this.props.data));


		this.props.userInfo(data);

		axios.post('http://localhost:3000/user/post', data).then((result) => {
			// alert('Posted:' + result);
			let clearedData = {
				email: '',
				password: '',
				address: '',
				city: '',
				state: '',
				zipcode: ''
			};
			this.setState(clearedData);
			// console.log('axios posted here!',result);
		})
			.catch((error) => {
				alert('Failed: ' + error);
			});
	}


	render() {
		console.log('forms!', this.props);
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
					</div>
					<div className="col-sm-4">
						<div>
							<div className="row">
								<div className="col-med-4">

									<form onSubmit={this.handleSubmit} onChange={this.handleChange}>
										<br/>
										<label className="label-form">
											Address:
										</label>
										<input className="Input" name="address" placeholder="Address"
											value={this.state.address}
											onChange={e => this.changeHandler(e)}/>
										<br/>
										<label className="label-form">
											City:
										</label>
										<input className="Input" name="city" placeholder="City" value={this.state.city} onChange={e => this.changeHandler(e)}/>
										<br/>

										<label className="label-form">
											State:
										</label>
										<input className="Input" name="state" placeholder="State" value={this.state.state} onChange={e => this.changeHandler(e)}/>
										<br/>

										<label className="label-form">
											ZipCode:
										</label>
										<input className="Input" name="zipcode" placeholder="Zipcode" value={this.state.zipcode} onChange={e => this.changeHandler(e)}/>
										<br/>



										<button className="btn" type="submit">
											<Link to="/VoterHomePage">Submit</Link>
										</button>


									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<Image src={Party}></Image>
					</div>
				</div>


			</div>



		);


	}
}


function mapStateToProps(state){
	return {
		users: state.userInfo,

	};
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		userInfo


	}, dispatch);
};



export default connect(mapStateToProps, mapDispatchToProps)(Form);
