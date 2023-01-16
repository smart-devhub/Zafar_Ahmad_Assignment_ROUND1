import React from 'react';
import { Button, Form, Input } from 'antd';
import logo from '../../src/logo.jpg'
import {data} from './loginCredential'
import { Notify } from './Notify';
import {useNavigate} from 'react-router-dom'



const Login: React.FC<{}> = () => {
    
    const navigate=useNavigate()
  const onFinish = (values: any) => {
       const flag=data.some(x=>x.email===values.username && x.password===values.password)
       if(flag){
        Notify("success")
       
        navigate('/home')
        localStorage.setItem("email",values.username)
        
       }
       if(!flag){
        Notify("error")
       }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='wrapper'>
        <div className='logoContainer'>
            <div>
                <img src={logo} alt="logo" width={50} height={50}  />
            </div>
             <span style={{fontSize:"20px"}}>TRENDS</span>
        </div>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{marginTop:"30px"}}
    >
      <Form.Item
       
        name="username"
        rules={[{ required: true, message: 'Please Enter Email.' }]}
      >
        <Input className='input' />
      </Form.Item>

      <Form.Item
        
        name="password"
        rules={[{ required: true, message: 'Please Enter Password.' }]}
      >
        <Input.Password  className='input' />
      </Form.Item>

     
      <Form.Item  >
        <Button type="primary" htmlType="submit" className='input'>
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Login;