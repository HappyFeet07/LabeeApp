import React from 'react';

import {
  Box,
  Text,
  TextInput,
  Button,
  Form
} from 'grommet';

import {
  Hide, 
  View,
  ContactInfo
} from 'grommet-icons';


const LoginInput = (props) => {
  const [reveal, setReveal] = React.useState(false);

  return (
    <Form onSubmit={props.handleSubmit}>
      <Box fill round='small' background={'accent-4'} >
        <Box width="medium" direction="row" margin="medium" align="center" round="small" gap="2.45vw">
          <Text size="3vh">Account</Text>
          <Box direction="row" round="small" align="center" background='white' border>
            <TextInput plain value={props.LoginForm.username} onChange={e => {props.setLoginForm({...props.LoginForm,username: e.target.value})}}/>
            <Button icon={<ContactInfo size="medium"/>}/>
          </Box>
        </Box>
        <Box width="medium" direction="row" margin="medium" align="center" round="small" gap="medium">
          <Text size="3vh">Password</Text>
          <Box direction="row" round="small" align="center" background='white' border >
            <TextInput plain value={props.LoginForm.password} type={reveal ? 'text' : 'password'}
              onChange={e => {props.setLoginForm({...props.LoginForm, password: e.target.value})}}/>
            <Button icon={reveal ? <View size="medium" /> : <Hide size="medium" />} onClick={() => setReveal(!reveal)}/>
          </Box>
        </Box>
        <Box direction="row" pad="medium" gap="large">
          {props.regBut}
          {props.logBut}
        </Box>
      </Box>
    </Form>
  )
}

export default LoginInput;