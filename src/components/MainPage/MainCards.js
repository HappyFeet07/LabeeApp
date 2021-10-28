import React from 'react';

import {
  Box,
  Card,
  Image
} from 'grommet';

const MainCards = (props) => {
  return(
    <Card
      fill
      onClick={() => {props.handleClick(props.Pathurl)}}
      background= {props.CardColor}
    >
      <Box
        pad="medium"
      ></Box>
      <Box
        pad="large"
        margin="medium"
        align="center"
        >
        <Image
          sizes="large"
          src={props.src}
        >
        </Image>
      </Box>
    </Card>
  )
}

export default MainCards;