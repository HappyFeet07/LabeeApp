import React from 'react';

import {
  Box,
  Grid
} from 'grommet';

const SignUpLayout = (props) => {
  return (
    <Box align="center">
      <Grid
      fill="horizontal"
      pad={'large'}
      rows={['6vh','60vh', 'xxsmall']}
      columns={['medium']}
      gap="medium"
      areas={[
        { name: 'title' , start: [0, 0], end: [0, 0]},
        { name: 'profile'  , start: [0, 1], end: [0, 1]},
        { name: 'submitbut', start: [0, 2], end: [0, 2]}
      ]}
      >
        <Box fill gridArea='title'>
          {props.data[0].comp}
        </Box>
        <Box fill gridArea='profile'  >
          {props.data[1].comp}
        </Box>
        <Box fill gridArea='submitbut'>
          {props.children}
        </Box>
        {/* {
          props.data.map((value) => (
            <Box
              gridArea={value.area}
              // background={value.background}
            >
              {value.comp}
            </Box>
          ))
        } */}
      </Grid>
    </Box>
  )
}

export default SignUpLayout;