import React from 'react';

import {
  Box,
  Image,
} from 'grommet';

import {
} from 'grommet-icons';

import ImageTop from './ImageTop';

const ImageArea = (props) => {
  return(
    <Box
      fill
      background='accent-4'
      round='small'
      pad='xsmall'
    >
      <Box
        fill
        background='light-4'
        round='small'
        margin='0'
        style={{'position':'relative'}}
      >
        <ImageTop/>
        <Box
          fill
          style={{ zIndex: '0', 'position':'absolute' }}
          round='small'
        >
          <Image
            fit='contain'
            src={props.src}
          >
          </Image>
        </Box>
      </Box>
    </Box>
    )
};

export default ImageArea;