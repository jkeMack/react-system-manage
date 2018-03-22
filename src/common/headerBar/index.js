import React, {Component} from 'react';
import {Layout, Icon} from 'antd';
import MessagePopover from './messagePopover';
import MyDropMenu from './myDropMenu';

const {Header} = Layout;

export default class HeaderBar extends Component {
    
    render() {
        return (
            <Header className={this.props.collapsed?"collapsed-header":"header"}>
                            <span className="toggleIcon" onClick={this.props.onClick}><Icon
                                type="menu-fold"></Icon></span>
                <div className="rightMenu">
                    {/* 消息组件 */}
                    <MessagePopover />
                    {/* 用户菜单下拉组件 */}
                    <MyDropMenu />
                </div>
            </Header>
        )
    }
}