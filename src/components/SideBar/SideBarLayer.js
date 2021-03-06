import React from 'react';

import {
  Layer,
  Box,
  Button
} from 'grommet';

import {
  FormClose
} from 'grommet-icons';

const SideBarLayer = (props) => {
  return (
    <Layer>
      <Box
        background='light-2'
        tag='header'
        justify='end'
        align='center'
        direction='row'
      >
        <Button
          icon={<FormClose />}
          onClick={() => props.setShowSidebar(false)}
        />
      </Box>
      <Box
        fill
        background='light-2'
        align='center'
        justify='center'
      >
        sidebar
      </Box>
    </Layer>
    );
}

export default SideBarLayer;