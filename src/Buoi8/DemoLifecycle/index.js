import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Child from './Child';

export default class DemoLifecycle extends Component {

    constructor(){
        super();
        this.state = {
            number: 0,
        }
        console.log('constructor run');
    }

    static getDerivedStateFromProps(props, state){
        // ko có con trở this
        console.log('getDrivedStateFromProps run');

        // trả về state
        return state;
    }

    // nếu return flase thì sẽ ko render, mặc định khi update sẽ return true
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate RUN');
        console.log(this.state);
        return true;
    }

    componentDidUpdate(){
        console.log('componentDidUpdate RUN');
    }

    render() {
        console.log('render component');
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
                
                <Button
                    title = "Count up"
                    onPress = {()=> this.setState({number: this.state.number + 1})} 
                />

                <Child number={this.state.number} />
            </View>
        )
    }

    // Chạy sau khi render, thường gọi API ở đây để load trước giao diện
    componentDidMount() {
        console.log('componentDidMount run');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
