import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import AddCardButton from './components/addCardButton';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = { title: "Keith is the man",
						time: "NOW", 
						inputs: {
							question: "",
							answer: "",
						} 
					};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{width: 300, height: 100, backgroundColor: '#FFFFFF', borderRadius: 4, padding: 12}}>
            		<Text style={{fontSize: 14}}>Question:</Text>
            		<TextInput style={{fontSize: 16}} onChangeText={(question) => this.setState({question})} />
					<Text>{this.state.question}</Text>					
          		</View>
				<View style={{width: 300, height: 300, backgroundColor: '#FFFFFF', borderRadius: 4, marginTop: 25, padding: 12}}>
					<Text style={{fontSize: 14}}>Answer:</Text>
            		<TextInput style={{fontSize: 16}} onChangeText={(answer) => this.setState({answer})} />
					<Text>{this.state.answer}</Text>
				</View>
				<AddCardButton />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#231F40',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

