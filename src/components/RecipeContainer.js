import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'


const RecipeContainer = ({ recipes }) => {

 console.log(recipes)
  return(
    <div>
      <div className='ui two column grid'>
        <div className='two column row'>
          {recipes.matches ? recipes.matches.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : <div className='ui'></div>}
        </div>
      </div>
  </div>
  )
}

function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeContainer)
