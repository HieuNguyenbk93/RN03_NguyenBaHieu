import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class ButtonPlayer extends Component {
    render() {
        const {content, color} = this.props;
        return (
            
                <TouchableOpacity style={[styles.container, {backgroundColor: color}]}>
                    <Text style={styles.txt}> {content} </Text>
                </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 24,
        color: 'white',
    }
})

