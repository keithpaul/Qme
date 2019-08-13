import React from 'react';
import { Provider }  from 'react-redux';
import { store } from './createStore';


export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				
			</Provider>
		);
	}

}
