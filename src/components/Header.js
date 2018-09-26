import React from 'react'
import { connect } from 'react-redux'
import { Segment, Button, Divider, Grid, Icon } from 'semantic-ui-react'
import { logoutUser, getMyLikes } from '../actions'
import { NavLink, withRouter, Redirect } from 'react-router-dom'
const Header = (props) => {
    return(
      <div>
        <Segment>
          <Button as={NavLink} to="/login" onClick={props.logoutUser} floated='right'>logout</Button>
          <Button as={NavLink} to="/likes" onClick={props.getMyLikes} floated='right'>My Likes</Button>
          <Button as={NavLink} to="/recipes" floated='right'>Search Recipes</Button>
          <Icon name='users' size='large' circular />
            <Divider clearing />
          </Segment>
        </div>
      )
    }

function mapDispatchToProps(dispatch){
  return{
    logoutUser: () => dispatch(logoutUser()),
    getMyLikes: () => dispatch(getMyLikes())
  }
}

function mapStateToProps(state){
  return{
    loggedIn: state.loggedIn,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
