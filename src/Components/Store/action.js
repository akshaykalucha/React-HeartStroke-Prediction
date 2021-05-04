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

export const setGender = (sex) => {
    return{
        type: ActionTypes.SET_GENDER,
        payload: sex
    };
}; 

export const setAnemia = (val) => {
    return{
        type: ActionTypes.SET_ANEMIA,
        payload: val
    };
}; 


export const setCreatine = (creatine) => {
    return{
        type: ActionTypes.SET_CREATRINE,
        payload: creatine
    };
}; 

export const setCustomCreatine = (num) => {
    return{
        type: ActionTypes.SET_CUSTOM_CREATRINE,
        payload: num
    };
}; 

export const setDiabetes = (val) => {
    return {
        type: ActionTypes.SET_DIABETES,
        payload: val
    }
}

export const setEjection = (ejection) => {
    return{
        type: ActionTypes.SET_EJECTION,
        payload: ejection
    };
}; 

export const setCustomEjection = (num) => {
    return{
        type: ActionTypes.SET_CUSTOM_EJECTION,
        payload: num
    };
};

export const setHighBP = (val) => {
    return{
        type: ActionTypes.SET_BP,
        payload: val
    };
}; 