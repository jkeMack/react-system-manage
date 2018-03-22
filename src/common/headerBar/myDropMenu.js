import React, {Component} from 'react';
import { Tabs, List, Avatar, Icon, Badge, Popover, Modal, Form, Menu, Dropdown, Input} from 'antd';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;

export default class MyDropMenu extends  Component {
    state = {
        //修改密码的模态框是否显示
        updatePwdVisible: false
    };
    //修改密码
    updatePwd = () => {
        this.setState({updatePwdVisible: true});
    };

    onUpdatePwdOk = () => {

    };

    onUpdatePwdCancel = () => {
        this.setState({updatePwdVisible: false});
    };

    render() {
        //配置个人信息的下拉菜单
        const dropMenu = (
            <Menu>
                <Menu.Item>
                    <span>个人中心</span>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={this.updatePwd}>修改密码</span>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login"><span>退出系统</span></Link>
                </Menu.Item>
            </Menu>
        );
        
        return (
            <React.Fragment>
            <Dropdown overlay={dropMenu} trigger={['click']} placement="bottomCenter">
                <span className="person"><Icon type="user"></Icon> 测试小白</span>
            </Dropdown>
            <div>
                <Modal
                    title="修改密码"
                    visible={this.state.updatePwdVisible}
                    onOk={this.onUpdatePwdOk}
                    onCancel={this.onUpdatePwdCancel}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            <Input type="password" placeholder="旧密码"/>
                        </FormItem>
                        <FormItem>
                            <Input type="password" placeholder="新密码"/>
                        </FormItem>
                        <FormItem>
                            <Input type="password" placeholder="确认新密码"/>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
            </React.Fragment>
        )
    }
}