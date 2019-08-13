import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './app/screens/homeScreen';
import CreateCardScreen from './app/screens/createCardScreen';


export default class Navigation extends React.Component {
    render(){
        return <StackNavContainer />;
    }
}

let StackNav = createStackNavigator({
    Home : {screen : HomeScreen },
    CreateCard : {screen : CreateCardScreen},
}, {
    initialRouteName: "Home",
    transitionConfig: () => ({
        transitionSpec: { duration: 0 },
    })
});

let StackNavContainer = createAppContainer(StackNav);