import React, {
  useState,
  useEffect
} from 'react';

import {
  Rect
} from 'react-konva';

import {
  useLocation
} from 'react-router-dom';

import ImageLocate from '../components/ImageLabel/ImageLocate';
// {
//   id: , name: , x: , y: ,
// }
// const data = [
//   {
// 		id: 0,
//     url:'https://i.imgur.com/AD3MbBib.jpg',
//     labeled: false,
//     labeled_type: '',
// 		vertices: [{}],
//   },
//  ]

const LocatePage = (props) => {
  const location = useLocation()

  // init data : ImgData 從server拿來要標的圖片, len長度, AnnList可標註選項
  const [ImgData, setImgData] = useState(location.state.ReturnList["photo_array"])
  const len = ImgData.length
  const [AnnList, setAnnList] = useState(location.state.ReturnList["annotation_list"]);

  // Annotate Area
  // CurId 現在標註頁面上的圖片id, CurImg 現在標註頁面上的圖片來源, LabelSelecte現在選擇的標註類型
  const [CurId, setCurId] = useState(0);
  const [CurImg, setCurImg] = useState(ImgData[0].url);
  const [LabelSelected, setLabelSelected] = useState('?');

  // Points 點的Array, Rects 框框的點的Array, Draw 現在是不是在畫畫, Pcnt 目前有幾個點
  const [Points, setPoints] = useState([]);
  const [Rects, setRects] = useState([]);
  const [Draw, setDraw] = useState(true);
  const [Pcnt, setPcnt] = useState(0);
  
  // timeLeft 剩下多少時間, timeUp 是不是已經時間到了
  const [timeLeft, setTimeLeft] = useState({
    minutes: '10',
    seconds: '00'
  })
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const CntDwnInterval = () => {
      const CurTime = new Date();
      const LeftTime = location.state.Time - CurTime;
      let minutes = Math.floor((LeftTime / 1000 / 60) % 60).toString();
      let seconds = Math.floor((LeftTime / 1000) % 60).toString();
      if (minutes <= 0 && seconds <= 0) {
        setTimeUp(true)
        return 0;
      }
      if (minutes.length < 2) {
        minutes = '0' + minutes
      }
      if (seconds.length < 2) {
        seconds = '0' + seconds
      }
      setTimeLeft({
        minutes: minutes,
        seconds: seconds
      })
      // console.log(ImgData)
      return 1;
    }
    // console.log(ImgData)
   setInterval(() => 
      {
        if(!timeUp) {
          const id = CntDwnInterval()
          if (id === 0) {
            clearInterval(id)
          }
        }
      }, 1000)
    if (timeUp) {
      setTimeLeft({
        minutes: '00',
        seconds: '00'
      })
    }
    console.log(Points)
  }, [timeUp, location, ImgData, Points])

  // 更新舉行
  const updateRects = (x, y, type) => {
    switch (type){
      case "Init":
        if (Points[0]){
          const RArr = [...Rect]
          RArr[0] = {
            ...RArr[0],
            ax: Points[0].ax,
            ay: Points[0].ay,
            width: x - Points[0].ax,
            height: y - Points[0].ay
          }
          setRects(RArr)
        }
        break;
      
      case "Update":
        console.log("Update")
        const RArr = [...Rect]
        RArr[0] = {
          ...RArr[0],
          ax: Points[0].ax,
          ay: Points[0].ay,
          width: Points[1].ax - Points[0].ax,
          height: Points[1].ay - Points[0].ay
        }
        setRects(RArr)
        break;
      default:
        break;
    }
  }

  const handleMouseDown = (e) => {
    const pos = e.target.getStage().getPointerPosition();
    if(Draw) {
      let newArr = [...Points, {
        id: Pcnt,
        ax: pos.x,
        ay: pos.y,
      }]
      setPoints(newArr)
      setPcnt(prev => prev + 1)
    }
    if(Pcnt === 1) {
      setDraw(false);
      const newArr = [...Rects, {
        id: Pcnt,
        ax: Points[0].ax,
        ay: Points[0].ay,
        width: pos.x - Points[0].ax,
        height: pos.y - Points[0].ay
      }]
      setRects(newArr)
    }
  };

  const handleMouseMove = (e) => {
    if (Pcnt === 1) {
      const pos = e.target.getStage().getPointerPosition();
      updateRects(pos.x, pos.y, "Init")
    }
  }

  const setRectLoc = (e, id) => {
    const pos = e.target.getStage().getPointerPosition();
    const PArr = [...Points]
    console.log(PArr)
    PArr[id] = {
      ...PArr[id],
      ax: pos.x,
      ay: pos.y,
    }
    setPoints(PArr)
    updateRects(0, 0, "Update")
  }

  const updateFootprint = () => {
    const newArr = [...ImgData];
    if (Draw === false) {
      newArr[CurId] = {
        ...newArr[CurId],
        vertices: [{
          x: Points[0].ax,
          y: Points[0].ay,
        }, {
          x: Points[1].ax,
          y: Points[1].ay
        }],
        labeled_tag: LabelSelected,
        labeled: true,
      }
    }
    setImgData(newArr)
  }

  const clearFootprint = () => {
    setPoints([])
    setRects([])
    setDraw(true)
  }
  
  const loadFootprint = (id) => {
    let load = ImgData[id].vertices
    console.log('load data')
    console.log(ImgData)
    console.log(load[0])
    console.log(load[1])
    if (load.length > 1) {
      const newArr = [{
        id: id,
        ax: load[0].x,
        ay: load[0].y,
        width: load[1].x - load[0].x,
        height: load[1].y - load[0].y
      }]
      setPoints([{
        id: 0,
        ax: load[0].x,
        ay: load[0].y
      }, {
        id: 1,
        ax: load[1].x,
        ay: load[1].y
      }])
      setRects(newArr)
    }
  }

  const handleImgChange = (param) => {
    if (param === 'next') {
      ///init
      if(CurId + 1 === len) {
        updateFootprint()
        return;
      }
      updateFootprint()
      clearFootprint()
      setCurId(CurId + 1)
      setCurImg(ImgData[CurId+1].url)
      setPcnt(0)
      if (ImgData[CurId + 1].labeled_tag === "") {
        setLabelSelected('?')
        setDraw(true)
      } else {
        loadFootprint(CurId + 1)
        console.log(ImgData[CurId + 1].labeled_tag)
        setDraw(false)
        setLabelSelected(ImgData[CurId + 1].labeled_tag)
      }
    }
    if (param === 'prev' && CurId - 1 >= 0) {
      updateFootprint()
      clearFootprint()
      setCurId(CurId - 1)
      setCurImg(ImgData[CurId - 1].url)
      setPcnt(0)
      loadFootprint(CurId - 1)
      if (ImgData[CurId - 1].labeled_tag === "") {
        setDraw(true)
        setLabelSelected('?')
      } else {
        setDraw(false)
        setLabelSelected(ImgData[CurId-1].labeled_tag)
      }
    }
  }

  const handleSubmit = async () => {
    const check = (ele) => {
      return ele.labeled === true;
    }
    const finish = ImgData.every(check);
    console.log(ImgData)
    if (finish) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Access-Control-Allow-Origin", "*");
      const output = JSON.stringify(ImgData);
      const RequestData1 = {
        method: 'POST',
        headers: myHeaders,
        body: output,
        redirect: 'follow'
      };
      console.log("Step1")
      const result = await fetch("http://18.163.214.85:5000/submit_result", RequestData1)
        .then( async (response) => {
          const res = await response.json()
          console.log(res)
          console.log("Step2")
          return res
        })
        .catch(error => {
          console.log("Fucking error")
          console.log(error)
          return error;
        })
      console.log("Hello")
      return result;
    } else {
      console.log("not finish yet!")
    }
  }

  const tagColor = (param) => {
    if (param) {
      return param;
    }
    return 'red';
  }

  return (
    <ImageLocate
      allState={{
        CurId: CurId,
        CurImg: CurImg,
        Points: Points,
        Rects: Rects,
        Draw: Draw,
        Pcnt: Pcnt,
        AnnList: AnnList,
        LabelSelected: LabelSelected,
        CntDwn: timeLeft
      }}
      allSetState = {{
        setImgData: setImgData,
        setPoints: setPoints,
        setRects: setRects,
        setDraw: setDraw,
        setRectLoc: setRectLoc,
        setAnnList: setAnnList,
        setLabelSelected: setLabelSelected
      }}
      ImgData={ImgData}
      handleMouseDown={handleMouseDown}
      handleMouseMove={handleMouseMove}
      handleImgChange={handleImgChange}
      handleSubmit   ={handleSubmit}
      tagColor={tagColor}
    ></ImageLocate>
  )
} 

export default LocatePage;