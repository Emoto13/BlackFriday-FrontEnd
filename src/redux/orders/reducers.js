import { PREPARE_ORDER, SEND_ORDER, ORDER_ERROR } from './actionTypes'

let initialState = {
    type: PREPARE_ORDER,
    data: null,
    error: null,
    isSending: false,
}

export function createOrder(state=initialState, action){
    switch (action.type){
        case PREPARE_ORDER: return {...state, isSending: true}
        case SEND_ORDER: return {...state, data: action.data, isSending: false,}
        case ORDER_ERROR: return {...state, error: action.error  }
        default: return state
    }   
}