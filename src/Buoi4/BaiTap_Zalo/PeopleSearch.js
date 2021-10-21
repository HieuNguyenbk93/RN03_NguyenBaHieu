import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class PeopleSearch extends Component {
    render() {
        const {data} = this.props;
        return (
            <View style={styles.container}>
                <Image
                    style = {styles.imageStyle}
                    source = {data.link}
                />
                <Text style={styles.nameStyle}>{data.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    imageStyle: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    nameStyle: {
        fontWeight: 'bold',
        marginTop: 5,
    }
})
