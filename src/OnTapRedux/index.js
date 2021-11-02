import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {connect} from 'react-redux'
import InforContent from './InforContent';
import { countDownAction, countUpAction, updateUsernameAction } from './redux/action/countAction';

class OnTapRedux extends Component {

    // Cách 1 để dispatch 1 action trên store
    // onCountUpPress = () => {
    //     this.props.dispatch({type: 'COUNT_UP'});
    // }

    // onCountDownPress = () => {
    //     this.props.dispatch({type: 'COUNT_DOWN'})
    // }

    // Cách 2 ko gọi trực tiếp gọi qua mapDispatchToProps
    onCountUpPress = () => {
        this.props.countUp();
    }
    onCountDownPress = () => {
        this.props.countDown();
    }


    render() {
        console.log('Log props componnet sau khi connet redux:',this.props);
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text> Demo Redux Component </Text>
                <Text>Number: {this.props.number}</Text>
                
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <Button 
                        title='Count Up'
                        onPress = {this.onCountUpPress}
                    />
                    <View style={{marginHorizontal:10}}/>
                    <Button 
                        title='Count Down'
                        onPress = {this.onCountDownPress}
                    />
                </View>
                <View style={{marginVertical:10}}/>
                <InforContent />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state tren store:',state);
    return {number: state.count.number};
}

const mapDispatchToProps = (dispatch) => {
    console.log('dispatch tren store:', dispatch);
    return {
        countUp: () => dispatch(countUpAction()),
        countDown: () => dispatch(countDownAction()),
        updateUserName: (username) => 
            dispatch(updateUsernameAction(username)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnTapRedux);
