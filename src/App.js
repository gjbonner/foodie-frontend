import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchForm'
import { getRecipes } from './actions'
import { connect } from 'react-redux'
import RecipeContainer from './components/RecipeContainer'
import Header from './components/Header'

class App extends Component {

  // componentDidMount(){
  //   let recipe_obj = {recipe_obj: $tmp}
  //   fetch('http://localhost:3000/api/v1/save',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(recipe_obj)
  //   }).then(r => r.json()).then(data => console.log(data))
  // }

  render() {
    console.log(this.props)
    console.log('----------')
    if(this.props.loggedIn === false){
      return(
        <div>
          <Header />
      </div>
      )
    } else{
      return (
      <div>
        <Header />
        <Search />
        <RecipeContainer />
      </div>
      )
    }
  }
}
function mapDispatchToProps(dispatch){
  return {
    getRecipes: () => dispatch(getRecipes())
  }
}

function mapStateToProps(state){
  return{
    recipes: state.recipes,
    loggedIn: state.loggedIn,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
