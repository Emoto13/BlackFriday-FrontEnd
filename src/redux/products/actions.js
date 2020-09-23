import { 
    REQUEST_PRODUCTS, 
    RETRIEVE_PRODUCTS,
    RETRIEVE_PRODUCTS_ERROR,
    REQUEST_SINGLE_PRODUCT,
    RETRIEVE_SINGLE_PRODUCT,
    RETRIEVE_SINGLE_PRODUCT_ERROR,
    REQUEST_PRODUCT_CREATION,
    PRODUCT_CREATION_SUCCESS,
    PRODUCT_CREATION_ERROR } from './actionTypes.js'
import { instance } from '../../axios/axios.js'
import { store } from '../store.js'

export function requestProducts(){
    return {
        type: REQUEST_PRODUCTS,
        error: null
    }
}

export function retrieveProducts(data){
    return {
        type: RETRIEVE_PRODUCTS,
        data,
        error: null
    }
}

export function retrieveProductsError(error){
    return {
        type: RETRIEVE_PRODUCTS_ERROR,
        error
    }
}




export function getProducts(discounted=false, category=''){
    return function(dispatch){
        dispatch(requestProducts())
        let url = buildURL(discounted, category)

        return instance.get(url, {}, {'Authorization' : `Bearer ${store.getState().token.access}`} )
        .then(
          response =>
          dispatch(retrieveProducts(response.data))
        )
        .catch(error => {
          dispatch(retrieveProductsError(error))
        })
    }
  }

function buildURL(discounted, category){
    const productsResource = { 
        true: 'products/discounted/',
        false: 'products/'
    }
    let categoryURLPart = category ? `category/${category}/` : ''
    let url = `${productsResource[discounted]}${categoryURLPart}`
    return url
}

export function requestSingleProduct(){
    return {
        type: REQUEST_SINGLE_PRODUCT,
        error: null
    }
}

export function retrieveSingleProduct(data){
    return {
        type: RETRIEVE_SINGLE_PRODUCT,
        data,
        error: null
    }
}

export function retrieveSingleProductError(error){
    return {
        type: RETRIEVE_SINGLE_PRODUCT_ERROR,
        error
    }
}

export function getCurrentProduct(url_name=undefined){
    return function(dispatch){
        dispatch(requestSingleProduct())
        let url = `products/${url_name}/`

        return instance.get(url, {}, {'Authorization' : `Bearer ${localStorage.getItem('access')}`} )
        .then(
          response =>
          dispatch(retrieveSingleProduct(response.data))
        )
        .catch(error => {
          dispatch(retrieveSingleProductError(error))
        })
        }
}

export function requestProductCreation(){
    return {
        type: REQUEST_PRODUCT_CREATION,
        data:null,
        error:null
    }
}

export function productCreationSuccess(data){
    return {
        type: PRODUCT_CREATION_SUCCESS,
        data,
        error:null
    }
}

export function productCreationError(error){
    return {
        type: PRODUCT_CREATION_ERROR,
        data:null,
        error
    }
}

export function createProduct(data={}){
    return function(dispatch){
        dispatch(requestProductCreation())
        instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access')}`
        return instance.post('products/create/', data, { 'Content-Type': "multipart/form-data"})
        .then(
          response =>
          dispatch(productCreationSuccess(response.data))
        )
        .catch(error => {
          dispatch(productCreationError(error))
          console.error(error)
        })
    }
}