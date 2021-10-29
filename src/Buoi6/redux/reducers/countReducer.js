import { COUNT_DOWN, COUNT_UP } from "../actions/countAction";

const initState = {
    number: 0,
    test: 'testState',
}

// initState chỉ dùng để khởi tạo, gắn state cho 1 object thì giá trị sẽ trở đến ô nhớ
// của initState. Thay đổi vùng nhớ thì compenet mới render lại
const countReducer = (state = initState, action) => {
    console.log('Action: ',action);
    if (action.type === COUNT_UP) {
        return {
            ...state,
            number: state.number + 1,
        };
    }
    if (action.type === COUNT_DOWN){
        return {
            ...state,
            number: state.number -1,
        };
    }
    return state;
};

export default countReducer;