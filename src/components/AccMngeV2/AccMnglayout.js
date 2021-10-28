import React from 'react';

import {
  Box,
  Grid
} from 'grommet'

import ActionScroll from './ActionScroll';
import AvatarCard from './AvatarCard'; 

const AccMnglayout = (props) => {
  return (
    <Box justify='start' pad="0">
      <Grid
        rows={["70vh"]}
        columns={["xsmall", "80vw"]}
        gap="medium"
        areas={[
          { name: "Avatar_Card" , start:[0, 0], end:[0, 0]},
          { name: "Action_Scroll", start:[1, 0], end:[1, 0]},
        ]}
      >
        <Box gridArea="Avatar_Card"  background='dark-1'>
          <AvatarCard 
            OpenCard={props.OpenCard} 
            setOpenCard={props.setOpenCard} 
            AvatarAreaList={props.AvatarAreaList}
          >
          </AvatarCard>
        </Box>
        <Box gridArea="Action_Scroll" background='dark-1'>
          <ActionScroll ActionList={props.ActionList} HandleAction={props.HandleAction}></ActionScroll>
        </Box>
      </Grid>
    </Box>

  )
}

export default AccMnglayout;