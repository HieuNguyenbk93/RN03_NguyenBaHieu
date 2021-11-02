import { COUNT_DOWN, COUNT_UP } from "../action/countAction";

const initState = {
    number: 10,
};

const countReducer = (state = initState, action) => {
    console.log('ACTION:',action);
    switch (action.type) {
        case COUNT_UP:
            return {
                ...state,
                number: state.number +1,
            }
        case COUNT_DOWN:
            return {
                ...state,
                number: state.number -1,
            }
        default:
            return state;
    }
}

export default countReducer;