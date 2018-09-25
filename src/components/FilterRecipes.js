import React from 'react'
import { Input, Grid } from 'semantic-ui-react'

const filter = () => {
  return(
    <div>
      <Grid>
        <Grid.Row centered columns={2}>
        <Input float='right' placeholder='filter' />
      </Grid.Row>
      </Grid>
    </div>
  )
}

export default filter
