import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'

export default class DemoImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
                <Image 
                    style={styles.myImage}
                    source={require('./pidgey.jpg')} 
                />
                <TextInput
                    placeholder="Type..."
                    keyboardType="number-pad"
                    style={styles.myInput} 
                />
                <Image style={styles.myImage}
                    source={{
                        uri: 'https://img.pokemondb.net/artwork/heracross.jpg'
                    }}
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
        padding: 20,
    },
    myImage: {
        width: 250,
        height: 250,
    },
    myInput: {
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#3D85C6',
        width: '100%',
        margin: 10,
    }
});
