// import Redux from 'redux';

import { ADDRESS, CITY, STATE } from '../action/actionTypes';
const initalState = {
	address:'',
	city: '',
	state:''
};


const reducer = (state = initalState, action) =>{
	switch(action.type)
	{

	case ADDRESS:
		console.log('hello2', action.payload);
		return [
			...state,
			{
				address: action.payload

			}
		];
	case CITY:
		console.log('hello3', action.payload);
		return [

			...state,
			{
				city: action.payload
			}
		];
	case STATE:
		console.log('hello4', action.payload);
		return [

			...state,
			{
				state: action.payload
			}
		];

	
	}

	return state;
};
export default reducer;
