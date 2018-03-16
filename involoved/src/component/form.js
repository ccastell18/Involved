import React from 'react'
import  './form.css'
import axios from 'axios'
// import Instance from '../axios-backend'
import UserService from './userService'

class Form extends React.Component{
	constructor(props) {
		super(props);
  this.state={
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',

}
this.addUserService = new UserService();

		this.handleSubmit = this.handleSubmit.bind(this);
  }
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) =>{
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log('this is the stuff in the form',this.state)
    this.setState({
      email: "",
      password: "",
      address: "",
      userName: "",
      state: "",
      zipcode: "",
    });
axios.post ('/user')


  }
	// handleChange = (e)=>{
	// 	this.setState({value: event.target.value})
	// }


	handleSubmit =(event)=>{
		event.preventDefault()
		this.addItemService.sendData(this.state.value);
			this.props.history.push('/user')
}



  render(){
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
				<lable className="label-form">
					Email:
				</lable>
        	<input
	          name="email"
	          placeholder="Email"
	          value={this.state.email}
	          onChange={e => this.change(e)}
          />

        <br />
				<lable className="label-form">
					Password:
				</lable>
	          <input
	            name="password"
	            placeholder="Password"
	            type='password'
	            value={this.state.password}
	            onChange={e => this.change(e)}
	            />

            <br />
				<lable className="label-form">
					Address:
				</lable>
		        <input
		          name="address"
		          placeholder="Address"
		          value={this.state.address}
		          onChange={e => this.change(e)}
		          />

          <br />
				<label className="label-form">
					City:
				</label>
        <input
          name="city"
          placeholder="City"
          value={this.state.city}
          onChange={e => this.change(e)}
          />
          <br />
					<label className="label-form">
						State:
							</label>
		          <input
		            name="state"
		            placeholder="State"
		            value={this.state.state}
		            onChange={e => this.change(e)}
		            />
		            <br />
					<label className="label-form">
						ZipCode:
					</label>
            <input
              name="zipcode"
              placeholder="Zipcode"
              value={this.state.zipcode}
              onChange={e => this.change(e)}
              />
              <br />



              <button className="btn" onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
