import React from 'react'

class Form extends React.Component{
  state={
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
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
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
  }
  render(){
    return (
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          />
          <br />

        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          />
          <br />

        <input
          name="userName"
          placeholder="User Name"
          value={this.state.userName}
          onChange={e => this.change(e)}
          />
          <br />

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
              value={this.state.password}
              onChange={e => this.change(e)}
              />
              <br />

              <button onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
