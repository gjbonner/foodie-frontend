import React from 'react'
import { Button, Card, Image, Rating} from 'semantic-ui-react'

const RecipeCard = (props) => {
  let {imageUrlsBySize, recipeName, sourceDisplayName, id, rating} = props.recipe
  let {course, cuisine} = props.recipe.attributes
  course ? course = course : course = "None"
  cuisine ? cuisine = cuisine : cuisine = "None"
  let desc = `Course: ${ course }  ||  Cuisine: ${ cuisine}`

  const handleClick = () => {
    let href = `https://www.yummly.com/recipe/${id}`
    window.open(href)
  }

  const likeRecipe = (recipe) => {
    if(!recipe.flavors){
      let recipe_obj = {
        imageURL: recipe.imageUrlsBySize[90].slice(0, -6),
        ingredients: recipe.ingredients.toString(),
        recipeName: recipe.recipeName,
        rating: recipe.rating,
        course: recipe.attributes.course,
        bitter: 0,
        salty: 0,
        sweet: 0,
        piquant: 0,
        meaty: 0,
        url: `https://www.yummly.com/recipe/${recipe.id}`,
        alt_id: recipe.id,
        user_id: 1,
        rCourse: course,
        rCuisine: cuisine

      }
      fetch('http://localhost:3000/api/v1/save',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe_obj)
      }).then(r => r.json()).then(data => console.log(data))
    } else {
    let recipe_obj = {
        imageURL: recipe.imageUrlsBySize[90].slice(0, -6),
        ingredients: recipe.ingredients.toString(),
        recipeName: recipe.recipeName,
        rating: recipe.rating,
        course: recipe.attributes.course,
        bitter: recipe.flavors.bitter,
        salty: recipe.flavors.salty,
        sweet: recipe.flavors.sweet,
        piquant: recipe.flavors.piquant,
        meaty: recipe.flavors.meaty,
        url: `https://www.yummly.com/recipe/${recipe.id}`,
        alt_id: recipe.id,
        user_id: 1,
        rCourse: course.toString(),
        rCuisine: cuisine.toString()
      }

      fetch('http://localhost:3000/api/v1/save',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe_obj)
      }).then(r => r.json()).then(data => console.log(data))
    }
  }


  const createLike = (recipe_obj) => {
    let other_obj = {
      user_id: recipe_obj.user_id,
      alt_id_id: recipe_obj.alt_id
    }
    fetch('http://localhost:3000/api/v1/likes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(other_obj)
    }).then(r => r.json()).then(data => console.log(data))
  }

  if(imageUrlsBySize){
    let img = imageUrlsBySize[90].slice(0, -6)
    return(
      <Card.Group>
        <Card>
          <Card.Content>
            <Image floated='right' src={img} rounded />
            <Card.Header>{recipeName}</Card.Header>
            <Card.Meta>Rating: {<Rating defaultRating={rating} maxRating={rating} disabled/>}</Card.Meta>
            <Card.Description>{desc}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button
                color='blue'
                content='Like'
                icon='heart'
                onClick={() => likeRecipe(props.recipe)}
              />
              <Button
                color='black'
                content='Recipe'
                icon='utensils'
                onClick={handleClick}
              />
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}



export default RecipeCard
