export function getRecipes(){
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/search')
    .then(r => r.json())
    .then(json => dispatch({type: 'GET_RECIPES', payload: json}))
  }
}
