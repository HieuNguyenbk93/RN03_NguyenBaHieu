import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'

export default class PeopleSuggest extends Component {
    
    render() {
        const {data} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image
                        style = {styles.imgaeStyle}
                        source = {data.link}
                    />
                    <View>
                        <Text style={styles.textName}>{data.name}</Text>
                        <Text>{data.numofsamefriend} bạn chung</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => this.onPressFriend(this.props.data)} >
                        <Text style={styles.textbutton}>Kết bạn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9C9FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgaeStyle : {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginRight: 10,
    },
    textName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    textFriend: {
        
    },
    button: {
        backgroundColor: '#3D85C6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    },
    textbutton: {
        fontWeight: '700'
    }
})

