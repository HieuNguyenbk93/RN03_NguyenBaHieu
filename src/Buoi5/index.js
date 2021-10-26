import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, StatusBar, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import ButtonPlayer from './ButtonPlayer'
import { background, computer, paper, player, rock, scissor } from './Image'
import PlayerItem from './PlayerItem'
import SelectItem from './SelectItem'

export default class Buoi5 extends Component {
    state = {
        playerSelectImage: {id:'scissor', image: scissor},
        computerSelectImage: {id:'paper', image: paper},
        listImage: [
            {id:'scissor', image: scissor},
            {id:'rock', image: rock},
            {id:'paper', image: paper},
        ],
        scores: 0,
        times: 0,
    }

    selectItemFun = (item) => {
        this.setState({playerSelectImage:item});
    }

    randomItemComputer = () => {
        if (this.state.times <= 0){
            Alert.alert(
                "Alert Title",
                "My Alert Msg",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
        else {
            const randomImage = setInterval(() => {
                const computerSelectImage = this.state.listImage[Math.floor(Math.random() * 3)];
                this.setState({
                    computerSelectImage:computerSelectImage,
                });
            }, 200);
    
            setTimeout(() => {
                clearInterval(randomImage);
                this.calResult();
            }, 2000);
        }
    }

    calResult = () => {
        const {playerSelectImage, computerSelectImage, times, scores} = this.state;
        let timesResult = times;
        let scoresResult = scores;
        switch (playerSelectImage.id) {
            case 'rock':
                switch (computerSelectImage.id) {
                    case 'scissor':
                        scoresResult = scoresResult + 1;
                        timesResult = timesResult + 1;
                        break;
                    case 'paper':
                        timesResult = timesResult - 1;
                        break;
                    default:
                        break;
                }
                break;
            case 'paper':
                switch (computerSelectImage.id) {
                    case 'rock':
                        scoresResult = scoresResult + 1;
                        timesResult = timesResult + 1;
                        break;
                    case 'scissor':
                        timesResult = timesResult - 1;
                        break;
                    default:
                        break;
                }
                break;
            default:
                switch (computerSelectImage.id) {
                    case 'paper':
                        scoresResult = scoresResult + 1;
                        timesResult = timesResult + 1;
                        break;
                    case 'rock':
                        timesResult = timesResult - 1;
                        break;
                    default:
                        break;
                }
                break;
        }
        console.log(timesResult, scoresResult);
        this.setState({
            times: timesResult,
            scores: scoresResult,
        });
    }

    onPressReset() {

    }

    render() {
        return (
            <ImageBackground style={styles.container} source={background}>
                <SafeAreaView style={styles.safeAreaView}>
                <StatusBar  barStyle="light-content" />
                <View style={styles.overlay}>
                    <View style={styles.playContainer}>
                        <PlayerItem 
                            selectImage = {this.state.playerSelectImage.image}
                            playerImage = {player}
                        />
                        <PlayerItem 
                            selectImage = {this.state.computerSelectImage.image}
                            playerImage = {computer}
                        />
                    </View>
                    <View style={styles.selectContainer}>
                        <SelectItem sourceImage={paper} onPress={()=>{this.selectItemFun({id:'paper', image: paper})}}/>
                        <SelectItem sourceImage={rock} onPress={()=>{this.selectItemFun({id:'rock', image: rock})}}/>
                        <SelectItem sourceImage={scissor} onPress={()=>{this.selectItemFun({id:'scissor', image: scissor})}}/>
                    </View>
                    <View style={styles.inforContainer}>
                        <Text style={styles.score}>Score: {this.state.scores}</Text>
                        <Text style={styles.score}>Times: {this.state.times}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonPlayer
                            content = {'Play'}
                            color = {'#f9f'}
                            onPress = {this.randomItemComputer}
                        />
                        <ButtonPlayer
                            content = {'Reset'}
                            color = {'orange'}
                            onPress = {this.onPressReset()}
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
