import React from 'react'
import {Button, Card, Image, Rating, Icon} from 'semantic-ui-react'
const LikeCard = (props) => {
  console.log('like card props',props)
  let desc = `Course: ${ props.recipe.rCourse }  ||  Cuisine: ${ props.recipe.rCuisine}`

  const handleClick = () => {
    let href = props.recipe.url
    window.open(href)
  }

  return(
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated='right' src={props.recipe.imageURL} rounded/>
          <Card.Header>{props.recipe.recipeName}</Card.Header>
          <Card.Meta>Rating: {<Rating defaultRating={props.recipe.rating} maxRating={props.recipe.rating} disabled/>}</Card.Meta>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button animated='fade' color='teal' onClick={() => props.deleteLike(props.recipe)}>
              <Button.Content visible>Delete</Button.Content>
              <Button.Content hidden><Icon name='delete'></Icon></Button.Content>
            </Button>
            <Button animated='fade' color='black' onClick={handleClick}>
              <Button.Content visible>Recipe</Button.Content>
              <Button.Content hidden><Icon name='utensils'></Icon></Button.Content>
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default LikeCard
