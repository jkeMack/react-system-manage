import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd';
import {NavLink, withRouter} from 'react-router-dom';
import { AppConfig } from'@/util/app.config'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class LeftMenu extends Component {

    static defaultProps = {
        collapsed:false,
    }

    state = {
        //保存菜单选中key
        selectedKeys: [],
        //保存submenu展开的key
        openKeys: []
    }

    /**
     * 刷新时候调用，通过路径判断相应的展开项
     */
    componentWillMount() {
        let pathName = this.props.location.pathname;
        //通过当前的路由来确定菜单的选中项，如果是子菜单被选中，那么submenu需要展开
        AppConfig.menuConfig.forEach(item => {
            if (item.src === pathName) {
                this.setState({selectedKeys: [item.key]});
            }

            if (item.nodes) {
                item.nodes.forEach(node => {
                    if (node.src === pathName) {
                        this.setState({selectedKeys: [node.key], openKeys: [item.key]});
                    }
                })
            }
        })
    }

    /**
     * menu.item被选中的回调
     * @param item
     */
    onSelected = (item) => {
        this.setState({selectedKeys: [item.key]});
    };
    /**
     * 二级菜单的父菜单点击的回调
     * @param openKeys
     */
    clickSubMenu = (openKeys) => {
        this.setState({openKeys: openKeys});
    };
    /**
     * 遍历菜单项
     * @param menuConfig
     * @returns {*}
     */
    getMenus(menuConfig) {
        if (!menuConfig || menuConfig.length === 0) {
            return null;
        }

        let menus = menuConfig.map(item => {
            if (item.nodes) {
                let nodes = this.getMenus(item.nodes);
                return (<SubMenu key={item.key}
                                title={<span><Icon type={item.icon}/><span>{item.name}</span></span>}>
                    {nodes}
                </SubMenu>)
            }
            else {
                return (<Menu.Item key={item.key}>
                    <NavLink to={item.src}>
                        <Icon type={item.icon}/>
                        <span>{item.name}</span>
                    </NavLink>
                </Menu.Item>)
            }
        });
        return menus;
    }
    
    render() {
        const menuConfig = AppConfig.menuConfig;

        return (
            <Sider collapsed={this.props.collapsed} className="home-sider">
                <div className="logo"/>
                <Menu onSelect={this.onSelected} onOpenChange={this.clickSubMenu} openKeys={this.state.openKeys}
                      selectedKeys={this.state.selectedKeys} theme="dark"
                      mode="inline">
                    {this.getMenus(menuConfig)}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(LeftMenu)