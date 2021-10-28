import React from 'react';
import { Box, Grid, Text, Image, Meter } from 'grommet';
import {
  FormNext,
  FormPrevious
} from 'grommet-icons';

const AvatarLayouts = (props) => {
  return (
    <Grid
      pad={{horizontal: "large"}}
      rows={["xxsmall", "65%", "10%", "xxsmall"]}
      columns={["small", "small", "30%", "8%"]}
      gap="medium"
      areas={[
        {name: "top_Bar", start: [0, 0], end:[2, 0]},
        {name: "Inform" , start: [0, 1], end:[1, 2]},
        {name: "Photo"  , start: [2, 1], end:[2, 1]},
        {name: "PhotoDe", start: [2, 2], end:[2, 2]},
        {name: "bot_Bar", start: [0, 3], end:[2, 3]},
        {name: "Shrink" , start: [3, 0], end:[3, 3]}
      ]}
    >
      <Box gridArea="top_Bar" fill justify='center' background="transparent">
        <Box justify='start'>
          <Text size="xxlarge" truncate>◆◇◆◇◆Formal Worker at Labee!◆◇◆◇◆</Text>
        </Box> 
      </Box>
      <Box gridArea="Inform" background="white" fill>
        {props.AvatarAreaList[1].comp}
      </Box>
      <Box gridArea="Photo" background="white">
        <Image fit="cotain" src="https://i.imgur.com/NUyttbnb.jpg"></Image>
      </Box>
      <Box gridArea="PhotoDe" fill justify='center'>
        <Box alignSelf='center' justify='start'>
          <Meter values={[{ value: 60,}]} round='true'/>
        </Box>
      </Box>
      <Box gridArea="bot_Bar" fill justify='center' background="white">
        {/* <Box justify='start'>
          <Text size="xxlarge" truncate>◆◇◆◇◆◇◆Formal Worker at Labee!◆◇◆◇◆◇◆◇◆◇◆</Text>
        </Box> */}
      </Box>
      <Box gridArea="Shrink" fill>
        <Box direction='column' align='center' justify='center' alignSelf='center' fill onClick={() => {props.setOpenCard(prev => !prev)}}>
          <FormPrevious size="xxlarge" justify='center'></FormPrevious>
        </Box>
      </Box>

    </Grid>
  )
}

export default AvatarLayouts;