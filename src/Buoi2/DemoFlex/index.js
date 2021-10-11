import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DemoFlex extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{backgroundColor: '#96CC96', flex: 1, borderBottomEndRadius: 20, borderBottomStartRadius:20, marginBottom:20}}>
                    <View style={{backgroundColor: '#F4B940', flex:1, marginTop:30, marginBottom: 30, borderRadius:20,marginHorizontal:20,}}/>
                    <View style={{backgroundColor: '#F4B940', flex:1, marginTop: 30, marginBottom:30, borderRadius:20,marginHorizontal:20,}}/>
                </View>
                <View style={{backgroundColor: '#C9C9FF', flex: 1, borderTopLeftRadius: 20,borderTopRightRadius: 20,}} >
                    <View style={{flex: 1,}}>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{flex:1,backgroundColor:'#3D85C6', borderRadius:20, margin:20,}}/>
                            <View style={{flex:1,backgroundColor:'#3D85C6', borderRadius:20, margin:20,}}/> 
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{flex:1,backgroundColor:'#3D85C6', borderRadius:20, margin:20,}}/>
                            <View style={{flex:1,backgroundColor:'#3D85C6', borderRadius:20, margin:20,}}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
