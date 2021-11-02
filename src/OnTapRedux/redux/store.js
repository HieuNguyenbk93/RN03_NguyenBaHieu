import { combineReducers, createStore } from "redux";
import countReducer from "./reducer/countReducer";
import userReducer from "./reducer/userReducer";

export const store = createStore(combineReducers({
    count: countReducer,
    user: userReducer,
}));