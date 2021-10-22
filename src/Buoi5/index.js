import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, StatusBar, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import ButtonPlayer from './ButtonPlayer'
import { background, computer, paper, player, rock, scissor } from './Image'
import PlayerItem from './PlayerItem'
import SelectItem from './SelectItem'

export default class Buoi5 extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={background}>
                <SafeAreaView style={styles.safeAreaView}>
                <StatusBar  barStyle="light-content" />
                <View style={styles.overlay}>
                    <View style={styles.playContainer}>
                        <PlayerItem 
                            selectImage = {rock}
                            playerImage = {player}
                        />
                        <PlayerItem 
                            selectImage = {paper}
                            playerImage = {computer}
                        />
                    </View>
                    <View style={styles.selectContainer}>
                        <SelectItem sourceImage={paper}/>
                        <SelectItem sourceImage={rock}/>
                        <SelectItem sourceImage={scissor}/>
                    </View>
                    <View style={styles.inforContainer}>
                        <Text style={styles.score}>Score: 0</Text>
                        <Text style={styles.score}>Times: 9</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonPlayer
                            content = {'Play'}
                            color = {'#f9f'}
                        />
                        <ButtonPlayer
                            content = {'Back'}
                            color = {'orange'}
                        />
                    </View>
                </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1
    },
    playContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    nomarlImage: {
        height: 100,
        width: 100,
    },
    playerImage: {
        marginTop:20
    },
    frameImage: {
        borderColor: '#ff0',
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    triagle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'yellow',
        position: 'absolute',
        top: 100,
        left: 40,
    },
    selectContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    inforContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    score: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'green',
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
    },
    safeAreaView: {
        flex: 1,
    }
})
