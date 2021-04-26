import { ActionTypes } from "./actionTypes";

const initialState = {
    gender: ""
}

export const AgeReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_GENDER:
            return state;
    
        default:
            return state;
    }
}