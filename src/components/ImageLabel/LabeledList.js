import React from 'react';
import {
  Box,
  Text,
} from 'grommet';

import {
  StatusGoodSmall
} from 'grommet-icons';

const LabeledList = (props) => {
  return ( 
  <Box fill align="center" pad="xsmall" background='accent-4' round='small'>
    <Box fill align="center" pad="xxsmall" background='light-4' round='small'>
      <Box align="center" pad="small" background='accent-4' round='small' fill="horizontal"> 
        Annotation
      </Box>
      {props.AnnList.map((Ann) => {
        return(
          <Box key={Ann.id} direction="row" 
            margin={{horizontal:'xxsmall', vertical:'xsmall'}}
            pad={{vertical: 'small', horizontal: 'small'}}
            onClick={() => props.setLabelSelected(Ann.name)} background='white' width='7vw' align='center' justify='between'
            >
            <Text>{Ann.name}</Text>
            <StatusGoodSmall color={Ann.color}></StatusGoodSmall>
          </Box>
        )
      })
      }
    </Box>
  </Box>
  )
}

export default LabeledList;