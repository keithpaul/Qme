import React from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCard } from '../../actions/addCard';

class CreateCardScreen extends React.Component {
    static navigationOptions = {header: null}

    constructor(props){
        super(props);
        this.state = { question:"", answer: ""};        
    }

    changeQuestion = (val)=> {
        this.setState({question:val.nativeEvent.text});
    }
    changeAnswer = (val)=> {
        this.setState({answer:val.nativeEvent.text});
    }

    save = () => { 
        this.props.addCard(this.state);
    }
	render() {
		return (
            <View style={{flex:1, backgroundColor:"#fefefe", justifyContent:"center", padding: 20, alignItems:"center"}}>
                <Text style={{color:"#000"}}>Create a new card</Text>
                <Text style={{}}>You have {this.props.cards.length} cards</Text>
                <View style={qCardStyle}>
                    <Text style={{color: "#666", fontSize: 14}}>Question:</Text>
                    <TextInput multiline={true} style={{color: "#999", fontSize: 16}} value={this.state.question} onChange={this.changeQuestion} />
                </View>
                <View style={aCardStyle}>
                    <Text style={{color: "#666", fontSize: 14}}>Answer:</Text>
                    <TextInput multiline={true} style={{color: "#999", fontSize: 16}} value={this.state.answer} onChange={this.changeAnswer} />
                </View>
                <TouchableHighlight onPress={this.save} style={saveButtonStyle}>
                    <Text style={{color:"#fff", fontSize: 16}}>Save</Text>
                </TouchableHighlight>
            </View>
			
		);
	}
}

// mapStateToProps is where you add states from redux if you wanna use them in this component. Here I'm using the cards reducer. The state.cards doesn't refer to state
// from this component, but the reducer state!! now you can use cards as a prop as in line 29
let mapStateToProps = (state) => { return { cards:state.cards }; };
// matchDispatchToProps is where you add action functions. in this case, we have addCard. It can be used as a prop like in our save() function
let matchDispatchToProps = (dispatch) => { return bindActionCreators({ addCard }, dispatch); }
export default connect(mapStateToProps, matchDispatchToProps)(CreateCardScreen);

let qCardStyle = {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 4,
    borderTopWidth: 3,
    borderTopColor: "#ffffff",
    width: "100%",
    height: "20%", 
    marginTop: "15%",
    shadowColor: 'rgba(0,0,0,0.3)',
	shadowOffset: { width: 3, height: 3 },
	shadowOpacity: 1,
	shadowRadius: 3,
	elevation: 3,
}

let aCardStyle = {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 4,
    borderTopWidth: 3,
    borderTopColor: "#9400D3",
    width: "100%",
    marginTop: 30,
    height: "30%",
    shadowColor: 'rgba(0,0,0,0.3)',
	shadowOffset: { width: 3, height: 3 },
	shadowOpacity: 1,
	shadowRadius: 3,
	elevation: 3,
}

let saveButtonStyle = {
    backgroundColor: "#CC0000",
    width: 150,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
}