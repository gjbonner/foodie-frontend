import React, { Component } from 'react'
import LikeCard from './LikeCard'
import { Grid } from 'semantic-ui-react'
import Header from './Header'

export default class MyLikes extends Component{
  constructor(){
    super()
    this.state = {
      likes: []
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
     console.log('mylikes',idObj)
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
      <div>
        <Header />
        <Grid columns='three' divided>
          <Grid.Row>
            {this.state.likes.map(recipe => <LikeCard deleteLike={this.deleteLike} key={recipe.id} recipe={recipe} />)}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
