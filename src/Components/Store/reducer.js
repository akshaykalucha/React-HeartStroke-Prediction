import { ActionTypes } from "./actionTypes";

const initialState = {
    UserVals: {
        age: 0,
        gender: ""
    },
};

export const UserReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_GENDER:
            return state;
        
        case ActionTypes.SET_AGE:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    age: state.UserVals.age + 1
                }
            };
    
        default:
            return state;
    };
};