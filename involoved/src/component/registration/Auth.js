import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/action/index'
import Input from '../input/input'
// import Button from '../UI/buttons'
import './form.css'
import styled from 'styled-components'
const FlexBoxWrapper = styled.div`
	display:flex;
	flex-direction: row;
`

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
console.log('stuff here', this.state.controls[0]);
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
				<div className="row">
				  <FlexBoxWrapper className="col-md-6">
						<div>
							<label id="label" className="label-form">
								Email:
							</label>
							<br/>
							<label id="label">
								Password:
							</label>
						</div>
						<div>
							<p>
								<form type="Input" onSubmit={this.submitHandler}>
									{form}
								</form>
							</p>
						</div>
					</FlexBoxWrapper>



					 <div className="col-md-6">
 							<button className="btn" buttonType="Success">Submit</button>
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
