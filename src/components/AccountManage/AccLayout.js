import React from 'react';

import {
  Box,
  Grid,
} from 'grommet';

// import {
//   SettingsOption
// } from 'grommet-icons';

import AvatarArea  from './AvatarArea';
import MisinSelect from './MisinSelect';

const AccLayout = (props) => {
  // const borderSmall = { color: 'white', size: 'small' };
  return (
    <Box
      align='center'
    >
      <Grid
        fill="horizontal"
        pad={'large'}
        rows={['30vh','40vh']}
        columns={['medium', 'medium']}
        gap="large"
        areas={[
          { name: 'Avatar_area' , start:[0, 0], end:[1, 0]},
          { name: 'MisinSelect' , start:[0, 1], end:[1, 1]},
          // { name: 'Data_area'   , start:[0, 2], end:[1, 2]}
        ]}
      >
        <Box gridArea="Avatar_area" background="dark-4" align='center' justify='center'>
          <AvatarArea
            AvatarAreaList={props.AvatarAreaList}
          ></AvatarArea>
        </Box>
        <Box gridArea="MisinSelect" background="dark-1">
          <MisinSelect
            HandleAction={props.HandleAction}
          ></MisinSelect>
        </Box>
      </Grid>
    </Box>
  )
};

export default AccLayout;