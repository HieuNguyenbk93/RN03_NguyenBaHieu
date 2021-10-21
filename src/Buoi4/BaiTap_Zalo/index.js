import React, { Component } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import PeopleSearch from './PeopleSearch';
import {blackwindow, captain, flash, ironman, spideman, strange, suppergirl, wanda, wonderwoman, yasuo} from './Image';
import PeopleSuggest from './PeopleSuggest';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from  'react-native-vector-icons/Ionicons';

export default class BtZalo extends Component {

    dataSearch = [
        {
            name: 'Wanda',
            link: wanda,
        },
        {
            name: 'Yasuo',
            link: yasuo,
        },
        {
            name: 'Captain',
            link: captain,
        },
        {
            name: 'Flash',
            link: flash
        },
        {
            name: 'Wanda',
            link: wanda,
        },
        {
            name: 'Yasuo',
            link: yasuo,
        },
        {
            name: 'Captain',
            link: captain,
        },
        {
            name: 'Flash',
            link: flash
        },
    ];
    dataSuggest = [
        {
            name: 'Strange',
            link: strange,
            numofsamefriend: 15,
            friendstatus: 0,
        },
        {
            name: 'Kara',
            link: suppergirl,
            numofsamefriend: 15,
            friendstatus: 0,
        },
        {
            name: 'Diana',
            link: wonderwoman,
            numofsamefriend: 15,
            friendstatus: 0,
        },
        {
            name: 'Natasha',
            link: blackwindow,
            numofsamefriend: 15,
            friendstatus: 0,
        },
        {
            name: 'Spiderman',
            link: spideman,
            numofsamefriend: 15,
            friendstatus: 0,
        },
        {
            name: 'Ironman',
            link: ironman,
            numofsamefriend: 15,
            friendstatus: 0,
        },
    ];

    // renderListSearch = () => {
    //     const res = this.dataSearch.map((dtSearch, index)=> {
    //         return (
    //             <PeopleSearch
    //                 key = {index}
    //                 data = {dtSearch}
    //             />
    //         )
    //     });
    //     return res;
    // }

    renderListSearch = ({item}) => {
        return (
            <PeopleSearch 
                data = {item}
            />
        )
    }

    renderListSuggest = ({item}) => {
        return (
            <PeopleSuggest
                data = {item}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.hearder}>
                    <Entypo name="back-in-time" size={20} />
                    <Text style={styles.textContent}> Danh sách tìm kiếm gần đây </Text>
                </View>
                <FlatList
                    contentContainerStyle = {styles.listSearch}
                    style = {{flexGrow: 0}}
                    data = {this.dataSearch}
                    renderItem = {this.renderListSearch}
                    horizontal={true}
                />
                <View style={styles.hearder}>
                    <Ionicons name="ios-people" size={20} />
                    <Text style={styles.textContent}> Gợi ý kết bạn</Text>
                </View>
                <FlatList
                    
                    contentContainerStyle = {styles.listSuggest}
                    data = {this.dataSuggest}
                    renderItem = {this.renderListSuggest}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    hearder: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContent: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 5
    },
    listSearch: {
        marginVertical: 10,
        paddingVertical: 10
    },
    listSuggest: {
        
    }
})

