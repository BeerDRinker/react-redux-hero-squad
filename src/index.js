import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; 
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import rootReducer from './reducers';
import { addCharacterById } from './actions';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger))
);

console.log('store.getState()', store.getState());
store.dispatch(addCharacterById(2));

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, document.getElementById('root')
);