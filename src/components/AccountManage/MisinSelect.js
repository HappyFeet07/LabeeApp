import React from 'react';

import {
  Box, Grid,
} from 'grommet';

import ActionSelect from './ActionSelect';
import AuditQuest   from '../../Picture/AuditQuest.png';
import History      from '../../Picture/History.png';
import goMission    from '../../Picture/goMission.png';

const MisinSelect = (props) => {
  return (
    <Box alignSelf='center'>
      <Box>
        <Grid
          fill
          rows={['40vh']}
          columns={['15vw', '15vw', '15vw']}
          gap="4vw"
          areas={[
            { name: 'GoAudit', start: [0, 0], end: [0, 0]},
            { name: 'GoMisin', start: [1, 0], end: [1, 0]},
            { name: 'brwHist', start: [2, 0], end: [2, 0]}
          ]}
        >
          <Box gridArea='GoAudit'>
            <ActionSelect 
              background='white'
              src={AuditQuest}
              HandleAction={props.HandleAction}
              toUrl='GoAudit'
              padHor={'30px'}
              >
            </ActionSelect>
          </Box>
          <Box gridArea='GoMisin' onClick={()=>{}}>
            <ActionSelect
              background='light-2'
              src={goMission}
              HandleAction={props.HandleAction}
              toUrl='GoMisin'
              padHor={'30px'}
              >
            </ActionSelect>
          </Box>
          <Box gridArea='brwHist' onClick={()=>{}}>
            <ActionSelect
              background='light-2'
              src={History}
              HandleAction={props.HandleAction}
              toUrl='brwHist'
              padHor={'40px'}
              >
            </ActionSelect>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default MisinSelect;