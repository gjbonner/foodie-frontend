import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchForm'
import { getRecipes } from './actions'
import { connect } from 'react-redux'
import RecipeContainer from './components/RecipeContainer'
import Header from './components/Header'

class App extends Component {

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
