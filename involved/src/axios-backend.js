import axios from 'axios';

const Instance = axios.create({
	baseURL: 'mongodb://jameslock86:07Mercedez@ds113169.mlab.com:13169/involved'
});
export default Instance;
