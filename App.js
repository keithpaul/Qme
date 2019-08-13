import React from 'react';
import { Provider }  from 'react-redux';
import { store } from './createStore';
import Navigation from './navigation.js';

export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
	}

}
