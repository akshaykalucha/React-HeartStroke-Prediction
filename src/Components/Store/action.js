import { ActionTypes } from './actionTypes';

export const setAge = (Age) => {
    return{
        type: ActionTypes.SET_AGE,
        payload: Age
    };
}; 

export const setGender = (sex) => {
    return{
        type: ActionTypes.SET_GENDER,
        payload: sex
    };
}; 