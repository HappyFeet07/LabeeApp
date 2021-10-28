import React, { Fragment } from 'react';

import AvatarIcon from './AvatarIcon';
import AvatarLayouts from './AvatarLayouts';

import {
  Avatar ,Box, Button, Layer, Image, Text
} from 'grommet';

import {
  FormNext,
  Configure,
  Group,
  History
} from 'grommet-icons';

const AvatarCard = (props) => {
  return (
    <Fragment>
      {(props.OpenCard) ? 
      (
        <Layer modal={false} plain position="left" animation={"slide"}>
          <Box>
            <Box height="9vh">
              <Text></Text>
            </Box>
            <Box height="63vh" width="13vw" round={{corner:"right", size:"large"}} background="#00739D" pad={{top: '15%', left: '20%'}} direction="row" gap="small">
              <Box width="7vw" height="55vh">
                <Box gap="large">
                  <AvatarIcon>
                    <Image src="https://i.imgur.com/NUyttbnb.jpg"/>
                  </AvatarIcon>
                  <AvatarIcon>
                    <Configure size="large"/>
                  </AvatarIcon>
                  <AvatarIcon>
                    <Group size="large"/>
                  </AvatarIcon>
                  <AvatarIcon>
                    <History size="large"/>
                  </AvatarIcon>
                </Box>
              </Box>
              <Box width="3vw" height="55vh" margin={{right: '2vw'}} justify='center' onClick={() => {props.setOpenCard(prev => !prev)}}>
                <FormNext size="large"></FormNext>
              </Box>
            </Box>
          </Box>
        </Layer>
      )
      :
      (
         <Layer modal={false} plain position="left" animation={"slide"}>
          <Box>
            <Box height="9vh"></Box>
            <Box height="63vh" width="55vw" round={{corner:"right", size:"large"}} background="#00739D" pad={{top: '5%'}}>
              <AvatarLayouts 
                setOpenCard={props.setOpenCard} 
                AvatarAreaList={props.AvatarAreaList}
              ></AvatarLayouts>
            </Box>
          </Box>
        </Layer>
      )
      }
    </Fragment>
  )
}

export default AvatarCard;