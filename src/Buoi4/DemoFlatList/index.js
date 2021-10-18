import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native'
import GameInfor from './GameInfo';
import Alto_icon from '../../Buoi3/RenderList/image/Alto_icon.png';
import Alto_0 from '../../Buoi3/RenderList/image/Alto_0.png';
import { thisExpression } from '@babel/types';

export default class DemoFlatList extends Component {

    data = [
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

    renderList = () => {
        
        const res = this.data.map((game, index) => {
            return (
                <GameInfor 
                    key = {index}
                    backgroundColor = {game.backgroundColor}
                    title = {game.title}
                    subTitle = {game.subTitle}
                />
            );
        });
        return res;
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <ScrollView 
                    style={styles.scrollView1 }
                    contentContainerStyle={styles.scrollView} >
                    {this.renderList()}
                </ScrollView> */}
                <FlatList
                    contentContainerStyle={styles.scrollView} 
                    data = {this.data}
                    renderItem = {({item}) => <GameInfor game={item} /> }
                    keyExtractor = {(item, index) => `${item.title}_${index}`}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
    },
    scrollView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView1: {
        backgroundColor: 'gray',
    },
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

