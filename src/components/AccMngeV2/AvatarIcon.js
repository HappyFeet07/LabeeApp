import React from 'react';

import {
  Avatar,
  Box
} from 'grommet';

const AvatarIcon = (props) => {
  return (
    <Box>
      <Avatar background="accent-4" size="large">
        {props.children}
      </Avatar>
    </Box>
  )
}

export default AvatarIcon;