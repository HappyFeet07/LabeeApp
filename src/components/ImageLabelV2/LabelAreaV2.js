import React, {
  useEffect,
} from 'react';

import useImage from 'use-image';

import { 
  Stage,  Layer, 
  Rect,   Image, 
  Circle, Label,
  Tag, Text
} from 'react-konva';
const LabelAreaV2 = (props) => {

  const [CurImage] = useImage(props.src);

  return (
        <Stage
          width={window.innerWidth / 2.5}
          height={window.innerHeight/1.48}
          // width={window.innerWidth}
          // height={'100%'}
          onMouseDown={(e) => {props.handleMouseDown(e, props.Cnt)}}
          onMouseMove={(e) => {props.allState.Points[0] && props.handleMouseMove(e)}}
          // onMouseup={handleMouseUp}
        >
          <Layer>
            <Image
              key={0}
              image={CurImage}
              width={530}
              height={520}
              x={22}
              y={30}
            >
            </Image>
            { 
              props.allState.Rects.length !== 0
              &&
              props.allState.Rects.map((rect) => {
                return <Rect
                  key={'rec'+ rect.Rect_Id}
                  x={rect.ax}
                  y={rect.ay}
                  width={rect.width}
                  height={rect.height}
                  stroke={(rect.Rect_color) ? rect.Rect_color : 'white'}
                  fill={(rect.Rect_color) ? rect.Rect_color : 'white'}
                  opacity={0.4}
                  onClick={() => {props.changeCurRect(rect.Rect_Id)}}
                  onMouseOver={e => {
                      const container = e.target.getStage().container();
                      container.style.cursor = "pointer";
                  }}
                  onMouseLeave={e => {
                    const container = e.target.getStage().container();
                    container.style.cursor = "default";
                  }}
                  strokeWidth={3}
                />
            })}
            {props.allState.Points.map((points) => {
              return <Circle
                key={'Point'+ points.id}
                x={points.ax}
                y={points.ay}
                radius={5}
                stroke='2'
                draggable
                onDragMove={(e) => {
                  props.allSetState.UpdateRectLoc(e, points.id)
                }}
                fill="white"
              />
            })}
             {/* {!props.allState.Draw
             &&
              <Label x={props.allState.Points[0].ax} y={props.allState.Points[0].ay}>
                <Tag
                    fill= '#FFAA15'
                    pointerDirection= 'down'
                    pointerWidth={10}
                    pointerHeight={10}
                    lineJoin= 'round'
                />
                <Text
                    text={props.allState.LabelSelected}
                    fontFamily='Calibri'
                    fontSize={18}
                    padding={5}
                    fill='black'
                />
              </Label>
             } */}
          </Layer>
        </Stage>
  );
}

export default LabelAreaV2;