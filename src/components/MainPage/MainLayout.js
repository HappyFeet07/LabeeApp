import React from 'react';

import {
  Box,
  Grid
} from 'grommet';

import MainCards from './MainCards';

const areaArray = [
  { name: 'LeftEmpty'   ,  start: [0, 0] , end: [0, 1]},
  { name: 'JoinButton' ,  start: [1, 0] , end: [3, 0]},
  { name: 'LoginButton'  ,  start: [4, 0] , end: [6, 0]},
  { name: 'AboutUs'     ,  start: [1, 1] , end: [2, 1]},
  { name: 'TalkToCS'    ,  start: [3, 1] , end: [4, 1]},
  { name: 'RandomStuff' ,  start: [5, 1] , end: [6, 1]},
  { name: 'RightEmpty'  ,  start: [7, 0] , end: [7, 1]},
]

const MainLayout = (props) => {
  return (
    <Grid
      fill   = "horizontal"
      pad    = {"large"}
      rows   = {['60vh', '10vh']}
      columns= {['16%', 'xsmall', 'xsmall', 'xsmall',
                 'xsmall', 'xsmall', 'xsmall', '16%']}
      gap    = {"large"}
      areas  = {areaArray}
    >
      {
        props.data.map((value) => {
          return(
            <Box
              key={value.id}
              gridArea={value.area}
              background={value.background}
            >
              <MainCards
                CardColor={value.CardColor}
                src={value.src}
                Pathurl={value.Pathurl}
                handleClick={props.handleClick}
              >
              </MainCards>
            </Box>
          )
        })
      }
    </Grid>
  )
}

export default MainLayout;