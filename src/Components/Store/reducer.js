import { ActionTypes } from "./actionTypes";

const initialState = {
    UserVals: {
        age: "",
        gender: ""
    },
};

const UserReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_GENDER:
            return state;
        
        case ActionTypes.SET_AGE:
            return state;
    
        default:
            return state;
    };
};

export default UserReducer