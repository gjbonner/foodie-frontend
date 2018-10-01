import React from 'react'
import {Button, Card, Image, Rating} from 'semantic-ui-react'
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
            <Button
              color='blue'
              content='Delete'
              icon='delete'
              onClick={() => props.deleteLike(props.recipe)}
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

export default LikeCard
