import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { token } from './token/reducers.js';
import { user, userByUsername, searchedUsers, userAction } from './user/reducers.js'
import { productsList, currentProduct, createProduct } from './products/reducers.js'
import { createOrder } from './orders/reducers.js'
import { cart } from './cart/reducers.js'
import { adminOrders } from './admin/reducers.js';

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
     token,
     user,
     userAction,

     productsList,
     currentProduct,
     createProduct,

     createOrder,
     cart,
     
     adminOrders,

     userByUsername,
     searchedUsers,
     })

export const store = createStore(  
    rootReducer, 
    applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ))


