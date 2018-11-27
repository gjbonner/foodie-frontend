import React, { Component } from 'react'
import  {addToPantry} from '../actions'

export default class Pantry extends Component {
    constructor(){
      super()
      this.state = {
        ingredients: [],
        searchParams: '',
        ingredient: ''
      }
    }

}
