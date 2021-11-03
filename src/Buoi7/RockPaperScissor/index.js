import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import {background, computer, paper, player, rock, scissor} from '../images';
import ButtonPlayer from './ButtonPlayer';
import PlayItem from './PlayerItem';
import SelectItem from './SelectItem';
import SelectContent from './SelectContent';
import { connect } from 'react-redux';
import { playAction } from '../redux/actions/gameAction';

class RockPaperScissor extends Component {

  onPlayPress = () => {
    this.props.play();
  };

  calResult = () => {
    const {playerSelect, computerSelect, times, scores} = this.state;
    let timesResult = times;
    let scoresResult = scores;
    switch (playerSelect.id) {
      case 'rock':
        switch (computerSelect.id) {
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
        switch (computerSelect.id) {
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
        switch (computerSelect.id) {
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

    this.setState({times: timesResult, scores: scoresResult});
  };

  render() {
    const {playerSelect, computerSelect, times, scores,} = this.props;
    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barStyle="light-content" />
          <View style={styles.playContainer}>
            <PlayItem selectImage={playerSelect.image} playerImage={player} />
            <PlayItem
              selectImage={computerSelect.image}
              playerImage={computer}
            />
          </View>
          <View style={styles.selectContainer}>
            <SelectContent />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Scores: {scores}</Text>
            <Text style={styles.infoText}>Times: {times}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonPlayer
              title="Play"
              onPress={this.onPlayPress}
              colors={['#f9f', '#ff0']}
            />
            <ButtonPlayer
              title="Reset"
              backgroundColor="#ff0"
              isLinear={true}
              colors={['#f9f', '#ff0']}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playerSelect: state.gameReducer.playerSelect,
    computerSelect: state.gameReducer.computerSelect,
    scores: state.gameReducer.scores,
    times: state.gameReducer.times,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    play: () => dispatch(playAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RockPaperScissor);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  safeAreaView: {
    flex: 1,
  },
  playContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  selectContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0fc',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
