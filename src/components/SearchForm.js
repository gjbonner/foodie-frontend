import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

class Search extends Component{
  constructor(){
    super()
    this.state ={
      searchIngredients:''
    }
  }

  render(){
    return(
      <div className='ui grid'>
        <div className='three column row'>
          <div className='left floated column'>
        <Form>
          <Form.Field>
            <label>Search Ingredients</label>
            <input placeholder='Search Ingredients' />
          </Form.Field>
          <Button.Group>
            <Button>Add Ingredient</Button>
            <Button.Or/>
            <Button>Search</Button>
          </Button.Group>
        </Form>
      </div>
      </div>
      </div>
    )
  }
}

export default Search
