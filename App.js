import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import AddCardButton from './app/components/addCardButton';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = { title: "Keith is the man", time: "NOW" }
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>{this.state.title}</Text>
				<Text>{this.state.time}</Text>
				<AddCardButton />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
