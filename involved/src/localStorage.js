
// console.log('inside localStorage');
export const loadState = () => {

	try{
		const serializedState = localStorage.getItem('state');
		console.log('inside localStorage', localStorage.state);
		if(serializedState === null){
			return undefined;
		}
		return JSON.parse(serializedState);

	} catch(err){
		return undefined;
	}


};
export const saveState = (state) => {
	try
	{
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch(err) {
		console.log(err);
	}
};
