import { USER_INFO } from '../action/actionTypes';
const initalState = {

	userCredentials : {
		address:'1515 wickersham',
		city: 'Austin',
		state:'Texas'
	}
};

const reducer = (state = initalState ,action) =>{
	switch(action.type)
	{
	case USER_INFO:
		console.log('hello2', action.payload);
		return Object.assign({}, state, {
			userCredentials: action.payload
		});
	default:
		return state;

	}

};
export default reducer;
