import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { countUpAction } from '../redux/actions/countAction';

class DemoRedux extends Component {

    onUpPress = () => {
        // this.props.dispatch({type:'COUNT_UP'});
        // dung dispatch
        this.props.countUp();
    }

    onDownPress = () => {
        // this.props.dispatch({type:'COUNT_DOWN'});
        this.props.countDown();
    }

    render() {
        console.log(this.props);
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text> Demo Redux Component </Text>
                <Text>Number: {this.props.number}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button 
                        title='Count Up'
                        onPress = {this.onUpPress}
                    />
                    <View style={{marginHorizontal:10}}/>
                    <Button 
                        title='Count Down'
                        onPress = {this.onDownPress}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        number: state.number,
        test: state.test,
    };
}

const mapDispatchTpProps = (dispatch) => {
    return {
        countUp: () => {
            // const action = {type:"COUNT_UP"};
            dispatch(countUpAction());
        },
        countDown: () => {
            const action = {type: "COUNT_DOWN"};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchTpProps)(DemoRedux);