import React from 'react';

import {
  Box,
  List,
  Text,
} from 'grommet';

import {
  Trophy
} from 'grommet-icons';
 
const MisinList = (props) => {
  console.log("This is ten minute")
  console.log(props.TenMisionList)
  return (
    <List
      data={(props.taskSelect === 10 ? props.TenMisionList : props.HrMisionList)}
    >
      {(datum, index) => (
        <Box
          key={index}
          direction="row-responsive"
          gap="large"
          pad="small"
          size="medium"
          align="center"
          onClick={() => {props.TaskOnclick(datum, props.type)}}
        >
          <Trophy size="large" />
          <Text weight="bold" size='3vh'>{datum.MissionName}</Text>
          <Text weight="bold" size='2.4vh'>{datum.MissionReward}</Text>
          <Text weight="bold" size='2.4vh'>{datum.MissionTarget}</Text>
        </Box>
      )}
    </List>
  )
}

export default MisinList;