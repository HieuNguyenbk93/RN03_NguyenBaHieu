import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class SelectItem extends Component {
    render() {
        const {sourceImage} = this.props;
        return (
            <View style = {styles.container}>
                <Image 
                    style = {styles.image}
                    source = {sourceImage}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        backgroundColor: 'black',
        borderColor: '#ff0',
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
    },
    image: {
        width: 50,
        height: 50,
    }
})

