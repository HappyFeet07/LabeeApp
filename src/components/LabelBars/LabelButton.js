import React from 'react';

import {
  Box,
  Card
} from 'grommet';

const LabelButton = (props) => {
  return(
    <Box>
      <Card
        align ="center"
        margin="small"
        pad="small"
        onClick={() => {
          let newIdx = props.ClickType(props.type, props.CurImgIdx, props.length)
          console.log("new:" +newIdx)
          props.setCurImgIdx(newIdx);
        }}
        background="light-2"
        >
        {
          props.TypeIcon(props.type)
        }
      </Card>
    </Box>
  )
};

export default LabelButton;