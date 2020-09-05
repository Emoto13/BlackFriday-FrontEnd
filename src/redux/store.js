import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { token } from './token/reducers.js';
import { user } from './user/reducers.js'
import { productsList } from './products/reducers.js'

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
     token,
     user,
     productsList
    })

export const store = createStore(  
    rootReducer, 
    applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ))


