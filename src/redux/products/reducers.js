import { 
    REQUEST_PRODUCTS, 
    RETRIEVE_PRODUCTS,
    RETRIEVE_PRODUCTS_ERROR,
    REQUEST_SINGLE_PRODUCT,
    RETRIEVE_SINGLE_PRODUCT,
    RETRIEVE_SINGLE_PRODUCT_ERROR } from './actionTypes.js'

let initialState = {
    type: REQUEST_PRODUCTS,
    data: null,
    error: null,
    isFetching:false
}


export function productsList(state=initialState, action){
    switch (action.type){
        case REQUEST_PRODUCTS: return {...state, isFetching: true}
        case RETRIEVE_PRODUCTS: return {...state, data: action.data, isFetching: false,}
        case RETRIEVE_PRODUCTS_ERROR: return {...state, error: action.error  }
        default: return state
    }   
}

let initialSingleProductState = {
    type: REQUEST_SINGLE_PRODUCT,
    data: null,
    error: null,
    isFetching:false
}

export function currentProduct(state=initialSingleProductState, action){
    switch (action.type){
    }
}