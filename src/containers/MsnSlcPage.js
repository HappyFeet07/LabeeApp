import React, {
  useState,
  useEffect,
} from 'react';

import {
  useHistory,
  useLocation
} from 'react-router-dom';

import MisionLayout from '../components/ChooseMisin/MisionLayout';
import TenMinTaskIcon from '../Picture/TenMinTaskIcon.png';
import HourTaskIcon from '../Picture/60.png';

const MsnSlcPage = (props) => {
  const [taskSelect, setTaskSelect] = useState(10);
  const location = useLocation()
  const [TenMisionList, setTenMisionList] = useState(
    location.state.TenMsnList
  )
  const [HrMisionList, setHrMisionList] = useState(
    location.state.HrMsnList
  )

  const [checked, setChecked] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [TextOnModal, setTextOnModal] = useState({
    MissionId: "",
    MissionName: "",
    MissionType: "",
    MissionReward: "",
    MissionTarget: "",
  })
  const history = useHistory();

  const EndTime = (length) => {
    let finish_time = new Date()
    finish_time.setMinutes(finish_time.getMinutes() + length);
    return finish_time;
  }

  const TaskOnclick = (param, type) => {
    setShowModal(true)
    setTextOnModal({
      MissionId: param.MissionId,
      MissionName: param.MissionName,
      MissionType: type,
      MissionReward: param.MissionReward,
      MissionTarget: param.MissionTarget,
    })
    console.log(param)
  }

  const TaskSelectClick = (param) => {
    switch(param) {
      case 10:
        setTaskSelect(10)
        break;
      case 60:
        setTaskSelect(60)
        break;
      default:
        setTaskSelect(10)
    }
  }

  const HandleAgree = async (param, type) => {
    const rawData = JSON.stringify({mission_id: param, count: 10});
    console.log(rawData)
    console.log(typeof(rawData))

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    const RequestData1 = {
      method: 'POST',
      headers: myHeaders,
      body: rawData,
      redirect: 'follow'
    };

    /*const ReturnList = await fetch("http://18.163.214.85:5000/get_image", RequestData1)
        .then( async (response) => {
          const res = await response.json()
          return res
        })
        .catch(error => {
          console.log(error)
        })
    */
    const ReturnList = {
      "photo_array": [
        {
          idx: 1,
          url: "https://i.imgur.com/qu0SMqf.jpeg",
          labeled: false,
          labeled_type: "",
          labeled_tag: "",
          vertices: [{}],
        },
        {
          idx: 2,
          url: "https://i.imgur.com/p2QNO4V.jpeg",
          labeled: false,
          labeled_type: "",
          labeled_tag: "",
          vertices: [{}],
        },
        {
          idx: 3,
          url: "https://i.imgur.com/qw09M6Y.jpeg",
          labeled: false,
          labeled_type: "",
          labeled_tag: "",
          vertices: [{}],
        },
        {
          idx: 4,
          url: "https://i.imgur.com/TgxMLZX.jpeg",
          labeled: false,
          labeled_type: "",
          labeled_tag: "",
          vertices: [{}],
        },
      ],
      "annotation_list": [
        {
          id: 1, 
          name: 'dog',
          color: 'blue'
        },
        {
          id: 2, 
          name: 'cat',
          color: 'red',
        }
      ]
    }
    let test = EndTime(10)
    if (checked) {
      switch (type) {
          case 'Classfi':
            console.log(ReturnList)
            history.push({
              pathname : "/ClassfiPage",
              search   : "?misin_ID=" + param,
              state    : {
                Time: test,
                ReturnList : ReturnList
              }
            })
            break;
          case 'Locate':
            history.push({
              pathname : "/imageLabel",
              search   : "?misin_ID=" + param,
              state    : {
                Time: test,
                ReturnList : ReturnList
              }
            })
            break;
          default:
            return ;
        }
    }
  }

  return(
    <MisionLayout
      TaskOnclick={TaskOnclick}
      type={props.type}
      Icons = {{
        TenMinTaskIcon : TenMinTaskIcon,
        HourTaskIcon : HourTaskIcon
      }}
      allState = {{
        showModal : showModal,
        checked : checked,
        TextOnModal : TextOnModal
      }}
      allSetState = {{
        setShowModal : setShowModal,
        setChecked : setChecked,
        setTextOnModal: setTextOnModal
      }}
      taskSelect={taskSelect}
      TaskSelectClick={TaskSelectClick}
      HrMisionList={HrMisionList}
      TenMisionList={TenMisionList}
      HandleAgree={HandleAgree}
    >
    </MisionLayout> 
  )
}

export default MsnSlcPage;