import React, { Component } from 'react'
import { Button, Form, Grid, Icon } from 'semantic-ui-react'
import { getRecipes } from '../actions'
import { connect } from 'react-redux'
import Ingredients from './Ingredients'
class Search extends Component{
  constructor(){
    super()
    this.state = {
      ingredient: '',
      searchParams: '',
      ingredients: []
    }
  }

  search = () => {
    if(this.state.searchParams === ''){
      window.alert('Please enter at least one ingredient')
    } else {
      this.props.getRecipes(this.state.searchParams)
    }
  }

  handleChange = (e) => {
    this.setState({
      ingredient: e.target.value
    })
  }

  addIngredient = () => {
  if(this.state.searchParams < 1 && this.state.ingredient.length > 0){
    this.setState({
      searchParams: this.state.ingredient,
      ingredient: ''
    }, () => this.setState({
      ingredients: this.state.searchParams.split(' ')
    }))
  } else if(this.state.ingredient.length > 0) {
      this.setState({
        searchParams: this.state.searchParams + '+' + this.state.ingredient,
        ingredient: '',
      }, () => this.setState({
        ingredients: this.state.searchParams.split('+')
      }))
    }
  }

  removeIngredient = e => {
  this.setState({
    ingredients: [...this.state.ingredients].filter(ingredient => ingredient != e.target.parentNode.innerText),
  }, () => this.setState({
    searchParams: this.state.ingredients.toString().split(',').join('+')
  }, () => console.log(this.state.searchParams)))
}
    render(){
      return(
        <div>
          <Grid>
            <Grid.Row centered colums={2}>
                <Form>
                  <Form.Field>
                    <label>Search Ingredients</label>
                    <input onChange={this.handleChange} placeholder='Search Ingredients' value={this.state.ingredient} />
                  </Form.Field>
                  <Button.Group>
                    <Button onClick={this.addIngredient}>Add Ingredient</Button>
                    <Button.Or/>
                  <Button onClick={this.search}>Search</Button>
                </Button.Group>
              </Form>
            </Grid.Row>
            <Grid.Row centered colums={2}>
              <Ingredients remove={this.removeIngredient} ingredients={this.state.ingredients} />
            </Grid.Row>
            </Grid>
        </div>
      )
    }
  }

  function mapDispatchToProps(dispatch){
    return{
      getRecipes: (searchParams) => dispatch(getRecipes(searchParams))
    }
  }

  function mapStateToProps(state){
    return{
      searchParams: state.searchParams
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search)
