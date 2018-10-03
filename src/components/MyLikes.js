import React, { Component } from 'react'
import LikeCard from './LikeCard'
import { Grid, Card } from 'semantic-ui-react'
import Header from './Header'

export default class MyLikes extends Component{
  constructor(){
    super()
    this.state = {
      likes: [],
      gettingLikes: true
    }
  }

  componentDidMount(){
    this.getLikes()
  }

  getLikes = () => {
    fetch('http://localhost:3000/api/v1/likes')
    .then(r => r.json()).then(data => this.setState({likes: data}))
  }

  deleteLike = (recipe) => {
    console.log('delete props',recipe)
     let idObj = {
       recipe: {
         id: recipe.id
       }
     }
     fetch('http://localhost:3000/api/v1/likes',{
       method: 'DELETE',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(idObj)
     }).then(r => r.json()).then(data => console.log(data)).then(() => this.getLikes())
   }

  render(){
    return(
      <div className='likesContainer'>
        <Header />
        <div className='likesGrid'>
          <Grid columns='three' divided>
            <Grid.Row>
              <Card.Group className='cards' itemsPerRow={4} centered>
                {this.state.likes.map(recipe => <LikeCard deleteLike={this.deleteLike} key={recipe.id} recipe={recipe} />)}
              </Card.Group>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
