import { UPDATE_USERNAME } from "../action/countAction";

const initState = {
    username: '',
    address: '',
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.playload
            }
        default:
            return state;
    }
}

export default userReducer;