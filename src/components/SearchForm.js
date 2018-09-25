import React, { Component } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { getRecipes } from '../actions'
import { connect } from 'react-redux'

class Search extends Component{
  constructor(){
    super()
    this.state = {
      ingredient: '',
      searchParams: ''
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
    }, () => console.log(this.state.searchParams))
  } else if(this.state.ingredient.length > 0) {
      this.setState({
        searchParams: this.state.searchParams + '+' + this.state.ingredient,
        ingredient: ''
      }, () => console.log('search params',this.state.searchParams))
    }
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
