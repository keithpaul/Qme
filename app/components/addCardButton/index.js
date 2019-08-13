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
let buttonBC = buttonAnim.interpolate({ inputRange: [0, 1], outputRange: ["#8711EF", "#231F40"] });

let AnimatedTH = new Animated.createAnimatedComponent(TouchableHighlight);

export default class AddCardButton extends React.Component {
	constructor() {
		super();
		this.state = { iconOpacity: 1 };
	}
	changeIconOpacity = (val) => {
		this.setState({ iconOpacity: val });
	}
	navigateToAddCardScreen = ()=> {
		this.props.navigation.navigate('CreateCard');
		setTimeout(()=>{
			this.changeIconOpacity(1);
			Animated.timing(buttonAnim, { toValue: 0, duration: 0 }).start();
		}, 400);
	}
	addButtonPressed = () => {
		Animated.timing(buttonAnim, { toValue: 1, duration: 500 }).start(this.navigateToAddCardScreen);
		this.changeIconOpacity(0);
	}
	render() {
		return (
			<AnimatedTH underlayColor="#231F40" style={addButtonStyle} onPress={this.addButtonPressed}>
				<Feather color="#FFF" size={28} name="plus" style={{opacity: this.state.iconOpacity}}/>
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
	shadowColor: 'rgba(0,0,0,0.3)',
	shadowOffset: { width: 3, height: 3 },
	shadowOpacity: 1,
	shadowRadius: 12,
	elevation: 12,
}


