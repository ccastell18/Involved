import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reducer from './store/reducer/reducer.js';
// import{ userAddress, userCity, userState } from './store/action/index.js';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
const rootReducer = combineReducers({
	userInfo: reducer,
});




const store = createStore(rootReducer, composeEnhancers(

	applyMiddleware(thunk)
));



const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
