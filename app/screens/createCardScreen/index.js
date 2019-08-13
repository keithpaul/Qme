import React from 'react';
import { Text, View, } from 'react-native';

export default class CreateCardScreen extends React.Component {
    static navigationOptions = {header: null}

	render() {
		return (
            <View style={{flex:1, backgroundColor:"#231F40"}}>
                <Text>Create Card Page</Text>
            </View>
			
		);
	}
}