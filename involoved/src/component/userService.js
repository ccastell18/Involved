import axios from 'axios';

class UserService {

	sendData(data) {
		axios.post('http://localhost:3000/user/add/post', {
			userData: data
		})
			.then(res => this.setState({ user: res.data }))
			.catch(err => console.log(err));
	}

	updateData(data, id){
		axios.post('http://localhost:30000/user/put/'+id, {
			userData: data
		})
			.then(res => this.setState({ user: res.data }))
			.catch(err => console.log(err));
	}

	deleteData(id){
		axios.get('http://localhost:3000/user/delete/'+id)
			.then().catch(err => console.log(err));
	}
}

export default UserService;
