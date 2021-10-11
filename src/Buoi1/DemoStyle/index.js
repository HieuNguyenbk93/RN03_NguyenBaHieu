import React, {Component} from 'react';
import {View, Text} from "react-native";

class App extends Component {
    render() {
        return(
            <View style={{padding: 10}}>
                <View style={boxStyle}>
                    <Text style={textStyle}>Purple: #C9C9FF</Text>
                </View>
                <View style={boxStyle}>
                    <Text style={textStyle}>Blue: #3D85C6</Text>
                </View>
                <View style={boxStyle}>
                    <Text style={textStyle}>Green: #96CC96</Text>
                </View>
                <View style={boxStyle}>
                    <Text style={textStyle}>Yellow: #F4B940</Text>
                </View>
                <View style={boxStyle}>
                    <Text style={textStyle}>123</Text>
                </View>
            </View>
        );
    }
}

export default App;

const boxStyle = {
    backgroundColor: '#F4B940',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
};
const textStyle = {
    fontSize: 25
};