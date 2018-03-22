import React, {Component} from 'react';
import {Layout} from 'antd';

import PageRoute from '@/router/page-router';
import LeftMenu from '@/common/menu';
import MyBreadcrumb from '@/common/breadcrumb';
import HeaderBar from '@/common/headerBar';
import "./home.less";

const {Content} = Layout;

export class Home extends Component {
    state = {
        //保存左侧slider是否展开
        collapsed: false
    };
    
    constructor(props){
        super(props);
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    //切换左侧sider收起还是展开
    toggleCollapse = () => {
        this.setState({collapsed: !this.state.collapsed, openKeys: []});
    };

    render() {
        return (
            <div>
                <Layout className="home" style={{minHeight: '100vh'}}>
                    {/* 左侧菜单组件 */}
                    <LeftMenu collapsed={this.state.collapsed}/>
                    <Content>
                        <Layout className="theme-background-gradient">
                            {/* 顶部状态栏 */}
                            <HeaderBar collapsed={this.state.collapsed}
                            onClick={this.toggleCollapse}/>
                            <Content className={this.state.collapsed?'collapsed-main-container':'main-container'}>
                                {/* 面包屑组件 */}
                                <MyBreadcrumb />
                                <div className="content">
                                    {/* 路由组件 */}
                                    <PageRoute />
                                </div>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </div>
        )
    }
}