import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, FlatList } from 'react-native'
import { BackgroundView, IconButton } from './component'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

export default class ListProductScreen extends Component {
    state = {
        listCaregory: [],
    }

    componentDidMount() {
        axios({
            url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
            method: 'GET'
        }).then((result) => {
            console.log(result.data.content)
            this.setState({listCategory: result.data.content});
        })
        .catch(err => console.log(err))
    }

    render() {
        const {listCaregory} = this.state;
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <IconButton>
                            <Ionicons name='close' size={30} color="#fff"/>
                        </IconButton>
                        <IconButton>
                            <Feather name='sliders' size={30} color="#fff"/>
                        </IconButton>
                    </View>
                    <View style={styles.category}>
                    </View>
                    <FlatList
                        style={{height: 100, flexGrow: 0}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={listCaregory}
                        renderItem={({item})=> (
                            <Text style={{color:'#fff',backgroundColor:'blue'}}>
                                {item.category}
                            </Text>
                        )}
                    />
                </View>
            </BackgroundView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        
    },
    header: {
        height: 50,
        //backgroundColor: '#bfb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    category: {
        height: 50,
        //backgroundColor: '#bfb',
    },
})