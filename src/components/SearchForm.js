import React, { Component } from 'react'
import { Button, Form, Grid, Icon, Checkbox, Segment } from 'semantic-ui-react'
import { getRecipes } from '../actions'
import { connect } from 'react-redux'
import Ingredients from './Ingredients'
import swal from 'sweetalert';

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
      swal("Please enter at least one ingredient", "", "error")
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
    console.log(this.state.ingredients, this.state.ingredient)
      this.setState({
        searchParams: this.state.searchParams + '+' + this.state.ingredient,
        ingredients: [...this.state.ingredients, this.state.ingredient]
      }, () => this.setState({
        ingredient: ''
      }))
    } else if(this.state.ingredient === '') {
      swal("Please enter a valid input", "", "error")
    }
  }

  removeIngredient = (e) => {
  this.setState({
    ingredients: [...this.state.ingredients].filter(ingredient => ingredient !== e.target.parentNode.innerText),
  }, () => this.setState({
    searchParams: this.state.ingredients.toString().split(',').join('+')
  }))
}

  toggleLactose = () => {
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
                <Form className='searchForm'>
                  <Form.Field>
                    <label className='title'>Search Ingredients</label>
                    <input onChange={this.handleChange} placeholder='Search Ingredients' value={this.state.ingredient} />
                  </Form.Field>
                  <Button.Group>
                    <Button onClick={this.addIngredient}>Add Ingredient</Button>
                    <Button.Or/>
                  <Button onClick={this.search}>Search</Button>
                </Button.Group>
                  <Grid.Row>
                    <Form.Field >
                      <label className='title'>Toggle Allergy Filters</label>
                      <Segment>
                        <Checkbox className='allergies' label='Dairy Free' toggle onClick={this.toggleLactose}/>
                        <Checkbox className='allergies' label='Gluten Free' toggle onClick={this.toggleGluten} />
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
      searchParams: state.searchParams,
      recipes: state.recipes
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search)
