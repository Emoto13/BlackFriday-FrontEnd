import { PREPARE_ORDER, SEND_ORDER, ORDER_ERROR } from './actionTypes'
import { instance } from '../../axios/axios'
 
export function prepareOrder(){
    return {
        type: PREPARE_ORDER,
        data: null,
        error: null
    }
}

export function sendOrder(data){
    return {
        type: SEND_ORDER,
        data,
        error: null
    }
}

export function orderError(error){
    return {
        type: ORDER_ERROR,
        data: null,
        error
    }
}


// productData => {addtional_ information, delivery_price}
export function makeOrder(token, product_name, additionalData={}){
    return function(dispatch){
        dispatch(prepareOrder())
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
        return instance.post('order/create/', {product_name, order_data: additionalData })
        .then(
          response =>
          dispatch(sendOrder(response.data))
        )
        .catch(error => {
          dispatch(orderError(error))
        })
    }
  }