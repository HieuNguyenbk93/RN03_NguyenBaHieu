import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'

export default class Child extends Component {

    constructor(props){
        super(props);
        this.state = {
            numberChild: 3,
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('--getDerivedStateFromProps run');
        return (state = props);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('--prev Props',prevProps);
        console.log('--componentDidUpdate child RUN')
    }

    render() {
        console.log('--render CHILD component RUN');
        return (
            <>
                <Text> Child Component </Text>
                <Text>Number: {this.props.number}</Text>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
