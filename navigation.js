import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './app/screens/homeScreen';


export default class Navigation extends React.Component {
    render(){
        return <StackNavContainer />;
    }
}

let StackNav = createStackNavigator({
    Home : {screen : HomeScreen },
}, {
    header:null
});

let StackNavContainer = createAppContainer(StackNav);