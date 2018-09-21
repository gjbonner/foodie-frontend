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
    console.log(href)
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
