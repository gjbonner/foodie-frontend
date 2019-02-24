export function getRecipes(searchParams, allergies){
  let ingredients = {ingredients: searchParams, allergies: allergies}
  return (dispatch) => {
    dispatch({type: 'GETTING_RECIPES'})
    return fetch('http://localhost:3000/api/v1/search',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingredients)
    }).then(r => r.json())
    .then(json =>{
        dispatch({type: 'GET_RECIPES', payload: json})
        dispatch({type: 'GOT_RECIPES', payload: false})
    })
  }
}


export function addToPantry(name){
  let ingredient = {name: name}
  return(dispatch) => {
    return fetch('http://localhost:3000/api/v1/pantry',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingredient)
    }).then(r => r.json())
    .then(data => console.log(data))
  }
}

export function logoutUser(){
  return(dispatch) => {
    return dispatch({type: 'TOGGLE_LOGIN', payload: false})
  }
}

export function getMyLikes(){
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/likes')
    .then(r => r.json()).then(json => dispatch({type: 'GET_LIKES', payload: json}))
  }
}

export function gotRecipes(){
  return(dispatch) => {
    return dispatch({type: 'GOT_RECIPES', payload: false})
  }
}

export function loginUser(username, password){
  return (dispatch) => {
    dispatch({type: 'AUTHENTICATING_USER'})
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          username: username,
          password: password
        }
      })
    }).then(r => {
      if(r.ok){
        return r.json()
      } else {
        throw r
      }
    })
  }
}

export function fetchCurrentUser(){
  return(dispatch) => {
    dispatch(authenticatingUser())
    fetch('http://localhost:3000/api/v1/user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(r => r.json()).then((JSON) => dispatch(setCurrentUser(JSON.user)))
  }
}

export function setCurrentUser(userData){
  return(dispatch) => {
    return dispatch({type: 'SET_CURRENT_USER', payload: userData})
  }
}

export function failedLogin(errorMsg){
  return(dispatch) => {
    return dispatch({type: 'FAILED_LOGIN', payload: errorMsg})
  }
}

export function authenticatingUser(){
  return(dispatch) => {
    return dispatch({type: 'AUTHENTICATING_USER'})
  }
}

export function showModal(){
  return(dispatch) => {
    return dispatch({type: 'SHOW_MODAL'})
  }
}

export function hideModal(){
  return(dispatch) => {
    return dispatch({type: 'HIDE_MODAL'})
  }
}

export function loading(){
  return(dispatch) => {
    return dispatch({type: 'GETTING_RECIPES'})
  }
}
