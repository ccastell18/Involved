// import Redux from 'redux';

import { USER_INFO } from '../action/actionTypes';
// const initalState = {
// 	address:'',
// 	city: '',
// 	state:''
// };


const reducer = (state = null ,action) =>{
	switch(action.type)
	{

	case USER_INFO:
		// console.log('hello2', action.payload);
		return[

			...state,
			{
				userCredentials: action.payload

			}];
	default:
		return state;
	}

};
export default reducer;
