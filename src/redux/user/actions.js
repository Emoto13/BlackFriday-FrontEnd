import { CREATE_USER, 
    DELETE_USER, 
    REQUEST_CURRENT_USER,
    REQUEST_USERS_SEARCH,
    REQUEST_USER_ACTION,
    REQUEST_USER_BY_USERNAME,
    RETRIEVE_CURRENT_USER,
    RETRIEVE_ERROR,
    RETRIEVE_USERS_SEARCH,
    RETRIEVE_USER_BY_USERNAME,
    UPDATE_USER,
    RETRIEVE_ACTION_ERROR
} from './actionTypes.js';
import { instance } from '../../axios/axios.js';
import { store } from '../store';


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


export function getCurrentUser(access=undefined) {
    return function (dispatch) {
      dispatch(requestCurrentUser())
      logUser()
      let token = access ? access : store.getState().token.access
      return instance.get("user/", {}, {'Authorization' : `Bearer ${token}`} )
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
      return instance.patch("user/update/", {"is_logged_in": true })
        .catch(console.error)
    }

export function requestUserByUsername(){
    return {
        type: REQUEST_USER_BY_USERNAME,
        error: null
    }
}

export function retrieveUserByUsername(data){
    return {
        type: RETRIEVE_USER_BY_USERNAME,
        data,
        error: null
    }
}

export function getUserByUsername(username){
    return function (dispatch){
      dispatch(requestUserByUsername())
      return instance.get(`user/${username}/`, {}, {'Authorization' : `Bearer ${localStorage.getItem('access')}`} )
        .then(
          response =>
          dispatch(retrieveUserByUsername(response.data))
        )
        .catch(error =>
          dispatch(retrieveError(error))
        )
    }
}

export function requestUsersSearch(){
    return {
        type: REQUEST_USERS_SEARCH,
        error: null
    }
}

export function retrieveUsersSearch(data){
    return {
        type: RETRIEVE_USERS_SEARCH,
        data,
        error: null
    }
}

export function searchUsers(username){
    return function (dispatch){
      dispatch(requestUsersSearch())
      return instance.get(`user/search/${username}/`, {}, {'Authorization' : `Bearer ${localStorage.getItem('access')}`} )
        .then(
          response =>
          dispatch(retrieveUsersSearch(response.data))
        )
        .catch(error =>
          dispatch(retrieveError(error))
        )
    }
}

export function requestUserAction(){
    return {
        type: REQUEST_USER_ACTION,
        data: null,
        error: null
    }
}

export function createUser(data){
    return {
        type: CREATE_USER,
        data, 
        error: null
    }
}

export function deleteUser(data){
    return {
        type: DELETE_USER,
        data,
        error: null
    }
}

export function updateUser(data){
    return {
        type: UPDATE_USER,
        data, 
        error: null
    }
}

export function retrieveActionError(error){
    return {
        type: RETRIEVE_ACTION_ERROR,
        data: null, 
        error

    }
}

export function performAction(type, additionalData={}){
    return function (dispatch){
      dispatch(requestUserAction())
      const action = {
          'create': handleCreate.bind(undefined, additionalData),
          'update': handleUpdate.bind(undefined, additionalData),
          'delete': handleDelete
      }

      return action[type](dispatch)
    }
}

function handleCreate(data, dispatch) {
    return instance.post("user/create/", data)
    .then(
      response =>
      dispatch(createUser(response.data))
    )
    .catch(error =>
      dispatch(retrieveActionError(error))
    )
}

function handleUpdate(data, dispatch) { 
    return instance.patch("user/update/", data,  {'Authorization' : `Bearer ${localStorage.getItem('access')}`})
    .then(
      response =>
      dispatch(updateUser(response.data))
    )
    .catch(error =>
      dispatch(retrieveActionError(error))
    )

}

function handleDelete(dispatch) {
    return instance.delete(`user/delete/`, {}, {'Authorization' : `Bearer ${localStorage.getItem('access')}`} )
        .then(
          response =>
          dispatch(retrieveUsersSearch(response.data))
        )
        .catch(error =>
          dispatch(retrieveError(error))
        )
}


