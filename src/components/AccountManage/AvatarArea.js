import React from 'react';

import { 
  Box,
  Grid,
  Meter,
} from 'grommet';

const AvatarArea = (props) => {
  const value = 50;
  return (
    <Box align='center'>
      <Grid
        fill={"horizontal"}
        rows={['5vh', '5vh', '5vh']}
        columns={['11vw', 'small', 'small', '10vw']}
        gap="20px"
        areas={[
          { name: 'Avatar'   , start:[0, 0], end:[0, 2]},
          { name: 'Name'     , start:[1, 0], end:[2, 0]},
          { name: 'Job'      , start:[1, 1], end:[1, 1]},
          { name: 'Rank'     , start:[2, 1], end:[2, 1]},
          { name: 'expBar'   , start:[1, 2], end:[2, 2]},
          { name: 'Wallet'   , start:[3, 0], end:[3, 2]},
        ]}
      >
        {
          props.AvatarAreaList.map(value => (
            <Box key={value.id} gridArea={value.area} background={value.background} align="center" justify='center'>
              {value.comp}
            </Box>
          ))
        }
        <Meter key={1} gridArea='expBar'  margin={{"vertical":'small'}} round={true}
        thickness="medium" size='large' type="bar" background="light-2" values={[{ value }]} />
      </Grid>
    </Box>
  )
}

export default AvatarArea;