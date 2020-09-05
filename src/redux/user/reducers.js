import { CREATE_USER, REQUEST_CURRENT_USER, RETRIEVE_CURRENT_USER, RETRIEVE_ERROR } from './actionTypes.js';

let initialState = {
    type: REQUEST_CURRENT_USER,
    data: null,
    error: null,
    isFetching: false,
}


export function user(state = initialState, action){
    switch (action.type){
        case REQUEST_CURRENT_USER: return {...state, isFetching: true}
        case RETRIEVE_CURRENT_USER: return {...state, data: action.data, isFetching: false,}
        case RETRIEVE_ERROR: return {...state, error: action.error  }
        default: return state
    }   
}
