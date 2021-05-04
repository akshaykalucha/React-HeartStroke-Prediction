import { ActionTypes } from "./actionTypes";

const initialState = {
    UserVals: {
        age: 1,
        gender: {
            val: "Male",
            male: true,
            female: false
        },
        anemia: {
            val: "Yes",
            yes: true,
            no: false
        },
        creatine: 1,
        diabetes: "Yes",
        ejection: 1,
        highBP: {
            val: "Yes",
            yes: true,
            no: false
        },
        platlets: 0.00,
        serum: 0.00,
        serumS: 1,
        smoking: {
            yes: true,
            no: false
        },
        time: 1
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
                        female: !state.UserVals.gender.female,
                        val: payload
                    }
                }
            };
        case ActionTypes.SET_ANEMIA:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    anemia: {
                        ...state.UserVals.anemia,
                        val: payload,
                        yes: !state.UserVals.anemia.yes,
                        no: !state.UserVals.anemia.no
                    }
                }
            }

        case ActionTypes.SET_CREATRINE:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    creatine: parseInt(state.UserVals.creatine) + payload
                }
            };
        case ActionTypes.SET_CUSTOM_CREATRINE:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    creatine: payload
                }
            };
        case ActionTypes.SET_DIABETES:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    diabetes: payload
                }
            }
    
        case ActionTypes.SET_EJECTION:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    ejection: parseInt(state.UserVals.ejection) + payload
                }
            };
        case ActionTypes.SET_CUSTOM_EJECTION:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    ejection: payload
                }
            };
        case ActionTypes.SET_BP:
            return {
                ...state,
                UserVals: {
                    ...state.UserVals,
                    highBP: {
                        ...state.UserVals.highBP,
                        val: payload,
                        yes: !state.UserVals.highBP.yes,
                        no: !state.UserVals.highBP.no
                    }
                }
            }

        default:
            return state;
    };
};