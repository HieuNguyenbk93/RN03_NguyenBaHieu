import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';

export default class DemoStyleSheet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.boxStyle, styles.boxPurple]}>
                    <Text style={styles.textStyle}>Purple: #C9C9FF</Text>
                </View>
                <View style={[styles.boxStyle, styles.boxBlue]}>
                    <Text style={styles.textStyle}>Blue: #3D85C6</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxStyle : {
        backgroundColor: '#F4B940',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        flex: 1,
    },
    boxBlue : {
        backgroundColor: '#3D85C6',
    },
    boxGreen : {
        backgroundColor: '#96CC96',
    },
    boxYellow : {
        backgroundColor: '#F4B940',
    },
    boxPurple : {
        backgroundColor: '#C9C9FF',
    },
    textStyle : {
        fontSize: 25,
    },
    container: {
        flex: 1,
    },
    topContent: {
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "space-around",
    },
    bottomContent: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
});