import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Like from './emoji/like.png';
import Love from './emoji/love.png';
import Haha from './emoji/haha.png';
import Care from './emoji/care.png';
import Sad from './emoji/sad.png';
import Angry from './emoji/angry.png';

export default class Icon extends Component {
    render() {
        const {onPress, iconSoure, selectedEmoji} = this.props;
        return (
            <View>
                <TouchableOpacity onPress={onPress}>
                    <Image
                        style = {[styles.icon, selectedEmoji && styles.selectedIcon]}
                        source = {iconSoure}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
        borderRadius: 25
    },
    selectedIcon: {
        borderColor: 'gray',
        borderWidth: 5,
    }
})
