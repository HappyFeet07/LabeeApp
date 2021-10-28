import { Keyboard } from 'grommet';
import { Pin } from 'grommet-icons';
import React, {
  useState,
  useEffect
} from 'react';
import { Rect } from 'react-konva';

import {
  useLocation
} from 'react-router-dom';

import ImageLocateV2 from '../components/ImageLabelV2/ImageLocateV2';

const LocatePageV2 = (props) => {
  const location = useLocation()

  // init data : ImgData 從server拿來要標的圖片, len長度, AnnList可標註選項
  const [ImgData, setImgData] = useState(location.state.ReturnList["photo_array"])
  console.log(ImgData)
  const len = ImgData.length
  const [AnnList, setAnnList] = useState(location.state.ReturnList["annotation_list"]);

  // Annotate Area
  // CurId 現在標註頁面上的圖片id, CurImg 現在標註頁面上的圖片來源, LabelSelecte現在選擇的標註類型
  const [CurId, setCurId] = useState(0);
  const [CurImg, setCurImg] = useState(ImgData[0].url);
  const [LabelSelected, setLabelSelected] = useState('?');

  // Points 點的Array, Rects 框框的點的Array, Draw 現在是不是在畫畫, Pcnt 目前有幾個點, Rcnt 目前有幾個框框
  const [Points, setPoints] = useState([]);
  const [Pcnt, setPcnt] = useState(0);
  const [Draw, setDraw] = useState(false);
  const [Rects, setRects] = useState([]);
  const [Rcnt, setRcnt] = useState(0);
  const [CurRect, setCurRect] = useState(0);
  let util = require('util')
  
  // timeLeft 剩下多少時間, timeUp 是不是已經時間到了
  const [timeLeft, setTimeLeft] = useState({
    minutes: '10',
    seconds: '00'
  })
  const [timeUp, setTimeUp] = useState(false);

  //Pcnt = 4
  // 
  //Points = [{
  //   id: Pcnt,
  //   ax: pos.x,
  //   ay: pos.y,
  // },{},{},{}]
  // 
  //Rcnt = 2
  //Rects = [{
  // Rect_Id: Rcnt,
  // Rect_color: color,
  // ax: Points[Pcnt - 1].ax,
  // ay: Points[Pcnt - 1].ay,
  // width: x - Points[Pcnt - 1].ax,
  // height: y - Points[Pcnt - 1].ay
  // }, {...}]
  //

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

    // console.log(CurRect)
    // console.log(ImgData)
    // console.log(Rects)
    // console.log(Points)
    // console.log(Rcnt)
  }, [timeUp, location, ImgData, Points, CurRect, Rects])

  // 更新矩形
  const updateRects = (x, y, type, color, Rects_id) => {
    // console.log("Rect count: " + Rcnt)
    switch (type){
      case "Init":
        if (Pcnt % 2 === 1) {
            const RArr = [...Rects]
            RArr[Rcnt] = { 
              Rect_Id: Rcnt,
              Rect_color: color,
              ax: Points[Pcnt - 1].ax,
              ay: Points[Pcnt - 1].ay,
              width: x - Points[Pcnt - 1].ax,
              height: y - Points[Pcnt - 1].ay,
              bx: x,
              by: y,
            }
            setRcnt(prev => prev +1)
            setRects(RArr)
            setDraw(prev => !prev)
            if (Rects.length > 1) {
              setCurRect(Rcnt)
              // setCurRect(prev => prev + 1)
            }
            console.log(Rects)
        }
        break;

      case "Preview":
        if (Pcnt % 2 === 1) {
          const RArr = [...Rects]
          RArr[Rcnt] = { 
              Rect_Id: Rcnt,
              Rect_color: color,
              ax: Points[Pcnt - 1].ax,
              ay: Points[Pcnt - 1].ay,
              width: x - Points[Pcnt - 1].ax,
              height: y - Points[Pcnt - 1].ay,
              bx: x,
              by: y,
            }
          setRects(RArr)
        }
        break;
      case "Modify":
        // console.log(Rects)
        let NewP =  Math.floor(Rects_id / 2)
        console.log(NewP)
        const RArr = [...Rects]
        if (Rects_id % 2 === 1) {
          console.log(NewP)
          RArr[NewP] = {
            ...RArr[NewP],
            ax: Points[NewP * 2].ax,
            ay: Points[NewP * 2].ay,
            width: x - Points[NewP * 2].ax,
            height: y - Points[NewP * 2].ay,
            bx: x,
            by: y,
          }
        } else {
          console.log(NewP)
          RArr[NewP] = {
            ...RArr[NewP],
            ax: x,
            ay: y,
            width: Points[NewP * 2 + 1].ax - x,
            height: Points[NewP * 2 + 1].ay - y,
            bx: Points[NewP * 2 + 1].ax,
            by: Points[NewP * 2 + 1].ay,
          }
        }
        console.log(RArr)
        setRects(RArr)
        break;
      default:
        break;
    }
  }

  const handleMouseDown = (e) => {
    // console.log("MouseDown")
    if (Draw) {
      const pos = e.target.getStage().getPointerPosition();
      let newArr = [...Points, {
        id: Pcnt,
        ax: pos.x,
        ay: pos.y,
      }]
      // console.log("New Point")
      setPoints(newArr)
      setPcnt(prev => prev + 1)
      updateRects(pos.x, pos.y, "Init")
    }
  };

  const handleMouseMove = (e) => {
    if (Pcnt % 2 === 1) {
      const pos = e.target.getStage().getPointerPosition();
      updateRects(pos.x, pos.y, "Preview")
    }
  }

  const tagColor = (param) => {
    if (param) {
      return param;
    }
    return 'white';
  }
  
  const UpdateTag = (tag, color) => {
    const RArr = [...Rects]
    RArr[CurRect] = {
      ...RArr[CurRect],
      Rect_color: color,
      Rect_tag: tag
    }
    // console.log(RArr)
    setRects(RArr)
    // console.log(color, tag)
  }

  const changeCurRect = (id) => {
    setCurRect(id)
    // console.log(Rects)
    console.log("Change to Rect "+id)
  }

  const UpdateRectLoc = (e, id) => {
    const pos = e.target.getStage().getPointerPosition();
    const PArr = [...Points]
    console.log(PArr)
    PArr[id] = {
      ...PArr[id],
      ax: pos.x,
      ay: pos.y,
    }
    setPoints(PArr)
    updateRects(pos.x, pos.y, "Modify",'',id)
  }

  const updateFootprint = () => {
    const newArr = [...ImgData];
    const UpdatedRect = [...Rects];
    newArr[CurId].Rects = UpdatedRect
    newArr[CurId].vertices = Points

    newArr[CurId] = {
      ...newArr[CurId],
      Rects: UpdatedRect,
      vertices: Points,
      labeled : true
    }
    setImgData(newArr)
  }

  const clearFootprint = () => {
    setPoints([])
    setRects([])
    setPcnt(0)
    setDraw(false)
    setRcnt(0)
    setCurRect(0)
  }
  
  const loadFootprint = (id) => {
    let load = ImgData[id]
    setRects(load.Rects)
    setPoints(load.vertices)
    // console.log(load)
    setPcnt(load.vertices.length)
    setRcnt(load.Rects.length)
    setCurRect(load.Rects.length)
    setDraw(true)
  }

  const deleteRect = (Rect_id) => {
    let CurPt = [...Points]
    let CurRc = [...Rects]
    console.log('RectID: '+  Rect_id * 2)
    CurPt.splice(Rect_id * 2, 2)
    CurRc.splice(Rect_id, 1)
    CurPt.forEach(item => {
      if (item.id > Rect_id * 2) {
        item.id = item.id - 2
      }
    })
    CurRc.forEach(item => {
      if (item.Rect_Id > Rect_id) {
        item.Rect_Id = item.Rect_Id - 1
      }
    })
    setPoints(CurPt)
    setRects(CurRc)
    
    setCurRect(prev => {
      if (prev - 1 >= 0) {
        return prev - 1
      }
    });
    setRcnt(prev => {
      if (prev - 1 >= 0) {
        return prev - 1
      }
    })
    setPcnt(prev => {
      if (prev - 2 >= 0) {
        return prev - 2
      }
    })
  };

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
      if (ImgData[CurId + 1].labeled === true) {
        loadFootprint(CurId + 1)
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
      // const output = util.inspect(ImgData, {depth:null})
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

  const onKeyDown = (e) => {
    console.log(e)
    switch(e.code) {
      case 'KeyQ':
        console.log('prev')
        handleImgChange('prev')
        break;
      case 'KeyE':
        console.log('next')
        handleImgChange('next')
        break;
      case 'KeyW':
        console.log('start')
        setDraw(prev => !prev)
        break;
      case 'KeyC':
        console.log('Change tool')
        break;
      case 'Digit1':
        console.log('Tag 1')
        UpdateTag(AnnList[0].name, AnnList[0].color)
        break;
      case 'Digit2':
        console.log('Tag 2')
        UpdateTag(AnnList[1].name, AnnList[1].color)
        break;
      case 'Digit3':
        console.log('Tag 3')
        UpdateTag(AnnList[2].name, AnnList[2].color)
        break;
      case 'Backspace':
        console.log('Backspace');
        deleteRect(CurRect)
        break;
      default:
        return ;
    }
  }

  return (
    <ImageLocateV2
      allState={{
        CurId: CurId,
        CurImg: CurImg,
        Points: Points,
        Rects: Rects,
        Draw: Draw,
        Pcnt: Pcnt,
        AnnList: AnnList,
        LabelSelected: LabelSelected,
        CntDwn: timeLeft,
        CurRect: CurRect,
      }}
      allSetState = {{
        setImgData: setImgData,
        setPoints: setPoints,
        setRects: setRects,
        setDraw: setDraw,
        UpdateRectLoc: UpdateRectLoc,
        setAnnList: setAnnList,
        setLabelSelected: setLabelSelected,
        setCurRect: setCurRect
      }}
      ImgData={ImgData}
      handleMouseDown={handleMouseDown}
      handleMouseMove={handleMouseMove}
      handleImgChange={handleImgChange}
      handleSubmit   ={handleSubmit}
      tagColor={tagColor}
      UpdateTag = {UpdateTag}
      onKeyDown = {onKeyDown}
      changeCurRect = {changeCurRect}
    ></ImageLocateV2>
  )
} 

export default LocatePageV2;