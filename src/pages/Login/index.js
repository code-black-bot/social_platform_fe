import React, { useState } from 'react';
import { Button, Input,Form } from 'antd';
import {  EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import '../../assets/css/login.css'

function Login() {
    const [ form,setForm ] = useState({
        status:0,
        username: 'xiaohei',
        password: '123456'
    });
    // 调登录接口
    function sendInfo() {
        // 判断是否有信息遗漏
        setForm({
            ...form,
            status:1
        });
    }
    function changeInput(event) {
        setForm({
            ...form,
            username:event.target.value
        })
    }
    
    return (
        +form.status === 0 ?
        <Form
            name="basic"
            labelCol={{
                span:8
            }}
            wrapperCol={{
                span: 8
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <Form.Item
                label="账号名："
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    {
                        max: 20,
                        message: '最长20位!',
                    },
                    {
                        min: 5,
                        message: '至少5位!!',
                    }
                ]}
            >
                <Input
                    value={form.username}
                    allowClear
                    placeholder="请输入账号名"
                    onChange={changeInput}
                />
            </Form.Item>
            <Form.Item
                name="passport"
                label="密码："
                rules={[
                    {
                        required: true,
                        message: 'Please input your Passport!',
                    },
                    {
                        max: 20,
                        message: '最长20位!',
                    },
                    {
                        min: 5,
                        message: '至少5位!!',
                    }
                ]}
            >
                <Input.Password
                    placeholder="input password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    span: 8,
                    offset: 10
                }}
            >
                <Button type="primary" htmlType="submit" onClick={sendInfo}>登录</Button>
                <Button onClick={sendInfo} htmlType="button">注册</Button>
            </Form.Item>
        </Form>
        : <div>您已登录，跳转中</div>
    );
}

export default Login;