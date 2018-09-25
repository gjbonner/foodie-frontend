import React from 'react'
import { connect } from 'react-redux'
import { Segment, Button, Divider, Grid, Icon } from 'semantic-ui-react'
import { logoutUser, getMyLikes } from '../actions'
const Header = (props) => {
  console.log('Header props', props)
  if(props.loggedIn === false){
    return(
      <Grid centered columns='2'>
        <Grid.Column>
          <Segment padded>
            <Button primary fluid>
              Login
            </Button>
            <Divider horizontal>Or</Divider>
            <Button secondary fluid>
              Sign Up Now
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  } else {
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
