import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Alto_icon from '../../Buoi3/RenderList/image/Alto_icon.png';
import Alto_0 from '../../Buoi3/RenderList/image/Alto_0.png';

export default class GameInfor extends Component {
    render() {
        const {game} = this.props;
        return (
            <View style={[styles.infor, {backgroundColor: game.backgroundColor}]}>
                <Image
                    style = {styles.icon}
                    source = {Alto_0}
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{game.title}</Text>
                    <Text>{game.subTitle}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infor : {
        backgroundColor: '#824671CC',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        
        marginVertical:10,
        flexDirection:'row',
        justifyContent: 'space-around',
        width: '90%'
    },
    icon : {
        height: 60,
        width: 60
    },
    content : {
        width: '70%'
    },
    title: {
        fontSize: 20
    }
})