import React, {
  useState,
  useEffect,
} from 'react';

import {
  useHistory
} from 'react-router-dom';

import {
  useCookies
} from 'react-cookie';

import {
  Box,
  Button,
} from 'grommet';

import CustomButton from '../components/Buttons';
import LoginLayout from '../components/LoginPage/LoginLayout';
import LoginInput from '../components/LoginPage/LoginInput';
import PopupModal from './PopupModal';
import { Rss } from 'grommet-icons';

const LoginPage = (props) => {
  const [LoginForm, setLoginForm] = useState({
    username: "",
    password: "",
  })
  const [Modalshow, setModalshow] = useState(false);
  let history = useHistory();

  //test
  const [cookies, setCookie] = useCookies([]);


  const [Reply, setReply] = useState('');

  // if (cookies.access_token && cookies.refresh_token) {
  //   history.push('/MngeAccPage')
  // }
  useEffect(() => {
    // console.log(LoginForm)
  });
  

  let handleClick = (page) => {
    switch(page){
      case 'SignUp':
        history.push('/SignUp')
        break;
      case 'ChooseType':
        history.push('/ChooseType')
        break;
      case 'MngeAccPage':
        history.push('/MngeAccPage')
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (param) => {
    history.push('/MngeAccPage')
    /*const myHeaders = new Headers();
    // console.log(param)
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    const raw = JSON.stringify(LoginForm)
    const LoginData = {
      method: 'POST',
      headers: myHeaders,
      // credentials: 'include',
      body: raw,
      redirect: 'follow'
    };

    await fetch("http://18.163.214.85:5000/login", LoginData)
      .then((response) => {
        let ret
        response.text()
        .then((res) => {
          ret = JSON.parse(res);
          let CurTime = new Date();
          CurTime.setMinutes(CurTime.getMinutes() + ret.expires_in / 60)
          // CurTime.setMinutes(CurTime.getMinutes() + ret.expires_in / 60);
          setCookie("access_token", ret.access_token, {
            expires: CurTime
          })
          setCookie("refresh_token", ret.refresh_token , {
            expires: CurTime
          })
        });
        if (response.status === 200) {
          // console.log(cookies.getAll())
          console.log(response)
          history.push('/MngeAccPage')
        } else {
          throw response;
        }
      })
      .catch(error => {
        console.log(error)
        // error.text().then(errmesg => {
        //   setReply(errmesg)
        //   setModalshow(true)
        // })
        console.log('Am i in?')
      });
    */
  }
  
  const data = {
    area: 'InputArea',
    background: 'light-4',
    comp: <LoginInput
            LoginForm={LoginForm}
            setLoginForm={setLoginForm}
            regBut={
              <CustomButton
                background='status-ok'
                message='Register'
                value='SignUp'
                onClick={handleClick}
              >
              </CustomButton>
            }
            logBut={
              <Box width="28vw" align='center' margin='0'>
                <Button fill alignSelf='center' type="submit" primary label="Submit" color='status-error' background='white'/>
              </Box>
            }
            handleSubmit={handleSubmit}
          ></LoginInput>
  }

  return (
    <Box overflow='auto'>
      <LoginLayout 
        data={data}
        ButOnclick={handleClick}
      >
      </LoginLayout> 
      <PopupModal
        Modalshow = {Modalshow}
        setModalshow = {setModalshow}
      >
        {Reply}
      </PopupModal>
    </Box>
    )
}

export default LoginPage;