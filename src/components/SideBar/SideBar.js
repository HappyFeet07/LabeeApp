import React from 'react';

import {
  Box,
  Collapsible,
  Grid,
} from 'grommet';

const SideBar = (props) => {
  return (
    <Collapsible direction="horizontal" open={props.show}>
      <Box
        flex
        width='240px'
        background='dark-3'
        elevation='small'
        align='center'
        justify='center'
      >
        <Grid
          fill="horizontal"
          pad={'medium'}
          rows={['xsmall', 'xsmall', 'xsmall', 'xsmall', 'xsmall']}
          columns={['small']}
          gap="large"
          areas={[
            { name: 'avatar' , start: [0, 0], end: [0, 0] },
            { name: 'blank'  , start: [0, 1], end: [0, 2] },
            { name: 'balance', start: [0, 3], end: [0, 4] },
          ]}
        >
          <Box gridArea='avatar'  background="dark-4"></Box>
          <Box gridArea='blank'   background="dark-4"></Box>
          <Box gridArea='balance' background="dark-4"></Box>

        </Grid>
      </Box>
    </Collapsible>
  );
}

export default SideBar;