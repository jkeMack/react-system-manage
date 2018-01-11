import '../style/login.css';
import React, { Component } from 'react';
import {Button, Form, Input,} from 'antd';
import {Link} from 'react-router';
const FormItem = Form.Item;

export class Login extends Component {

    render() {
        return (
            <div className="login">
                <h2 className="title">
                    后台管理系统
                </h2>
                <div className="form">
                    <Form>
                        <FormItem>
                            <Input placeholder="用户名" />
                        </FormItem>
                        <FormItem>
                            <Input type="password" placeholder="密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" style={{width:100+'%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
