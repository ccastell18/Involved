import React from 'react'

class Form2 extends React.Component{
  state={
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
    console.log(this.state.props)
    this.setState({
      email: "",
      password: "",
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
            value={this.state.password}
            onChange={e => this.change(e)}
            />
            <br />

              <button onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form2;
