import { ActionTypes } from './actionTypes';

export const setAge = () => {
    return{
        type: ActionTypes.SET_AGE,
    };
}; 

export const setGender = (sex) => {
    return{
        type: ActionTypes.SET_GENDER,
        payload: sex
    };
}; 