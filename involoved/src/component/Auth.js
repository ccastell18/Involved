import React, { Component } from 'react'
//import axios from 'axios';
//import {link} from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../store/action/index'
import Input from './input/input'
import Button from './UI/buttons'

class Auth extends Component {
  state = {
    controls: {
      email: {
        elemnetType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'email Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false

      },
      password: {
        elemnetType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    }
  }
	checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }
inputChangedHandler =(event, controlName)=>{
	const updatedControls ={
		...this.state.controls,
		[controlName]:{
			...this.state.controls[controlName],
			value: event.target.value,
			valid: this.checkValidity(event.target.value,this.state.controls[controlName].validation),
			touched:true
		}
	}
this.setState({controls:updatedControls})


}
submitHandler = (event) =>{
	event.preventDefault()
	this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value)

}

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({id: key, config: this.state.controls[key]});
    }
    const form = formElementsArray.map(formElement => (
		<Input
		key={formElement.id}
		elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} value={formElement.config.value}
		invalid={!formElement.config.valid} shouldValidate={formElement.config.validation} touched={formElement.config.touched}
		changed={(event) => this.inputChangedHandler(event, formElement.id)}/>


       ))

			return(
    		<div>
					<form onSubmit={this.submitHandler}>
						{form}
						<Button btnType="Success"> Submit </ Button>
					</form>

					<div>
						<br />
						<a type="button" href ="/">HomeScreen</a>
						<br/>
						<a type="button" href ="/form">Register</a>
						<br/>

					</ div>



				</div>
      )
	}

}
const mapDispatchToProps = dispatch =>{
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password))
	}
}
			export default connect(null, mapDispatchToProps)(Auth);


//           change = (e) => {
//             this.setState({
//               [e.target.name]: e.target.value
//             });
//           }
//
//           onSubmit = (e) => {
//             e.preventDefault();
//             this.props.onSubmit(this.state);
//             console.log(this.state.props)
//             this.setState({email: "", password: ""});
//           }
//           render() {
//             return (<form>
//               <input name="email" placeholder="Email" value={this.state.email} onChange={e => this.change(e)}/>
//               <br/>
//
//               <input name="password" placeholder="Password" value={this.state.password} onChange={e => this.change(e)}/>
//               <br/>
//
//               <button btnType="Success" onClick={(e) => this.onSubmit(e)}>Submit</button>
//             </form>);
//           }
//         }
//
// export default Auth;
