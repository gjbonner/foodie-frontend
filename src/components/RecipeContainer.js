import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { Message, Icon, Grid } from 'semantic-ui-react'
import FilterRecipes from  './FilterRecipes'
const RecipeContainer = (props) => {

 console.log(props.recipes)
  return(
    <div>
          <FilterRecipes />
          <Grid columns='three' divided>
            <Grid.Row>
          {props.recipes.matches ? props.recipes.matches.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : <div className='ui'>
            {props.searching ? <Message icon>
              <Icon name='circle notched' loading />
                <Message.Content>
                  <Message.Header>Just one second</Message.Header>
                  We are fetching that content for you.
                </Message.Content>
              </Message> : null}
        </div>}
      </Grid.Row>
      </Grid>
  </div>
  )
}

function mapStateToProps(state){
  return {
    recipes: state.recipes,
    searching: state.searching
  }
}

export default connect(mapStateToProps)(RecipeContainer)
