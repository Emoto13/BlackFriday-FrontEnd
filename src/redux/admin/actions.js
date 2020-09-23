import { instance } from '../../axios/axios.js'
import { 
    REQUEST_ORDERS, 
    RETRIEVE_ORDERS,
    RETRIEVE_ERROR, 
    CLEAR_ORDERS
 } from './actionTypes.js'


export function requestOrders(){
    return {
        type: REQUEST_ORDERS,
        error: null
    }
}

export function retrieveOrders(data){
    return {
        type: RETRIEVE_ORDERS,
        data,
        error: null
    }
}

export function retrieveError(error){
    return {
        type: RETRIEVE_ERROR,
        data: null,
        error
    }
}

export function clearOrders(){
    return {
        type: CLEAR_ORDERS,
        data: null,
        error: null
    }
}


export function getOrders(filters){
    return function(dispatch){
        dispatch(requestOrders())
        const access = localStorage.getItem('access')
        instance.defaults.headers.common['Authorization'] = `Bearer ${access}`
        return instance.get(`order/search/${JSON.stringify(filters)}`, filters, {})
        .then(
          response =>
          dispatch(retrieveOrders(response.data))
        )
        .catch(error => {
          dispatch(retrieveError(error))
        })
    }
  }
