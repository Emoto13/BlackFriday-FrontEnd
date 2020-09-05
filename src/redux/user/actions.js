import { CREATE_USER, 
    REQUEST_CURRENT_USER,
    RETRIEVE_CURRENT_USER,
    RETRIEVE_ERROR,
} from './actionTypes.js';
import { instance } from '../../axios/axios.js';
import { store } from '../store';

export function createUser(userProps){
    return {
        type: CREATE_USER,
        error: null
    }
}

export function requestCurrentUser(){
    return {
        type: REQUEST_CURRENT_USER,
        error: null
    }
}

export function retrieveCurrentUser(data){
    return {
        type: RETRIEVE_CURRENT_USER,
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

export function getCurrentUser() {
    return function (dispatch) {
      dispatch(requestCurrentUser())
      logUser()
      return instance.get("user/", {}, {'Authorization' : `Bearer ${store.getState().token.access}`} )
        .then(
          response =>
          dispatch(retrieveCurrentUser(response.data))
        )
        .catch(error =>
          dispatch(retrieveError(error))
        )
    }
  }



async function logUser() {
      return instance.patch("user-update/", {"is_logged_in": true})
        .catch(console.error)
    }