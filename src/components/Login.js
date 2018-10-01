import React, { Component } from 'react'
import { NavLink, withRouter, Redirect } from 'react-router-dom'
import { Form, Input, Button, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
class Login extends Component{
    state = {
      username: '',
      password: ''
    }

    handleChange = (e, {name, value}) => {
      this.setState({
        [name]: value
      })
    }

    handleClick = () => {
      this.props.loginUser(this.state.username, this.state.password)
    }


    render(){
      return this.props.loggedIn ? (
        <Redirect to='/likes' />
      ) : (
        <Grid centered columns='2'>
          <Grid.Column>
            <Grid.Row>
              <Form>
                <Form.Input required
                  name='username'
                  label='Username'
                  placeholder='Username'
                  onChange={this.handleChange}
                />
                <Form.Input required
                  name='password'
                  label='Password'
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />
                <Form.Button content='Login' onClick={this.handleClick} />
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      )
    }
}

function mapStateToProps(state){
  return {
    authenticatingUser: state.authenticatingUser,
    failedLogin: state.failedLogin,
    error: state.error,
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps(dispatch){
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
