import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { getRecipes } from './actions'
import { connect } from 'react-redux'
import RecipeContainer from './components/RecipeContainer'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import MyLikes from './components/MyLikes'

class App extends Component {

  render() {
      return(
        <Fragment>
          <Switch>
            <Route exact path='/' render={() => <Redirect to="/recipes"/>} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/recipes' component={RecipeContainer} />
            <Route exact path='/likes' component={MyLikes} />
          </Switch>
        </Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
