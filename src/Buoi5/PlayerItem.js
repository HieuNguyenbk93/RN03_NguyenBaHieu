import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default class PlayerItem extends Component {
    render() {
        const { selectImage, playerImage} = this.props
        return (
            <View>
                <Image 
                    style={[styles.nomarlImage, styles.frameImage]}
                    source={selectImage}
                />
                <View style={styles.triagle}/>
                <Image 
                    style={[styles.nomarlImage, styles.playerImage]}
                    source={playerImage}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nomarlImage: {
        height: 100,
        width: 100,
    },
    playerImage: {
        marginTop:20
    },
    frameImage: {
        borderColor: '#ff0',
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    triagle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'yellow',
        position: 'absolute',
        top: 100,
        left: 40,
    },
})

