import React, { Component } from 'react'
// import { } from 'semantic-ui-react'
import  { } from '../actions'

export default class Pantry extends Component {
    constructor(){
      super()
      this.state = {
        ingredients: [],
        searchParams: '',
        ingredient: ''
      }
    }

    onChange = () => {
      console.log()
    }
}
