import React from 'react';

import {
  Box,
  Grid,
} from 'grommet';

const LabelLayout = (props) => {
  return (
    <Grid
      fill   = "horizontal"
      pad    = {'xlarge'}
      rows   = {['55vh', '10vh']}
      columns= {['3%','20%', '13%', '13%', '13%', '13%', '13%']}
      gap    = "medium"
      areas  = {[
        { name: 'left-bar'  , start: [1, 0], end: [1, 1] },
        { name: 'image-area', start: [2, 0], end: [6, 0] },
        { name: 'judge-prev', start: [2, 1], end: [2, 1] },
        { name: 'judge-true', start: [3, 1], end: [3, 1] },
        { name: 'judge-neut', start: [4, 1], end: [4, 1] },
        { name: 'judge-fals', start: [5, 1], end: [5, 1] },
        { name: 'judge-next', start: [6, 1], end: [6, 1] },
      ]}
    >
      {
        props.scope.map((value) => {
          return(
            <Box
              gridArea={value.area}
              background={value.background}
            >
              {value.comp}
            </Box>
          )
        }
      )}
    </Grid>
  )
}

export default LabelLayout;