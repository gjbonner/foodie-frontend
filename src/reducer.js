const initialState = {
  recipes: 'test data'
}

export default function reducer(state=initialState, action){
  switch(action.type){
    case 'GET_RECIPES':
      return {...state, recipes: action.payload}
    default:
      return state
  }
}
