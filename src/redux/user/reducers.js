import { CREATE_USER,
    REQUEST_CURRENT_USER, RETRIEVE_CURRENT_USER, 
    RETRIEVE_ERROR,
    REQUEST_USER_BY_USERNAME, RETRIEVE_USER_BY_USERNAME, REQUEST_USERS_SEARCH, RETRIEVE_USERS_SEARCH, REQUEST_USER_ACTION, UPDATE_USER, DELETE_USER, RETRIEVE_ACTION_ERROR 
} from './actionTypes.js';

let initialState = {
    type: REQUEST_CURRENT_USER,
    data: null,
    error: null,
    isFetching: false,
}


export function user(state = initialState, action){
    switch (action.type){
        case REQUEST_CURRENT_USER: return {...state, isFetching: true}
        case RETRIEVE_CURRENT_USER: return {...state, data: action.data, isFetching: false,}
        case RETRIEVE_ERROR: return {...state, error: action.error  }
        default: return state
    }   
}

let initialUsernameState = {
    type: REQUEST_USER_BY_USERNAME,
    data: null,
    error: null,
    isFetching: false,
}

export function userByUsername(state = initialUsernameState, action){
    switch (action.type){
        case REQUEST_USER_BY_USERNAME: return {...state, isFetching: true}
        case RETRIEVE_USER_BY_USERNAME: return {...state, data: action.data, isFetching: false,}
        case RETRIEVE_ERROR: return {...state, error: action.error  }
        default: return state
    }   
}


let initialSearchState = {
    type: REQUEST_USERS_SEARCH,
    data: null,
    error: null,
    isFetching: false,
}



export function searchedUsers(state = initialSearchState, action){
    switch (action.type){
        case REQUEST_USERS_SEARCH: return {...state, isFetching: true}
        case RETRIEVE_USERS_SEARCH: return {...state, data: action.data, isFetching: false,}
        case RETRIEVE_ERROR: return {...state, error: action.error  }
        default: return state
    }   
}



let initialUserActionState = {
    type: REQUEST_USERS_SEARCH,
    data: null,
    error: null,
    isFetching: false,
}



export function userAction(state = initialUserActionState, action){
    switch (action.type){
        case REQUEST_USER_ACTION: return {...state, isFetching: true}
        case CREATE_USER: return {...state, data: action.data, isFetching: false,}
        case UPDATE_USER: return  {...state, data: action.data, isFetching: false,}
        case DELETE_USER: return  {...state, data: action.data, isFetching: false,}
        case RETRIEVE_ACTION_ERROR: return {...state, error: action.error  }
        default: return state
    }   
}
