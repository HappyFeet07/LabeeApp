import React from 'react';

import {
  Card,
  Text
} from 'grommet';

const CustomButton = (props) => {

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.value)
    }
  }
  return (
    <Card
      fill
      align="center"
      background={props.background}
      onClick={handleClick}
      >
      <Text
        alignSelf="center"
        margin="small"
        >
        {props.message}
      </Text>
    </Card>
  )
}

export default CustomButton;