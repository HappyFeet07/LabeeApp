import React from 'react';

import {
  Box,
  List,
  Text,
} from 'grommet';

import {
  Trophy
} from 'grommet-icons';

const HistoryList = (props) => {
  return (
    <List
      data={props.data}
    >
      {(datum, index) => (
        <Box
          key={index}
          direction="row-responsive"
          gap="large"
          pad="small"
          size="medium"
          align="center"
          onClick={() => {}}
        >
          <Trophy size="large" />
          <Text weight="bold" size='3vh'>{datum.name}</Text>
          <Text weight="bold" size='2.4vh'>{datum.salary}</Text>
          <Text weight="bold" size='2.4vh'>{datum.target}</Text>
        </Box>
      )}
    </List>
  )
}

export default HistoryList;