import React from 'react'

class Form extends React.Component{
  state={
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
  }
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) =>{
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state)
    this.setState({
      email: "",
      password: "",
      address: "",
      userName: "",
      state: "",
      zipcode: "",
    });
  }
  render(){
    return (
      <form>
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          />
          <br />

          <input
            name="password"
            placeholder="Password"
            type='password'
            value={this.state.password}
            onChange={e => this.change(e)}
            />
            <br />

        <input
          name="address"
          placeholder="Address"
          value={this.state.address}
          onChange={e => this.change(e)}
          />
          <br />

        <input
          name="city"
          placeholder="City"
          value={this.state.city}
          onChange={e => this.change(e)}
          />
          <br />

          <input
            name="state"
            placeholder="State"
            value={this.state.state}
            onChange={e => this.change(e)}
            />
            <br />

            <input
              name="zipcode"
              placeholder="Zipcode"
              value={this.state.zipcode}
              onChange={e => this.change(e)}
              />
              <br />



              <button onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
