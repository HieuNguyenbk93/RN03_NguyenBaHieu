import React, { Component } from 'react'
import { Button, Text, View , StyleSheet} from 'react-native'
import { ScreenLayout } from '..';


export default class SignupScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text> SignupScreen </Text>
                <Button 
                    title = "Home"
                    onPress = { ()=> {navigation.navigate(ScreenLayout.Home)} }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

