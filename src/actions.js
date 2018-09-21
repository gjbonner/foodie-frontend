export function getRecipes(searchParams){
  let ingredients = {ingredients: searchParams}

  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/search',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingredients)
    }).then(r => r.json())
    .then(json => dispatch({type: 'GET_RECIPES', payload: json})).then(data => console.log(data))
  }
}

export function logoutUser(){
  console.log("ME ME ME!!")
  return(dispatch) => {
    return dispatch({type: 'TOGGLE_LOGIN', payload: false})
  }
}


// fetch('http://localhost:3000/api/v1/save',{
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify($tmp)
// }).then(r => r.json()).then(data => console.log(data))
