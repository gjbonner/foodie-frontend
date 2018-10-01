const initialState = {
  recipes: [],
  loggedIn: false,
  user: null,
  searching: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
}

const GET_RECIPES = 'GET_RECIPES'
const TOGGLE_LOGIN = 'TOGGLE_LOGIN'
const GET_LIKES = 'GET_LIKES'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const AUTHENTICATING_USER = 'AUTHENTICATING_USER'
const AUTHENTICATED_USER = 'AUTHENTICATED_USER'
const FAILED_LOGIN = 'FAILED_LOGIN'

export default function reducer(state=initialState, action){
  switch(action.type){
    case GET_RECIPES:
      return {...state, recipes: action.payload}
    case GET_LIKES:
      return {...state, recipes: action.payload}
    case AUTHENTICATING_USER:
      return {...state, authenticatingUser: true }
    case AUTHENTICATED_USER:
      return {...state, authenticatingUser: false}
    case SET_CURRENT_USER:
      return {...state, user: action.payload, loggedIn: true, authenticatingUser: false}
    case FAILED_LOGIN:
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      }
    default:
      return state
  }
}
