import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getRecipes } from './actions'
import { connect } from 'react-redux'
import RecipeContainer from './components/RecipeContainer'

class App extends Component {

  render() {
      return(
        <RecipeContainer />
      )
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
