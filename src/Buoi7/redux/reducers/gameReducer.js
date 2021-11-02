import { background, computer, paper, player, rock, scissor } from '../../images'

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
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default gameReducer;