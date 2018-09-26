import React from 'react'
import { connect } from 'react-redux'
import { Segment, Button, Divider, Grid, Icon } from 'semantic-ui-react'
import { logoutUser, getMyLikes } from '../actions'
const Header = (props) => {
    return(
      <div>
        <Segment>
          <Button onClick={props.logoutUser} floated='right'>logout</Button>
          <Button onClick={props.getMyLikes} floated='right'>My Likes</Button>
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
