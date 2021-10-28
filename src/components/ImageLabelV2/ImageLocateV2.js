import React from 'react';

import {
  Box,
	Grid,
	Text,
	Keyboard
} from 'grommet';
import LabelArea from './LabelAreaV2';
import LabeledList from './LabeledListV2';
import CustomButton from '../Buttons';
import LabelAreaV2 from './LabelAreaV2';
import LabeledListV2 from './LabeledListV2';

const ImageLocateV2 = (props) => {
 
  return (
		<Keyboard
		target="document"
		onKeyDown={props.onKeyDown}
		>
		<Box background='white' pad='0' round='small'>
				<Grid
					pad='large'
					rows={[ '10vh','40vh', '6vh', '6vh']}
					columns={['40vw', '6vw', '6vw']}
					gap='medium'
					areas={[
						{name: 'ImageArea', start: [0, 0], end: [0, 3] },
						{name: 'CountDown', start: [1, 0], end: [2, 0] },
						{name: 'LabelList', start: [1, 1], end: [2, 1] },
						{name: 'PrevBut'  , start: [1, 2], end: [1, 2] },
						{name: 'NextBut' ,  start: [2, 2], end: [2, 2] },
						{name: 'submitBut', start: [1, 3], end: [2, 3] },
					]}
				>
					<Box gridArea='ImageArea' background='light-4' round='small' fill>
						<LabelAreaV2
							passInData={props.data}
							src={props.allState.CurImg}
							allState={{
								CurId: props.allState.CurId,
								CurImg: props.allState.CurImg,
								Points: props.allState.Points,
								Rects: props.allState.Rects,
								Draw: props.allState.Draw,
								Pcnt: props.allState.Pcnt,
								LabelSelected: props.allState.LabelSelected,
								CurRect: props.allState.CurRect,
							}}
							allSetState = {{
								setImgData: props.allSetState.setImgData,
								setPoints: props.allSetState.setPoints,
								setRects: props.allSetState.setRects,
								setDraw: props.allSetState.setDraw,
								UpdateRectLoc: props.allSetState.UpdateRectLoc,
								setCurRect: props.allSetState.setCurRect
							}}
							handleMouseDown={props.handleMouseDown}
							handleMouseMove={props.handleMouseMove}
							tagColor={props.tagColor}
							changeCurRect={props.changeCurRect}
						>
						</LabelAreaV2>
					</Box>
					<Box gridArea='CountDown' background='accent-4' round='small' pad='xsmall'>
						<Box background='light-2' fill round='small' justify='center'>
							<Text size='xxlarge' alignSelf='center' color='red' weight='bold'>{props.allState.CntDwn.minutes}:{props.allState.CntDwn.seconds}</Text>
						</Box>
					</Box>
					<Box gridArea='LabelList' background='light-4' round='small'>
						<LabeledListV2
							AnnList={props.allState.AnnList} 
							setLabelSelected={props.allSetState.setLabelSelected}
							UpdateTag = {props.UpdateTag}
							></LabeledListV2>
					</Box>
					<Box gridArea='PrevBut'   background='accent-4'  round='small'>
						<CustomButton message={"Prev"} onClick={props.handleImgChange} value={'prev'}></CustomButton>
					</Box>
					<Box gridArea='NextBut'   background='accent-4'  round='small'>
						<CustomButton message={"Next"} onClick={props.handleImgChange} value={'next'}></CustomButton>
					</Box>
					<Box gridArea='submitBut' background='#00C781' round='small'>
						<CustomButton message={"Submit"} onClick={props.handleSubmit}></CustomButton>
					</Box>
				</Grid>
			</Box>
		</Keyboard>
  )
}
export default  ImageLocateV2;
