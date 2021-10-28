import React from 'react';

import {
  Box,
  Text
} from 'grommet';


const LabelItems = (props) => {
  return (
    <Box
      align="center"
      flex={false}
      pad="medium"
      margin='small'
      onClick={() => {
          props.handleOnclick(props.src)
          props.setCurImgIdx(props.idx)
        }}
      background="light-2"
      >
      <Text  weight="bold" size="medium" overflow="auto">
        {props.children}
      </Text>
    </Box>
  )
}

export default LabelItems;