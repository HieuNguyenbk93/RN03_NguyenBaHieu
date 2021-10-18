import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Like from './emoji/like.png';
import Love from './emoji/love.png';
import Haha from './emoji/haha.png';
import Care from './emoji/care.png';
import Sad from './emoji/sad.png';
import Angry from './emoji/angry.png';
import Icon from './Icon';

const data = [Like, Love, Haha, Care, Sad, Angry]

export default class BTBindding extends Component {

    state = {
        iconShow: Like
    }

    clickIcon = (iconVar) => {
        this.setState({
            iconShow : iconVar
        })
    }

    renderList = () => {
        const res = data.map((iconitem, index) => {
            return (
                <View key={index}>
                    <TouchableOpacity onPress={() => {this.clickIcon(iconitem)}}>
                        <Image
                            style = {styles.icon}
                            source = {iconitem}
                        />
                    </TouchableOpacity>
                </View>
            )
        });
        return res;
    }

    renderEmoji = () => {
        return data.map( (emoji, index) => (
            <Icon
                selectedEmoji = {emoji === this.state.iconShow}
                key={index} 
                iconSoure={emoji} 
                onPress={() => this.clickIcon(emoji)} 
            /> 
        ));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mycontent}> Bạn đang cảm thấy như thế nào </Text>
                <Image style={styles.iconLarge} source={this.state.iconShow} />
                
                <View style={styles.frameIcon}>
                    {this.renderList()}
                </View>
                <View style={styles.frameIcon}>
                    {this.renderEmoji()}
                </View>
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
    mycontent: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    iconLarge: {
        width: 200,
        height: 200,
    },
    frameIcon: {
        flexDirection: 'row',
        marginVertical: 20
    },
    icon: {
        width: 50,
        height: 50,
        marginHorizontal: 5
    }
})
