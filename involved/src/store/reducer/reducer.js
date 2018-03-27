// import Redux from 'redux';

import { USER_INFO } from '../action/actionTypes';
const initalState = {
	address:'1515 wickersham',
	city: 'Austin',
	state:'Texas'
};


const reducer = (state = initalState, action) =>{
	switch(action.type)
	{

	case USER_INFO:
		console.log('hello2', action.payload);
		return[

			...state,
			{
				userCredentials: action.payload
			}];
	}

	return state;
};
export default reducer;
