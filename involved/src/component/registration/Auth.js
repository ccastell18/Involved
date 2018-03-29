import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/action/index'
import Input from '../input/input'
import './form.css'
import '../UI/button.css'

class Auth extends Component {
  state = {
    controls: {
      email: {
        elemnetType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email Address'
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
          placeholder: 'Password'
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
console.log('stuff here', this.state.controls);
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
				<div className="container">
					<div className="row">
						<div className="col-sm-3">

								</div>
						<div className="col-sm-3">

					<form className="AuthForm" type="Input" onSubmit={this.submitHandler}>
 						{form}
						<button className="btn" buttontype="Success">
							<a href="/Map">submit</a>
							</button>
					</form>
				</div>
					<div className="col-sm-3">

							</div>

				</div>

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
