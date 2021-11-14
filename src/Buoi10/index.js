import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginScreen from './LoginScreen'
import OnBoardScreen from './OnBoardScreen'

export default class RootScreen extends Component {
    state = {
        showLogin: true
    }

    navigateToLoginScreen = () => this.setState({showLogin: true});
    navigateToOnboardScreen = () => this.setState({showLogin: false});

    render() {
        return <>{this.state.showLogin ? <LoginScreen/> : <OnBoardScreen />}</>
    }
}
