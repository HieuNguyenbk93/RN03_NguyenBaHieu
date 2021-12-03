import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginScreen from './LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './SignupScreen';
import HomeScreen from './Home';

const Stack = createNativeStackNavigator();
export const ScreenLayout = {
    Home: 'Home',
    Signup: 'Signup'
}

export default class RootScreen extends Component {
    // state = {
    //     showLogin: true
    // }

    // navigateToLoginScreen = () => this.setState({showLogin: true});
    // navigateToOnboardScreen = () => this.setState({showLogin: false});

    // render() {
    //     return <>{this.state.showLogin ? <LoginScreen/> : <OnBoardScreen />}</>
    // }
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name={ScreenLayout.Home} component={HomeScreen}
                />
                <Stack.Screen name={ScreenLayout.Signup} component={SignupScreen} 
                    options={{headerShown: false}}
                />
                
            </Stack.Navigator>
        )
    }
}
