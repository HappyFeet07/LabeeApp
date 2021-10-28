import React from 'react';

import {
  Box,
  Layer,
  Button,
  Text,
  CheckBox
} from 'grommet'

const CheckModal = (props) => {
  console.log("TextOnModal:", props.TextOnModal)
  return (
    <Layer
      onClickOutside={() => {props.setShowModal(false)}}
    >
      <Box 
        width = "large"
        height = "60vh"
      >
        <Box align='center' justify='center' pad={{top:'medium'}}>
          <Text size='xlarge'>確定要選擇這個任務嗎</Text>
        </Box>
        <Box align='center' justify='center' direction="row" gap='small' pad="small" overflow="auto">
          <Text size='medium'>tags:</Text>
          <Box key={1} background="dark-3" pad={{horizontal: 'small'}} round="small">
            <Text size='small' weight='bold'>
              10 minutes
            </Text>
          </Box>
          <Box key={2} background="dark-3" pad={{horizontal: 'small'}} round="small">
            <Text size='small' weight='bold'>
              Classification
            </Text>
          </Box>
          <Box key={3} background="dark-3" pad={{horizontal: 'small'}} round="small">
            <Text size='small' weight='bold'>
              Cats and Dogs
            </Text>
          </Box>
          <Box key={4} background="dark-3" pad={{horizontal: 'small'}} round="small">
            <Text size='small' weight='bold'>
              Apple Inc.
            </Text>
          </Box>
        </Box>
        <Box pad='medium'>
          <Box align='center' justify='center' pad="small">
            任務名稱: {props.TextOnModal.MissionName}
          </Box>
          <Box align='center' justify='center' pad="small">
            任務類型: {props.TextOnModal.MissionType}
          </Box>
          <Box align='center' justify='center' pad="small">
            任務獎勵: {props.TextOnModal.MissionReward}
          </Box>
          <Box align='center' justify='center' pad="small">
            任務目標: {props.TextOnModal.MissionTarget}
          </Box>
        </Box>
        <Box align='center' justify='center' pad='small'>
          <CheckBox checked={props.checked} label="同意喇哪次不同意" onChange={(event) => props.setChecked(event.target.checked)}/>
        </Box>
        <Box direction="row" justify='center' gap="medium">
          <Button label="NO NO NO NO" size="medium" onClick={() => props.setShowModal(false)}/>
          <Button label="YES YES YES" size="medium" onClick={() => props.HandleAgree(props.TextOnModal.MissionId, props.TextOnModal.MissionType)}/>
        </Box>
      </Box>
    </Layer>
    )
}

export default CheckModal;