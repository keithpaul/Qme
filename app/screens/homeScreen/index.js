import React from 'react';
import { Text, View, } from 'react-native';

export default class HomeScreen extends React.Component {
	constructor() {
		super();
		this.state = { title: "Keith is the man", time: "NOW" }
	}

	render() {
		return (
            <View style={container}>
                <Text>{this.state.title}</Text>
                <Text>{this.state.time}</Text>
                <AddCardButton />
            </View>
			
		);
	}
}


let	container = {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
}

