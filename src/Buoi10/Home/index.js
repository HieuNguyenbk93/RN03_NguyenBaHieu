import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> HomeScreen </Text>
                <Button 
                    title="Signup"
                    onPress = { ()=> {this.props.navigation.navigate('Signup')}}
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

