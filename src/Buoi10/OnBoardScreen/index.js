import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Text } from 'react-native';
// import { Text } from './components'

export default class OnBoardScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <View style={styles.banerContainer}></View>
                <View style={styles.inforContainer}>
                    <Text style={styles.headerText}>Welcome shoes App</Text>
                    <Text style={styles.headerText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, vitae. Eos explicabo repellendus a ut? Quaerat reprehenderit ipsam harum iure temporibus, unde saepe libero deserunt, sit, officia officiis nulla cum.</Text>
                </View>
                <View style={styles.buttonContainer}></View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    banerContainer: {
        flex: 2,
    },
    inforContainer: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1
    },
    headerText: {
        fontSize: 30,

    },
    descreptionText: {

    }
})

