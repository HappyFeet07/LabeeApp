import React from 'react';

import {
  Box,
  FormField, 
  Form, 
  TextInput, 
} from 'grommet';

const SignUpForm = (props) => {

  return(
    <Box
      fill
      align="center"
      pad="small"
      overflow='auto'
      background='white'
      round='small'
      >
      <Form onSubmit={props.handleSubmit}>
        <FormField name="NAME"     label="名稱" >
          <TextInput placeholder="填。" value={props.FormObj.name} onChange={e => {props.setFormObj({...props.FormObj, "name":e.target.value.toString()})}}></TextInput>
        </FormField>
        <FormField name="USERNAME" label="帳戶名稱" >
          <TextInput placeholder="填。" value={props.FormObj.username} onChange={e => {props.setFormObj({...props.FormObj, "username":e.target.value.toString()})}}></TextInput>
        </FormField>
        <FormField name="PASSWORD" label="密碼" >
          <TextInput placeholder="填。" value={props.FormObj.password} onChange={e => {props.setFormObj({...props.FormObj, "password":e.target.value})}}></TextInput>
        </FormField>
        <FormField name="RE-PASSWORD" label="再次確認密碼" >
          <TextInput placeholder="填。" value={props.FormObj.confirm_password} onChange={e => {props.setFormObj({...props.FormObj, "confirm_password":e.target.value})}}></TextInput>
        </FormField>
        <FormField name="ID_NUMBER" label="身分證字號" >
          <TextInput placeholder="填。" value={props.FormObj.id_card_number} onChange={e => {props.setFormObj({...props.FormObj, "id_card_number":e.target.value})}}></TextInput>
        </FormField>
        <FormField name="EMAIL" label="E-mail">
          <TextInput placeholder="填。" value={props.FormObj.email} onChange={e => {props.setFormObj({...props.FormObj, "email":e.target.value})}}></TextInput>
        </FormField>
        {props.children}
      </Form>
    </Box>
  )
};

// username VARCHAR(50),
// password VARCHAR(50),
// name VARCHAR(20),
// age VARCHAR(3),
// id_card_number VARCHAR(20),
// sex CHAR(1),
// birth DATE,
// sign_up_data DATE,
// email VARCHAR(40),
// phone VARCHAR(20);

export default SignUpForm;