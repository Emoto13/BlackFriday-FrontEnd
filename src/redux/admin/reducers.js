import { 
    REQUEST_ORDERS, 
    RETRIEVE_ORDERS,
    RETRIEVE_ERROR,
    CLEAR_ORDERS, 
 } from './actionTypes.js'

let initialState = {
    type: REQUEST_ORDERS,
    data: null, 
    error:null,
    isFetching: false
}

export function adminOrders(state=initialState, action){
    switch (action.type){
        case REQUEST_ORDERS: return {...state, isFetching: true}
        case RETRIEVE_ORDERS: return {...state, data: action.data, isFetching: false}
        case RETRIEVE_ERROR: return {...state, error: action.error }
        case CLEAR_ORDERS: return initialState
        default: return state
        }
    }
