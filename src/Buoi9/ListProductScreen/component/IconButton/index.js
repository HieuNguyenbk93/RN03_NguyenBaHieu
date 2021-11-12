import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default class IconButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View>{this.props.children}</View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    }
})

