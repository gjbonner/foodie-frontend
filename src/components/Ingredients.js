import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

const Ingredients = (props) => {
   return props.ingredients.map(ingredient => <Label onClick={props.remove}>{ingredient} <Icon name='remove circle'/></Label>)
}


export default Ingredients
