import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { updateUsernameAction } from './redux/action/countAction';

class InforContent extends Component {

    onUpdateUserName = (username) => {
        this.props.updateUserName(username);
    }

    render() {
        return (
            <View >
                <Text>Test: {this.props.username}</Text>
                <Button 
                    title='Update Name'
                    onPress = {() => {this.onUpdateUserName('Hieu')}}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state tren store:',state);
    return {
        'username': state.user.username,
        'address': state.user.address,
    };
}

const mapDispatchToProps = (dispatch) => {
    console.log('dispatch tren store:', dispatch);
    return {
        updateUserName: (username) => 
            dispatch(updateUsernameAction(username)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InforContent)