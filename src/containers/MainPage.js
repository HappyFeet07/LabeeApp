import React from 'react';

import {
  useHistory
} from 'react-router-dom';

import MainLayout from '../components/MainPage/MainLayout';

import BecomeABee from '../Picture/BecomeAbee.png';
import ReturnToHive from '../Picture/ReturnToHive.png';

const data = [
  {
    id: 0,
    area        : 'JoinButton',
    background  : "dark-2",
    CardColor   : "light-1",
    src         : BecomeABee,
    Pathurl     : 'signup',
    // comp: <LabelButton type="Stop"/>
  },
  {
    id: 1,
    area        : 'LoginButton',
    background  : "dark-2",
    CardColor   : "light-1",
    src         : ReturnToHive,
    Pathurl     : 'login',
    // comp: <LabelButton type="Stop"/>
  },
  {
    id: 2,
    area        : 'AboutUs',
    background  : "dark-2",
    CardColor   : "light-1",
    Pathurl     : 'aboutus',
    // comp: <LabelButton type="Stop"/>
  },
  {
    id: 3,
    area        : 'TalkToCS', // Customer service
    background  : "dark-2",
    CardColor   : "light-1",
    Pathurl     : 'talktoCS',
    // comp: <LabelButton type="Stop"/>
  },
  {
    id: 4,
    area        : 'RandomStuff',
    background  : "dark-2",
    CardColor   : "light-1",
    Pathurl     : 'OtherProducts',
    // comp: <LabelButton type="Stop"/>
  }
]


const MainPage = (props) => {
  const history = useHistory();

  let handleClick = (page) => {
    console.log(page === 'signup');
    switch(page){
      case 'signup':
        history.push('/SignUp')
        break;
      case 'login':
        history.push('/Login')
        break;
      default:
        break;
    }
  }

  return (
		<MainLayout
      data={data}
      value={['SignUp', 'ChooseType']}
      handleClick={handleClick}
    ></MainLayout>
  )
};

export default MainPage;