import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from './store/reducer/reducer.js';
import { loadState, saveState } from './localStorage.js';
import throttle from 'lodash/throttle';
const persistedState = loadState();
const rootReducer = combineReducers({
	reducer,
});
const store = createStore(rootReducer,persistedState
);

store.subscribe(throttle(() => {
	const {userInfo}  = store.getState();
	saveState({
		userInfo
	});

}, 1000));
const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
