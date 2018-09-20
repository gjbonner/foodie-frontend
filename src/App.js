import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchForm'
import { getRecipes } from './actions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    this.props.getRecipes()
  }

  render() {
    console.log(this.props)
    console.log('----------')
    return (
      <Search />
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
