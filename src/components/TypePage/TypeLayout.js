import React from 'react';

import {
  Box,
  Grid,
} from 'grommet';

import Cards from './Cards';

const TypeLayout = (props) => {
  return (
    <Grid
      fill={"horizontal"}
      pad={'xlarge'}
      rows={['xxsmall', 'medium']}
      columns={['22%', '22%', '22%', '22%']}
      gap="large"
      areas={[
        { name: 'top-blank', start: [0, 0], end: [3, 0] },
        { name: 'card1', start: [0, 1], end: [0, 1] },
        { name: 'card2', start: [1, 1], end: [1, 1] },
        { name: 'card3', start: [2, 1], end: [2, 1] },
        { name: 'card4', start: [3, 1], end: [3, 1] },
      ]}
    >
      <Box gridArea="top-blank" background="light">選擇您要標註的種類</Box>
        { 
          props.TypeList.map((value) => (
            <Box gridArea={"card" + value.cnt} key={value.cnt}>
              <Cards
                icon={value.icon}
                title={value.title}
                subTitle={value.subTitle} 
                message={value.message}
                to={value.url}
                handleClick={props.handleClick}
                ></Cards>
            </Box>
        ))}
    </Grid>
  )
}

export default TypeLayout;