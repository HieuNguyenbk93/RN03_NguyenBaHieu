import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import Alto_icon from './image/Alto_icon.png';
import Alto_0 from './image/Alto_0.png';

const data = [
    {
        id: 0,
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        description:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
        age: '9+',
        rating: 4.4,
        preview: Alto_0,
        backgroundColor: '#824671CC',
    },
    {
        id: 0,
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        description:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
        age: '9+',
        rating: 4.4,
        preview: Alto_0,
        backgroundColor: '#96CC96',
    },
    {
        id: 0,
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        description:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
        age: '9+',
        rating: 4.4,
        preview: Alto_0,
        backgroundColor: '#8f8',
    }
]

export default class RenderList extends Component {

    renderList = () => {
        const res = data.map((game, index) => {
            return (
                <View key={index} style={[styles.infor, {backgroundColor: game.backgroundColor}]}>
                    <Image
                        style = {styles.icon}
                        source = {require('./image/Alto_icon.png')}
                    />
                    <View style={styles.content}>
                        <Text style={styles.title}>{game.title}</Text>
                        <Text>{game.subTitle}</Text>
                    </View>
                </View>
            );
        });
        return res;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    infor : {
        backgroundColor: data[0].backgroundColor,
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