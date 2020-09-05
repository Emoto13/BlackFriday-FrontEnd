import { REQUEST_TOKEN, RECEIVE_TOKEN, ERROR_TOKEN } from "./actionTypes";

let initialState = {
    type: REQUEST_TOKEN,
    access: null,
    refresh: null,
    error: null,
    isFetching: false,

}


export function token(state = initialState, action){
    switch (action.type){
        case REQUEST_TOKEN: return {...state, isFetching: true }
        case RECEIVE_TOKEN: return {...state, isFetching: false, access: action.access, refresh: action.refresh}
        case ERROR_TOKEN: return {...state, error: action.error}
        default: return state
    }   
}
