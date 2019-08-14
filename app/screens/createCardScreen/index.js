import React from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class CreateCardScreen extends React.Component {
    static navigationOptions = {header: null}

    constructor(){
        super();
        this.state = { question:"", answer: ""};
    }

    changeQuestion = (val)=> {
        this.setState({question:val.nativeEvent.text});
    }
    changeAnswer = (val)=> {
        this.setState({answer:val.nativeEvent.text});
    }

    save = ()=> {
        console.log(this.state);
    }
	render() {
		return (
            <View style={{flex:1, backgroundColor:"#231F40", justifyContent:"center", alignItems:'center'}}>
                <Text style={{color:"#fff"}}>Create Card</Text>
                <View style={{flexDirection:"row", width:"100%", position:"relative"}}>
                    <TextInput multiline={true} numberOfLines={10} placeholder="Question..." style={{margin:10, flex:1, padding:5, borderWidth:1, borderColor:"#eee", borderRadius:4, color:"#fff"}} value={this.state.question} onChange={this.changeQuestion} />
                </View>
                <View style={{flexDirection:"row", width:"100%", position:"relative"}}>
                    <TextInput multiline={true} numberOfLines={10} placeholder="Answer..." style={{margin:10, flex:1, padding:5, borderWidth:1, borderColor:"#eee", borderRadius:4, color:"#fff"}} value={this.state.answer} onChange={this.changeAnswer} />
                </View>
                <TouchableHighlight onPress={this.save} style={{borderWidth:1, borderColor:"#fff", padding:10, marginTop:20}}>
                    <Text style={{color:"#fff"}}>Save</Text>
                </TouchableHighlight>
            </View>
			
		);
	}
}