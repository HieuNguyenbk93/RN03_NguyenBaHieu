import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'

export default class BinddingData extends Component {
    

    state = {
        isLogin : false,
        name : 'React native',
        address : 'Bắc Ninh',
    }

    renderName() {
        if (this.state.isLogin) {
            return (
                <Text> {this.state.name} </Text>
            )
        }
    }

    onPressButton = (button) => {
        console.log(button, ': Press.....');
        // this.setState({isLogin:true}, ()=> {
        //     console.log(this.state.isLogin);
        // });
        this.setState({isLogin:true});
    }

    render() {
        console.log('RENDER');
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
                {this.renderName()}
                
                <TouchableOpacity style={styles.btn} 
                    onPress={()=> {this.onPressButton('Opacity')}} >
                    <Text>Sign in</Text>
                </TouchableOpacity>
                <TouchableHighlight 
                    style={[styles.btn, styles.btnHighlight]}
                    onPress= {() => {this.onPressButton('Highlight')}}
                    underlayColor = "red">
                        <>
                            <Text>TouchableHighlight</Text>
                        </>
                </TouchableHighlight>
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
    btn : {
        backgroundColor: '#bfb',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    btnHighlight : {
        backgroundColor: '#fbb'
    }
})
