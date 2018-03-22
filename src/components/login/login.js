import './login.less';
import React, {Component} from 'react';
import {Button, Form, Input, Icon, message} from 'antd';

const FormItem = Form.Item;

export class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.history.push('home/index');
            }
        });
    };

    render() {

        const {getFieldDecorator} = this.props.form;

        return (
            <div className="login">
                <h2 className="title">
                    后台管理系统示例
                </h2>
                <div className="form">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('name', {
                                rules: [{required: true, message: '请输入用户名'}],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                       placeholder="密码"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" style={{width: 100 + '%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

Login = Form.create()(Login);
