import React,{
  useState,
  useEffect
} from 'react';

import {
  useHistory
} from 'react-router-dom';

import {
  Next,
  Previous,
  Checkmark,
  Close,
  Stop
} from 'grommet-icons';

import LabelLayout from '../components/LabelBars/LabelLayout';
import ListBar from '../components/LabelBars/ListBar';
import LabelButton from '../components/LabelBars/LabelButton';
import ImageArea from '../components/LabelBars/ImageArea';
import FindNothing from '../Picture/FindNothing.png';
import { Button } from 'grommet';

const imageList = [
  {
    idx: 0,
    imageID: 'Head',
    imageName: 'Head',
    status: true,
    src: FindNothing,
    prev: null,
    next: null,
  },
  {
    idx: 1,
    imageID: 'image1',
    imageName: 'photo1',
    status: true,
    src: "http://18.163.214.85:5000/image?number=52346363",
    prev: null,
    next: 2,
  },
  {
    idx: 2,
    imageID: 'image2',
    imageName: 'image2',
    status: false,
    src: "http://18.163.214.85:5000/image?number=49382952",
    prev: 1,
    next: 3,
  },
  {
    idx: 3,
    imageID: 'image3',
    imageName: 'image3',
    status: false,
    src: "http://18.163.214.85:5000/image?number=79531862",
    prev: 2,
    next: 4,
  },
  {
    idx: 4,
    imageID: 'image4',
    imageName: 'image4',
    status: false,
    src:"",
    prev: 3,
    next: 5,
  },
  {
    idx: 5,
    imageID: 'image5',
    imageName: 'image5',
    status: false,
    src:"",
    prev: 4,
    next: 6,
  },
  {
    idx: 6,
    imageID: 'image6',
    imageName: 'image6',
    status: false,
    src:"",
    prev: 5,
    next: 7,
  },
  {
    idx: 7,
    imageID: 'image7',
    imageName: 'image7',
    status: false,
    src:"",
    prev: 6,
    next: 9,
  },
  {
    idx: 8,
    imageID: 'image8',
    imageName: 'image8',
    status: false,
    src:"",
    prev: 7,
    next: 9,
  },
  {
    idx: 9,
    imageID: 'image9',
    imageName: 'image9',
    status: false,
    src:"",
    prev: 8,
    next: 10,
  },
  {
    idx: 10,
    imageID: 'image10',
    imageName: 'image10',
    status: false,
    src:"",
    prev: 9,
    next: 11,
  },
  {
    idx: 11,
    imageID: 'image11',
    imageName: 'image11',
    status: false,
    src:"",
    prev: 10,
    next: 12,
  },
  {
    idx: 12,
    imageID: 'image12',
    imageName: 'image12',
    status: false,
    src:"",
    prev: 11,
    next: 13,
  },
  {
    idx: 13,
    imageID: 'image13',
    imageName: 'image13',
    status: false,
    src:"",
    prev: 12,
    next: 14,
  },
  {
    idx: 14,
    imageID: 'image14',
    imageName: 'image14',
    status: false,
    src:"",
    prev: 13,
    next: 15,
  },
  {
    idx: 15,
    imageID: 'image15',
    imageName: 'image15',
    status: false,
    src:"",
    prev: 14,
    next: 16,
  },
  {
    idx: 16,
    imageID: 'image16',
    imageName: 'image16',
    status: false,
    src:"",
    prev: 15,
    next: null,
  },
];

const ClassfiPage = (props) => {
  
  let imageLen = imageList.length
  const history = useHistory()
  const [CurImg, setCurImg] = useState(FindNothing);
  const [CurImgIdx, setCurImgIdx] = useState(1);
  const [FinishLabel, setFinishLabel] = useState(false);

  useEffect(() => {
    if(CurImgIdx <= 0) {
      setCurImg(FindNothing)
      setCurImgIdx(0)
    }else {
      setCurImg(imageList[CurImgIdx].src)
      if (CurImgIdx === imageLen - 1) {
        setFinishLabel(true);
      }
    }
  },[CurImgIdx, imageLen])


  const ClickType = (param, ori, len) => {
    let newNum;
    switch(param) {
      case 'Previous':
        if(ori-1 - 1 < 0) {
          return ori;
        }
        newNum = ori - 1;
        return newNum;
      case 'Next':
        if(ori-1 + 2 >= len){
          return ori;
        }
        newNum = ori + 1;
        return newNum;
      default:
        return ori;
    }
  }

  const Type = (param) => {
    switch(param) {
      case 'Next':
        return <Next/>
      case 'Previous':
        return <Previous/>
      case 'Checkmark':
        return <Checkmark/>
      case 'Close':
        return <Close/>
      case 'Stop':
        return <Stop/>
      default :
        return '';
    }
  }

  const data = [
    {
      area: 'left-bar',
      background: "dark-2",
      comp: <ListBar
              imageList={imageList} 
              curImg={CurImg} 
              changeImg={setCurImg}
              CurImgIdx={CurImgIdx}
              setCurImgIdx={setCurImgIdx}
            />,
    },
    {
      area: 'image-area',
      background: "dark-2",
      comp: <ImageArea src={CurImg}></ImageArea>
      // comp: (test ? (<ImageArea src={CurImg}></ImageArea>) : (<ImageArea src="http://18.163.214.85:5000/image?number=49382952"></ImageArea>))
    },
    {
      area: 'judge-prev',
      background: "dark-1",
      comp: <LabelButton
              type="Previous"
              CurImgIdx={CurImgIdx}
              setCurImgIdx={setCurImgIdx}
              ClickType={ClickType}
              TypeIcon={Type}
              length={imageLen}
            />
    },
    {
      area: 'judge-true',
      background: "dark-1",
      comp: <LabelButton
              type="Close"
              curImg={()=>{}}
              OnClick={()=>{}}
              CurImgIdx={()=>{}}
              setCurImgIdx={()=>{}}
              TypeIcon={Type}
            />
    },
    {
      area: 'judge-neut',
      background: "dark-1",
      comp: <LabelButton
              type="Stop"
              curImg={()=>{}}
              OnClick={()=>{}}
              CurImgIdx={()=>{}}
              setCurImgIdx={()=>{}}
              TypeIcon={Type}
            />
    },
    {
      area: 'judge-fals',
      background: "dark-1",
      comp: <LabelButton
              type="Checkmark"
              curImg={()=>{}}
              OnClick={()=>{}}
              CurImgIdx={()=>{}}
              setCurImgIdx={()=>{}}
              TypeIcon={Type}
            />
  
    },
    {
      area: 'judge-next',
      background: "dark-1",
      comp: (FinishLabel
              ?
              (<Button
                primary
                margin="small"
                size='large'
                type='submit'
                label='Submit!'
                onClick={() => {
                  history.push('/')
                }}
              >
              </Button>)
              :
              (<LabelButton 
                type="Next"
                CurImgIdx={CurImgIdx}
                setCurImgIdx={setCurImgIdx}
                ClickType={ClickType}
                TypeIcon={Type}
                length={imageLen}
              />) 
              )
    },
  ]

  return ( 
		<LabelLayout
      scope={data}
      imageList={imageList}
      length={imageLen}
		>
		</LabelLayout>
	)
};

export default ClassfiPage;
