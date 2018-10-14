import React from 'react'
import {Button, Card, Image, Rating, Icon} from 'semantic-ui-react'
import swal from 'sweetalert';

const LikeCard = (props) => {
  console.log('like card props',props)
  let desc = `Course: ${ props.recipe.rCourse } ||  Cuisine: ${ props.recipe.rCuisine}`

  const handleClick = () => {
    let href = props.recipe.url
    window.open(href)
  }

  const deleteRecipe = () => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if(willDelete){
        let name = props.recipe.recipeName
      props.deleteLike(props.recipe)
        swal(`${name} removed from likes`,{
          icon: "success"
        })
      } else {
        swal("Cancelled")
      }
    })
  }

  return(
      <Card>
        <Card.Content>
          <Image className='img' floated='right' src={props.recipe.imageURL} rounded/>
          <Card.Header>{props.recipe.recipeName}</Card.Header>
          <Card.Meta>Rating: {<Rating defaultRating={props.recipe.rating} maxRating={props.recipe.rating} disabled/>}</Card.Meta>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button animated='fade' color='teal' onClick={() => deleteRecipe(props.recipes)}>
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
  )
}

export default LikeCard
