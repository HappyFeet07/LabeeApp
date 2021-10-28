import { 
  Card,
  Image
} from 'grommet';

import React from 'react';

const ActionCards = (props) => {
  return (
    <Card
      fill
      align="center"
      background={"white"}
      onClick={() => {props.HandleAction(props.url)}}
      pad={{horizontal: props.pad}}
      justify='center'
    >
      <Image fill="horizontal" sizes="small" src={props.src}>
      </Image>
      {props.children}
    </Card>
  )
}

export default ActionCards;