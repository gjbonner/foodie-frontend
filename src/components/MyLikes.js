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
    fetch('http://localhost:3000/api/v1/likes')
    .then(r => r.json()).then(data => this.setState({likes: data}))
  }

  render(){
    return(
      <div>
        <Header />
        <Grid columns='three' divided>
          <Grid.Row>
            {this.state.likes.map(recipe => <LikeCard key={recipe.id} recipe={recipe} />)}
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}
