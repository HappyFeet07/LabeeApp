import React from 'react';

import {
  Card,
  Image,
} from 'grommet';

const ActionSelect = (props) => {
  
  return (
    <Card
      fill
      align="center"
      background={props.background}
      onClick={() => (props.HandleAction(props.toUrl))}
      pad={{horizontal: props.padHor}}
      justify='center'
      >
        <Image fill="horizontal" sizes="small" src={props.src}>
        </Image>
    </Card>
  )
}

export default ActionSelect;