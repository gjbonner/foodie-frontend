import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'

const RecipeCard = (props) => {
  let {imageUrlsBySize, recipeName, sourceDisplayName, id, rating} = props.recipe
  let {course, cuisine} = props.recipe.attributes
  course ? course = course : course = "None"
  cuisine ? cuisine = cuisine : cuisine = "None"
  let desc = `Course: ${ course }  |  Cuisine: ${ cuisine}`
  let href = `https://www.yummly.com/recipe/${id}`
  if(imageUrlsBySize){
    let img = imageUrlsBySize[90].slice(0, -6)
    return(
      <Card.Group>
        <Card>
          <Card.Content>
            <Image floated='right' src={img} />
            <Card.Header>{recipeName}</Card.Header>
            <Card.Meta>Rating: {rating}</Card.Meta>
            <Card.Description>{desc}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

// function mapStateToProps(state){
//   return {
//     ingredients: state.ingredients,
//     flavors: state.flavors,
//     rating: state.rating,
//     name: state.recipeName,
//   }
// }

export default RecipeCard
