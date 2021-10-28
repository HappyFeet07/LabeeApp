import React from 'react';

import {
  Box,
  Grid
} from 'grommet';

const LoginLayout = (props) => {
  return (
    <Box align='center'>
      <Grid
        fill    = "horizontal"
        pad     = {'xlarge'}
        rows    = {['35vh', 'xxsmall']}
        columns = {['small', 'small']}
        gap     = "large"
        areas   = {[
          { name: 'InputArea', start: [0, 0], end: [1, 0]}, 
          // { name: 'Register' , start: [0, 1], end: [0, 1]},
          // { name: 'Login'    , start: [1, 1], end: [1, 1]}
          
        ]}
      >
        <Box  gridArea='InputArea'>
          {props.data.comp}
        </Box>
      </Grid>
    </Box>
  )
}

export default LoginLayout;