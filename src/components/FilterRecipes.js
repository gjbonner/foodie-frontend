import React from 'react'
import { Dropdown, Grid, Menu } from 'semantic-ui-react'



const options = () => [
  { key: 1, text: 'low sodium', value: 1}

]

const filter = () => {
  return(
    <div>
      <Grid>
        <Grid.Row centered columns={2}>
          <Menu compact>
            <Dropdown text='Filter' options={options} simple item/>
          </Menu>
        </Grid.Row>
      </Grid>
    </div>
  )
}


export default filter
