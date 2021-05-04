import { ActionTypes } from "./actionTypes";

const initialState = {
    UserVals: {
        age: 1,
        gender: {
            male: true,
            female: false
        },
        anemia: {
            yes: true,
            no: false
        },
        creatine: 1,
        diabetes: "No",
        ejection: 1,
        highBP: {
            yes: true,
            no: false
        },
        platlets: 1,
        serum: 1,
        serumS: 1
    },
};

export const UserReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case ActionTypes.SET_AGE:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    age: parseInt(state.UserVals.age) + payload
                }
            };
        case ActionTypes.SET_CUSTOM_AGE:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    age: payload
                }
            };
        case ActionTypes.SET_GENDER:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    gender: {
                        ...state.UserVals.gender,
                        male: !state.UserVals.gender.male,
                        female: !state.UserVals.gender.female
                    }
                }
            };
    
        default:
            return state;
    };
};