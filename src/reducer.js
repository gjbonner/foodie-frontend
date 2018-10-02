const initialState = {
  recipes: [],
  loggedIn: false,
  user: null,
  searching: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  displayModal: true
}

const GET_RECIPES = 'GET_RECIPES'
const TOGGLE_LOGIN = 'TOGGLE_LOGIN'
const GET_LIKES = 'GET_LIKES'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const AUTHENTICATING_USER = 'AUTHENTICATING_USER'
const AUTHENTICATED_USER = 'AUTHENTICATED_USER'
const FAILED_LOGIN = 'FAILED_LOGIN'
const GOT_RECIPES = 'GOT_RECIPES'
const GETTING_RECIPES = 'GETTING_RECIPES'
const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'

export default function reducer(state=initialState, action){
  switch(action.type){
    case GET_RECIPES:
      return {...state, recipes: action.payload}
    case GETTING_RECIPES:
      return {...state, gettingRecipes: true}
    case GOT_RECIPES:
      return {...state, gettingRecipes: false}
    case GET_LIKES:
      return {...state, recipes: action.payload}
    case AUTHENTICATING_USER:
      return {...state, authenticatingUser: true }
    case AUTHENTICATED_USER:
      return {...state, authenticatingUser: false}
    case SET_CURRENT_USER:
      return {...state, user: action.payload, loggedIn: true, authenticatingUser: false}
    case SHOW_MODAL:
      return {...state, showModal: true}
    case HIDE_MODAL:
      return {...state, showModal: false}
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
