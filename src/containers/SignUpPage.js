import React, {
  useState,
  useEffect,
}  from 'react';

import {
  useHistory,
} from 'react-router-dom';

import {
  Box,
  Button,
  Text,
} from 'grommet';

import SignUpLayout from '../components/SignUpPage/SignUpLayout';
import SignUpForm   from '../components/SignUpPage/SignUpForm';
import CustomButton from '../components/Buttons';


const SignUpPage = (props) => {

  const [FormObj, setFormObj] = useState({
    "name":'',
    "username":'',
    "password":'',
    "confirm_password":'',
    "id_card_number":'',
    "email":''
  });

  useEffect(() => {
    console.log(FormObj)
  }, [FormObj])

  const history = useHistory();

  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*")

    const raw = JSON.stringify(FormObj)
    const SignUpData = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://18.163.214.85:5000/register", SignUpData)
      .then(response => {
        if (response.status === 200) {
          history.push('/MngeAccPage')
        }
        console.log('what1?')
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const data = [
    {
      message: 'title',
      area: 'title',
      background: 'dark-4',
      comp: <Box fill>
              <Text size='5vh' alignSelf='center'>
                Create Account
              </Text>
            </Box>
    },
    {
      area: 'profile',
      background: 'dark-4',
      comp:
        <Box fill direction='row' pad='2%'
          background='accent-4' round='small'>
          <SignUpForm
            FormObj={FormObj}
            setFormObj={setFormObj}
            handleSubmit={handleSubmit}
          >
            <Box>
              <Button alignSelf='center' type="submit" label="Submit" color='red'/>
            </Box>
          </SignUpForm>
        </Box>,
      message: 'area u can fill',
    },
    {
      message: 'submit',
      area: 'submitbut',
      background: 'dark-4',
      color: 'status-error',
      comp: 
          <CustomButton
            background='status-error'
            message='Submit'
          >
          </CustomButton>,
    },
  ]

  return (
    <SignUpLayout data={data}>
    </SignUpLayout>);
}

export default SignUpPage;