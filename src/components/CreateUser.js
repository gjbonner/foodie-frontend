import React, { Component } from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CreateUser extends Component {
  state = {
    username: '',
    password: ''
  }

  handleClick = () => {
    console.log('submitting')
  }

  handleChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <Form>
        <Form.Input
          label='Username'
          placeholder='username'
          name='username'
          onChange={this.handleChange}
        />
      </Form>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
