import React from 'react';

import {
  Box, 
  Grid
} from 'grommet';

import ActionCards  from './ActionCards';
import AuditQuest   from '../../Picture/AuditQuest.png';
import History      from '../../Picture/History.png';
import goMission    from '../../Picture/goMission.png';
import BeeWallet    from '../../Picture/Wallet.png';

const ActionScroll = (props) => {
  return (
    <Box 
      direction="row" 
      overflow={{vertical:'hidden', horizontal:'scroll'}} 
      align='center'
      pad={{horizontal: "ma"}}
      fill
      
    >
      <Grid
        rows={["60vh"]}
        columns={["22vw", "22vw", "22vw", "22vw", "22vw"]}
        gap="large"
        areas={[
          {name: "Action1", start:[0, 0], end: [0, 0]},
          {name: "Action2", start:[1, 0], end: [1, 0]},
          {name: "Action3", start:[2, 0], end: [2, 0]},
          {name: "Action4", start:[3, 0], end: [3, 0]},
          {name: "Action5", start:[4, 0], end: [4, 0]},
        ]}
      >
        <Box gridArea="Action1">
          <ActionCards src={AuditQuest} pad="medium" HandleAction={props.HandleAction} url={"GoAudit"}></ActionCards>
        </Box>
        <Box gridArea="Action2">
          <ActionCards src={goMission} pad="medium" HandleAction={props.HandleAction} url={"GoMisin"}></ActionCards>
        </Box>
        <Box gridArea="Action3">
          <ActionCards src={History} pad="3vw" HandleAction={props.HandleAction} url={"brwHist"}></ActionCards>
        </Box>
        <Box gridArea="Action4">
          <ActionCards src={BeeWallet} pad="4vw" HandleAction={props.HandleAction} url={""}></ActionCards>
        </Box>
        <Box gridArea="Action5">
          <ActionCards pad="4vw" HandleAction={props.HandleAction} url={""}> 競技場 </ActionCards>
        </Box>
      </Grid>
    </Box>
  )
}

export default ActionScroll;