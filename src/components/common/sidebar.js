import React, {Component} from 'react';
import '../style/sidebar.css';
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;

export class Sidebar extends Component {
    state = {
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div className="sidebar">
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Link to='/table'>
                            <Icon type="pie-chart"/>
                            <span>表格</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop"/>
                        <span>图表</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox"/>
                        <span>拖拽</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>表单</span></span>}>
                        <Menu.Item key="5"><Link to='/form'>基本表单</Link></Menu.Item>
                        <Menu.Item key="6">编辑器</Menu.Item>
                        <Menu.Item key="7">markdown</Menu.Item>
                        <Menu.Item key="8">文件上传</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
