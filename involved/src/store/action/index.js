import { ADDRESS, CITY, STATE } from './actionTypes';

export { auth } from './auth';
// export {address, city, state }  from './address';

export function userAddress(payload) {
	console.log('inside action2', payload);
	return {
		type: ADDRESS,
		payload,
	};
}

export function userCity(payload) {
	console.log('inside action3', payload);
	return {
		type: CITY,
		payload,
	};

}
export function userState(payload) {
	 console.log('inside action4', payload);
	return {
		type: STATE,
		payload,
	};
}
