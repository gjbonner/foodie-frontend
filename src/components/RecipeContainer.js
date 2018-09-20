import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'


const RecipeContainer = ({ recipes }) => {
 //console.log(recipes.matches.map(recipe => recipe.ingredients))
  // if(recipes){
  //let renderRecipes = recipes.matches.map(recipe => <RecipeCard recipe={recipe} />)
  //   return renderRecipes
  // } else {
  //   let renderRecipes = ''
  //   return renderRecipes
  // }
 console.log(recipes)
  return(
    <div>
      <h3>recipes container</h3>
      {recipes.matches ? recipes.matches.map(recipe => <RecipeCard recipe={recipe} />) : <h1>loading...</h1>}
    </div>
  )
}

function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeContainer)
