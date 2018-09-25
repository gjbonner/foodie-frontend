const initialState = {
  recipes: [],
  loggedIn: true,
  currentUser: '',
  searching: false
}

const GET_RECIPES = 'GET_RECIPES'
const TOGGLE_LOGIN = 'TOGGLE_LOGIN'
const GET_LIKES = 'GET_LIKES'

export default function reducer(state=initialState, action){
  switch(action.type){
    case GET_RECIPES:
      return {...state, recipes: action.payload}
    case TOGGLE_LOGIN:
      return {...state, loggedIn: action.payload}
    case GET_LIKES:
      return {...state, recipes: action.payload}
    default:
      return state
  }
}
