import { USER_INFO } from './actionTypes';

export { auth } from './auth';
// export {address, city, state }  from './address';

export function userInfo(payload) {
	// console.log('inside action2', payload);
	return {
		type: USER_INFO,

		payload,
	};
}
