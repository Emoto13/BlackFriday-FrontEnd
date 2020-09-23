import { 
    REQUEST_CART_PRODUCTS, 
    RETRIEVE_CART_PRODUCTS,
    RETRIEVE_CART_ERROR } from './actionTypes.js'
import { instance } from '../../axios/axios.js'
import { store } from '../store.js'

export function requestCartProducts(){
    return {
        type: REQUEST_CART_PRODUCTS,
        error: null
    }
}

export function retrieveCartProducts(data){
    return {
        type: RETRIEVE_CART_PRODUCTS,
        data,
        error: null
    }
}

export function retrieveCartError(error){
    return {
        type: RETRIEVE_CART_ERROR,
        error
    }
}

export function getCartByIds(productIds){
    return function(dispatch){
        dispatch(requestCartProducts())
        let ids = productIds.map(id => id.toString())
        const urlIds = ids.join("-")
        return instance.get(`cart/ids/${urlIds}/`, {}, {'Authorization' : `Bearer ${store.getState().token.access}`} )
        .then(
          response =>
          dispatch(retrieveCartProducts(response.data))
        )
        .catch(error => {
          dispatch(retrieveCartError(error))
        })
    }
  }