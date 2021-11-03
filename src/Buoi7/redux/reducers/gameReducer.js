import { background, computer, paper, player, rock, scissor } from '../../images'
import { PLAY, SELECT } from '../actions/gameAction';

const initState = {
    playerSelect: {id:'scissor', image: scissor},
    computerSelect: {id:'paper', image: paper},
    listImage: [
        {id:'scissor', image: scissor},
        {id:'rock', image: rock},
        {id:'paper', image: paper},
    ],
    scores: 0,
    times: 9,
    selected: {id: 'scissor', image: scissor},
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case SELECT:
            return {
                ...state,
                playerSelect: action.payload,
                selected : action.payload
            };
        case PLAY:
            console.log('PLAY!>>>>>>>>>>');
            if (state.times <= 0) {
                Alert.alert('Game Alert', 'Game Over !!!', [
                  {text: 'cancel', onPress: () => Alert.alert('Cancel Pressed')},
                ]);
            } else {
                let computer = state.listImage[Math.floor(Math.random() * 3)];
                // let computerSelect;
                // const randomBotSelect = setInterval(() => {
                //     computerSelect = state.listImage[Math.floor(Math.random() * 3)];
                //     state.computerSelect = computerSelect;
                // }, 200);
            
                // setTimeout(() => {
                //     clearInterval(randomBotSelect);
                //     this.calResult();
                // }, 2000);
                return {
                    ...state,
                    computerSelect: computer,
                };
            }
            return {...state};
        default:
            return state;
    }
}

export default gameReducer;