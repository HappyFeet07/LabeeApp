import React from 'react';

import {
  Box,
  DropButton
} from 'grommet';

import {
  Menu,
  CircleQuestion
} from 'grommet-icons';

const ImageTop = (props) => {
  return (
    <Box
      direction='row'
      justify='between'
      style={{ zIndex: '1' }}
    >
      <Box>
      </Box>
      <Box
        margin='0'
        pad='xsmall'
        height='4.8vh'
        width='5vw'
        background='accent-4'
        round={{corner: 'bottom', size:'xsmall'}}
        align='center'
      >
        <DropButton
          dropAlign={{ top: 'bottom', right: 'right' }}
          dropContent={
            <Box pad="large" background="light-2" />
          }
        >
          <Menu/>
        </DropButton>
      </Box>
      <Box
        alignSelf='end'
        margin='xsmall'
        onClick={() => {}}
      >
        <CircleQuestion color='white' size='40vh'/>
      </Box>
    </Box>
  )
}

export default ImageTop;