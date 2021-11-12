import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, SafeAreaView } from 'react-native'

export default class BackgroundView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={StyleSheet.absoluteFill}>
                    <View style={styles.header}/>
                    <View style={styles.content}>
                        <View style={styles.insideContent}/>
                    </View>
                </View>
                <SafeAreaView style={{flex:1}}>
                    {this.props.children}
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: 'black',
        borderBottomLeftRadius: 100,
    },
    content: {
        flex: 2,
        backgroundColor: 'black',
    },
    insideContent: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 80
    }
})
