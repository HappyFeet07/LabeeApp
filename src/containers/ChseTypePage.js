import React, {
  useState
} from 'react';

import {
	ShieldSecurity,
  Tasks,
  User,
  Wifi,
 } from 'grommet-icons';

import TypeLayout from '../components/TypePage/TypeLayout';
import { useHistory } from 'react-router-dom';

const data = [
  {
    cnt: 1,
    icon: <Wifi size="large"/>, 
    title: "簡單圖片分類",
    subTitle: "分辨照片中是否包含目標物",
    message: "Click me",
    url: "/MsnSlcPage_Classfi"
  },
  {
    cnt: 2,
    icon: <User size="large"/>,
    title: "分類及定位",
    subTitle: "框出照片中目標物的所在位置",
    message: "Click me",
    url: "/MsnSlcPage_Locate"
  },
  {
    cnt: 3,
    icon: <Tasks size="large"/>,
    title: "分辨語言情續",
    subTitle: "分辨一段文本之情感為正面、負面或中立",
    message: "Click me",
    url: "/MsnSlcPage"
  },
  {
    cnt: 4,
    icon: <ShieldSecurity size="large"/>,
    title: "語言翻譯",
    subTitle: "簡單將句子針對特定語言翻譯",
    message: "Click me",
    url: "/imageLabel"
  }
]


const ChseTypePage = (props) => {

  const [MsnList ,setMsnList] = useState({});
  let history = useHistory()


  const demo_TenMsnList = [
    {
      MissionId: "4712",
      MissionName: "Find doggies",
      MissionType: "Classify",
      MissionReward: "250 NTD",
      MissionTarget: "Dogs",
    },
    {
      MissionId: "4713",
      MissionName: "Find piggies",
      MissionType: "Classify",
      MissionReward: "250 NTD",
      MissionTarget: "Pigs",
    },
    {
      MissionId: "4714",
      MissionName: "Find cows",
      MissionType: "Classify",
      MissionReward: "250 NTD",
      MissionTarget: "Cows",
    },
    {
      MissionId: "4715",
      MissionName: "Find duck",
      MissionType: "Classify",
      MissionReward: "250 NTD",
      MissionTarget: "Ducks",
    },
  ]

  const demo_HrMsnList = [
    {
      MissionId: "2711",
      MissionName: "Find kitties",
      MissionType: "Classify",
      MissionReward: "4500 NTD",
      MissionTarget: "Cats",
    }, 
    {
      MissionId: "2712",
      MissionName: "Find turtles",
      MissionType: "Classify",
      MissionReward: "4500 NTD",
      MissionTarget: "Turtles",
    },
    {
      MissionId: "2713",
      MissionName: "Find kitties",
      MissionType: "Classify",
      MissionReward: "4500 NTD",
      MissionTarget: "Cats",
    },
    {
      MissionId: "2714",
      MissionName: "Found kitties",
      MissionType: "Classify",
      MissionReward: "4500 NTD",
      MissionTarget: "Cats",
    },
  ]

  let handleClick = async (param) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    const raw = JSON.stringify({type: "simple", time: "10"});
    const RequestData = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    /*const TenMsnList = await fetch('http://18.163.214.85:5000/get_list', RequestData)
    .then( async (response) => {
      const test = await response.json()
      setMsnList(test)
      return test
    })
    .catch(error => {
      console.log(error)
    })
    */

    const raw1 = JSON.stringify({type: "simple", time: "10"});
    const RequestData1 = {
      method: 'POST',
      headers: myHeaders,
      body: raw1,
      redirect: 'follow'
    };
    /*const HrMsnList = await fetch('http://18.163.214.85:5000/get_list', RequestData1)
    .then( async (response) => {
      const test = await response.json()
      setMsnList(test)
      return test
    })
    .catch(error => {
      console.log(error)
    })
    */
    
    history.push({
      pathname: param, 
      state: {
        TenMsnList: demo_TenMsnList,
        HrMsnList: demo_HrMsnList
      }
    })
  }
 
  return (
		<TypeLayout
      TypeList={data}
      handleClick={handleClick}
		>
		</TypeLayout>
	)
};

export default ChseTypePage;
