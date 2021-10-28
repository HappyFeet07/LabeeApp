import React from 'react';

import {
  Box,
  Grid,
  Image,
} from 'grommet';
import MisinList from './MisinLIst';
import CheckModal from './CheckModal';

const MisionLayout = (props) => {
  return (
    <Box align="center" background='accent-4' round='medium' margin='0'>
      <Grid
      fill="horizontal"
      pad={'medium'}
      rows={['12vh','12vh', '12vh', '12vh', '12vh']}
      columns={['5vw', '50vw']}
      gap="small"
      areas={[
        { name: 'tenMisin' , start: [0, 0], end: [0, 0]},
        { name: 'hrMisin'  , start: [0, 1], end: [0, 1]},
        { name: 'MisinList', start: [1, 0], end: [1, 4]}
      ]}
      >
        <Box fill gridArea='tenMisin' round='xsmall'
          background={(props.taskSelect === 10 ? 'white' : 'dark-4')} onClick={()=>{props.TaskSelectClick(10)}}>
          <Image fit='contain' src={props.Icons.TenMinTaskIcon}></Image>
        </Box>
        <Box fill gridArea='hrMisin' round='xsmall' pad={{horizontal:'0.5vw'}}
          background={(props.taskSelect === 60 ? 'white' : 'dark-4')}  onClick={()=>{props.TaskSelectClick(60)}}>
          <Image fit='contain' src={props.Icons.HourTaskIcon}></Image>
        </Box>
        <Box fill gridArea='MisinList' background='white'  round='xsmall'>
        <Box align="center" pad="medium" gap="large">
          <Box overflow="auto" fill>
            <MisinList
              taskSelect={props.taskSelect}
              type={props.type}
              TenMisionList={props.TenMisionList}
              HrMisionList={props.HrMisionList}
              TaskOnclick={props.TaskOnclick}
            >
            </MisinList>
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </Grid>
      {props.allState.showModal 
        && 
       <CheckModal 
        checked={props.allState.checked}
        setChecked={props.allSetState.setChecked}
        TextOnModal={props.allState.TextOnModal}
        setShowModal={props.allSetState.setShowModal}
        HandleAgree={props.HandleAgree}
      ></CheckModal>}
    </Box>
  )
}

export default MisionLayout;