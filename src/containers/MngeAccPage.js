import React from 'react';

import {
  useHistory
} from 'react-router-dom';

import {
  useCookies
} from 'react-cookie';

import {
  Avatar,
  Box,
  Card,
  Text
} from 'grommet';

import AccLayout  from '../components/AccountManage/AccLayout';


const AvatarAreaList = [
  {
    id: 0,
    area : 'Avatar',
    background : 'dark-4',
    comp : <Avatar fill key={1} src="https://i.imgur.com/NUyttbnb.jpg" border={{ color: 'accent-4', size: '1vw' }}></Avatar>
  },
  {
    id: 1,
    area : 'Name',
    background : 'white',
    comp : <Box alignSelf='center' justify='between'>
            <Text size='3vh'>我的名字</Text>
          </Box>,
  },
  {
    id: 2,
    area : 'Rank',
    background : 'white',
    comp : <Box alignSelf='center' justify='between'>
            <Text size='3vh'>Level: 1</Text>
          </Box>,
  },
  {
    id: 3,
    area : 'Job',
    background : 'white',
    comp : <Box alignSelf='center' justify='between'>
            <Text alignSelf='center' size='3vh'>New Bee</Text>
          </Box>,
  },
  {
    id: 4,
    area : 'Wallet',
    background : '',
    comp : <Card alignSelf='center' fill background='accent-4'>
             {/* <Text alignSelf='center' size='3vh'>New Bee</Text> */}
           </Card>,
  }
]

const MngeAccPage = (props) => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['accesstoken']);

  const HandleAction = (param) => {
    switch(param){
      case 'GoAudit':
        history.push('/')
        break
      case 'GoMisin':
        history.push('/ChooseType')
        break
      case 'brwHist':
        history.push('/BrwseHistPage')
        break
      default:
        return ;
    }
  }

  return (
    <AccLayout
      AvatarAreaList = {AvatarAreaList}
      HandleAction = {HandleAction}
    >
    </AccLayout>
  )
};

export default MngeAccPage;