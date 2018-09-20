import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchForm'
import { getRecipes } from './actions'
import { connect } from 'react-redux'
import RecipeContainer from './components/RecipeContainer'

class App extends Component {


  render() {
    console.log(this.props)
    console.log('----------')
    return (
    <div>
      <Search />
      <RecipeContainer />
    </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return {
    getRecipes: () => dispatch(getRecipes())
  }
}

function mapStateToProps(state){
  return{
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
