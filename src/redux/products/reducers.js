import { 
    REQUEST_PRODUCTS, 
    RETRIEVE_PRODUCTS,
    RETRIEVE_PRODUCTS_ERROR,
    REQUEST_SINGLE_PRODUCT,
    RETRIEVE_SINGLE_PRODUCT,
    RETRIEVE_SINGLE_PRODUCT_ERROR, REQUEST_PRODUCT_CREATION, PRODUCT_CREATION_SUCCESS, PRODUCT_CREATION_ERROR } from './actionTypes.js'

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
        case REQUEST_SINGLE_PRODUCT: return {...state, isFetching: true}
        case RETRIEVE_SINGLE_PRODUCT: return {...state, data:action.data, isFetching: false}
        case RETRIEVE_SINGLE_PRODUCT_ERROR: return {...state, error: action.error }
        default: return state
    }
}

let initialProductCreationState = {
    type: REQUEST_PRODUCT_CREATION,
    data: null,
    error: null,
    isFetching:false
}

export function createProduct(state=initialProductCreationState, action){
    switch (action.type){
        case REQUEST_PRODUCT_CREATION: return {...state, isFetching: true}
        case PRODUCT_CREATION_SUCCESS: return {...state, data:action.data, isFetching: false}
        case PRODUCT_CREATION_ERROR: return {...state, error: action.error }
        default: return state
    }
}