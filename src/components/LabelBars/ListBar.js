import React from 'react';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  InfiniteScroll,
  Text
} from 'grommet';

import {
  FormFolder,
} from 'grommet-icons';

import LabelItems from './LabelItems';

const ListBar = (props) => {
  
  return (
    <Box 
      fill 
      round="small" 
      pad="xsmall" 
      background="brand">
      <Card fill>
        <CardBody 
          pad="xxsmall" 
          background="light-4"
          round="small"
          >
          <CardHeader
            pad="5%"
            margin="1%"
            background="brand"
            round="small">
            <FormFolder
              size="30%"
            />
            <Text
              size="medium"
              weight="bold"
              margin="xxsmall"
            >Work List</Text>
          </CardHeader>
          <Box 
            fill
            overflow="auto"
            gap='small'
            direction='column'
          >
            <InfiniteScroll items={props.imageList}>
              {(item) => {
                return(
                  <LabelItems
                    idx={item.idx}
                    handleOnclick={props.changeImg} 
                    src={item.src}
                    setCurImgIdx={props.setCurImgIdx}
                  > 
                    {item.imageName}
                  </LabelItems>
                )}
              }
            </InfiniteScroll>
          </Box>
        </CardBody>
      </Card>
    </Box>
  )
};

export default ListBar;