const initialState = {
  recipes: 'test data',
  loggedIn: true,
  currentUser: ''
}

const GET_RECIPES = 'GET_RECIPES'
const TOGGLE_LOGIN = 'TOGGLE_LOGIN'

export default function reducer(state=initialState, action){
  switch(action.type){
    case GET_RECIPES:
      return {...state, recipes: action.payload}
    case TOGGLE_LOGIN:
      return {...state, loggedIn: action.payload}
    default:
      return state
  }
}
