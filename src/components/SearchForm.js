import React, { Component } from 'react'
import { Button, Form, Grid, Icon, Checkbox, Segment } from 'semantic-ui-react'
import { getRecipes } from '../actions'
import { connect } from 'react-redux'
import Ingredients from './Ingredients'

class Search extends Component{
  constructor(){
    super()
    this.state = {
      ingredient: '',
      searchParams: '',
      allergies: [],
      ingredients: []
    }
  }

  search = () => {
    if(this.state.searchParams === ''){
      window.alert('Please enter at least one ingredient')
    } else if(this.state.allergies.length >= 1){
      this.props.getRecipes(this.state.searchParams, this.state.allergies.toString().split(',').join(''))
    } else {
      this.props.getRecipes(this.state.searchParams, '')
    }
  }

  handleChange = (e) => {
    this.setState({
      ingredient: e.target.value
    })
  }

  addIngredient = () => {
  if(this.state.searchParams < 1 && this.state.ingredient !== ''){
    this.setState({
      searchParams: this.state.ingredient,
      ingredient: ''
    }, () => this.setState({
      ingredients: this.state.searchParams.split(' ')
    }))
  } else if(this.state.ingredient.length > 0 && this.state.ingredient !== '') {
      this.setState({
        searchParams: this.state.searchParams + '+' + this.state.ingredient,
        ingredient: '',
      }, () => this.setState({
        ingredients: this.state.searchParams.split('+')
      }))
    } else if(this.state.ingredient === '') {
      window.alert('Please enter a valid input')
    }
  }

  removeIngredient = (e) => {
  this.setState({
    ingredients: [...this.state.ingredients].filter(ingredient => ingredient !== e.target.parentNode.innerText),
  }, () => this.setState({
    searchParams: this.state.ingredients.toString().split(',').join('+')
  }, () => console.log(this.state.searchParams)))
}

  toggleLactose = () => {
    // &allowedAllergy[]=396^Dairy-Free&allowedAllergy[]=393^Gluten-Free
    if(this.state.allergies.includes('&allowedAllergy[]=396^Dairy-Free')){
      this.setState({
        allergies: [...this.state.allergies].filter(allergy => allergy !== '&allowedAllergy[]=396^Dairy-Free')
      }, () => console.log('allergies', this.state.allergies))
    } else {
      this.setState({
        allergies: [...this.state.allergies, '&allowedAllergy[]=396^Dairy-Free']
      }, () => console.log(this.state.allergies))
    }
  }

  toggleGluten = () => {
    if(this.state.allergies.includes('&allowedAllergy[]=393^Gluten-Free')){
      this.setState({
        allergies: [...this.state.allergies].filter(allergy => allergy !== '&allowedAllergy[]=393^Gluten-Free')
      }, () => console.log('allergies', this.state.allergies))
    } else {
      this.setState({
        allergies: [...this.state.allergies, '&allowedAllergy[]=393^Gluten-Free']
      }, () => console.log('here',this.state.allergies))
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
                  <Grid.Row>
                    <Form.Field>
                      <label>Toggle Allergy Filters</label>
                      <Segment>
                        <Checkbox label='Dairy-Free' toggle onClick={this.toggleLactose}/>
                        <Checkbox label='Gluten Free' toggle onClick={this.toggleGluten} />
                      </Segment>
                    </Form.Field>
                  </Grid.Row>
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
      getRecipes: (searchParams, allergies) => dispatch(getRecipes(searchParams, allergies))
    }
  }

  function mapStateToProps(state){
    return{
      searchParams: state.searchParams
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search)
