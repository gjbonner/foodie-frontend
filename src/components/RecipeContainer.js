import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { Message, Icon, Grid, Card} from 'semantic-ui-react'
import Header from './Header'
import Search from './SearchForm'
import swal from 'sweetalert'
import Loading from './Loading'
const RecipeContainer = (props) => {
  return(
    <div className='recipeContainer'>
      <Header />
      <Search />
      {props.gettingRecipes ? <Loading /> : null}
          <Grid columns='three' divided>
            <Grid.Row>
              <Card.Group centered>
                {props.recipes.matches ? props.recipes.matches.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : <div></div>}
              </Card.Group>
      </Grid.Row>
    </Grid>
  </div>
  )
}


function mapStateToProps(state){
  return {
    gettingRecipes: state.gettingRecipes,
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeContainer)
