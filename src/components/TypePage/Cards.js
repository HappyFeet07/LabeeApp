import React from 'react';

import {
  useHistory
} from 'react-router-dom';

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Text
} from 'grommet';

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);

const Cards =(props) => {

  return (
  
      <Card
        fill
        key={props.message}
        onClick={() => {props.handleClick(props.to)}}
        background="white"
      >
        <CardBody 
          pad="small"
          >
          <Identifier
            pad="small"
            title={props.title}
            subTitle={props.subTitle}
            size="small"
            align="start"
          >
            {props.icon}
          </Identifier>
        </CardBody>
        <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Text size="medium">{props.message}</Text>
        </CardFooter>
      </Card>
    )
}

export default Cards;