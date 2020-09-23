import { 
    REQUEST_CART_PRODUCTS, 
    RETRIEVE_CART_PRODUCTS,
    RETRIEVE_CART_ERROR } from './actionTypes.js'

let initialState = {
    type: REQUEST_CART_PRODUCTS,
    data:null, 
    error:null,
    isFetching: false
}

export function cart(state=initialState, action){
    switch (action.type){
        case REQUEST_CART_PRODUCTS: return {...state, isFetching: true}
        case RETRIEVE_CART_PRODUCTS: return {...state, data: action.data, isFetching: false}
        case RETRIEVE_CART_ERROR: return {...state, error: action.error }
        default: return state
        }
    }