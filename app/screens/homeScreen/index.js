import React from 'react';
import { Text, View, TouchableHighlight} from 'react-native';
import AddCardButton from './../../components/addCardButton';

export default class HomeScreen extends React.Component {
    static navigationOptions = {header: null}
    constructor() {
		super();
		this.state = { title: "Keith is the man", time: "NOW" }
    }
    
	render() {
		return (
            <View style={container}>
                <Text style={{fontSize:30}}>{this.state.title}</Text>
                <Text>{this.state.time}</Text>
                <AddCardButton navigation={this.props.navigation} />
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

