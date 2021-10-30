import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {  withRouter } from 'react-router-dom'
import './loginPage.css'


const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Invalid Credentials',
    description:
      'Please enter valid credentials',
  });
};

const LoginPage = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    if(values.username === 'admin@jobhunt.com' && values.password === 'admin123'){
      props.history.push('/JobExplore') 
    }else{
      openNotificationWithIcon('error')
    }
  };

  return (
    
    <div className="container">
      <div className="input-container">
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <span className="welcome-title">Welcome Back</span>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
  
      <Form.Item>
        <Button  type="primary" htmlType="submit" className="login-form-button login-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
   
      </div>
 
    </div>
  );
};

export default withRouter(LoginPage);