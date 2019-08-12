import React from 'react';
import { TouchableHighlight, Animated, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

let { width: winWidth, height: winHeight } = Dimensions.get('window');

console.log(winWidth);
let buttonAnim = new Animated.Value(0);
let buttonAbsolutePosition = buttonAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] });
let buttonHeight = buttonAnim.interpolate({ inputRange: [0, 1], outputRange: [50, winHeight] });
let buttonWidth = buttonAnim.interpolate({ inputRange: [0, 1], outputRange: [50, winWidth] });
let buttonBR = buttonAnim.interpolate({ inputRange: [0, 1], outputRange: [25, 0] });
let buttonBC = buttonAnim.interpolate({ inputRange: [0, 1], outputRange: ["#8711EF", "#FFFF00"] });

let AnimatedTH = new Animated.createAnimatedComponent(TouchableHighlight);

export default class AddCardButton extends React.Component {
	constructor() {
		super();
		this.state = { plusOpacity: 1 };
	}
	changeDisplay = () => {
		this.setState({ plusOpacity: 0 });
	}
	addButtonPressed = () => {
		Animated.timing(buttonAnim, { toValue: 1, duration: 500 }).start();
		this.changeDisplay();
	}
	render() {
		return (
			<AnimatedTH underlayColor="#FFFF00" style={addButtonStyle} onPress={this.addButtonPressed}>
				<Feather color="#FFF" size={28} name="plus" style={{opacity: this.state.plusOpacity}}/>
			</AnimatedTH>
		);
	}

}

const addButtonStyle = {
	position: 'absolute',
	bottom: buttonAbsolutePosition,
	right: buttonAbsolutePosition,
	backgroundColor: buttonBC,
	borderRadius: buttonBR,
	width: buttonWidth,
	height: buttonHeight,
	alignItems: 'center',
	justifyContent: 'center',
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 2 },
	shadowOpacity: 0.8,
	shadowRadius: 2,
	elevation: 1,
}


