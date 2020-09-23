import { REQUEST_TOKEN, RECEIVE_TOKEN, ERROR_TOKEN, SET_TOKEN } from './actionTypes.js';
import { instance, setInterceptor } from '../../axios/axios.js';

export function requestToken(userInfo){
    return {
        type: REQUEST_TOKEN,
        userInfo
    }
}

export function receiveToken({ access, refresh }){
    return {
        type: RECEIVE_TOKEN,
        access, 
        refresh,
        error: null
    }
}

export function receiveError(error){
    return {
        type: ERROR_TOKEN,
        access: null, 
        refresh: null,
        error
    }
}

export function setToken(access, refresh){
    return {
      type: SET_TOKEN,
      access, 
      refresh,
      error: null
  }
}

export function getToken(userInfo) {
    return function (dispatch) {
      dispatch(requestToken(userInfo))
      console.log('setting token')
      return instance.post("api/token/", userInfo)
        .then(
          response =>
          dispatch(receiveToken(response.data))
        )
        .then(
          token => {
            console.log(token)
            setInterceptor(instance, token.access, token.refresh)
            
          }
        )
        .catch(error =>
          dispatch(receiveError(error))
        )
    }
  }
