import React from 'react'
import {Grid, Segment, Button, Divider} from 'semantic-ui-react'
const Login = () => {

  return (<Grid centered columns='2'>
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
  </Grid>)
}

export default Login
