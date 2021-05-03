import { ActionTypes } from './actionTypes';

export const setAge = (Age) => {
    return{
        type: ActionTypes.SET_AGE,
        payload: Age
    };
}; 

export const setCustomAge = (num) => {
    return{
        type: ActionTypes.SET_CUSTOM_AGE,
        payload: num
    };
}; 

export const setGender = () => {
    return{
        type: ActionTypes.SET_GENDER,
        // payload: sex
    };
}; 