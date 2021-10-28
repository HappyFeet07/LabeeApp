import React, {
} from 'react';

import {
  Box,
  Layer,
  Button,
  Text
} from 'grommet';

const PopupModal = (props) => {

  return (props.Modalshow &&
      <Layer
          onEsc={() => props.setModalshow(false)}
          onClickOutside={() => props.setModalshow(false)}
      >
        <Box width='10vw' height='10vh'>
          <Text>
            {props.children}
          </Text>
        </Box>
      </Layer>
  )
}

export default PopupModal;