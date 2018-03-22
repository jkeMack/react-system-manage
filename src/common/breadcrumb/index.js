import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Breadcrumb} from 'antd';

import { AppConfig } from'@/util/app.config';

class MyBreadcrumb extends Component {
    render() {
        //获取面包屑的配置
        const breadcrumbNameMap = AppConfig.breadcrumbConfig;
        let pathSnippets = this.props.location.pathname.split('/').filter(i => i);
        return (
            <Breadcrumb className="breadcrumb">
                {pathSnippets.map((_, index) => {
                    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
                    if (url === '/home') {
                        //home页实际是整体布局页面，不需要跳转
                        return (
                            <Breadcrumb.Item key={url}>
                                {breadcrumbNameMap[url]}
                            </Breadcrumb.Item>
                        );
                    }
                    else
                        return (
                            <Breadcrumb.Item key={url}>
                                <Link to={url}>
                                    {breadcrumbNameMap[url]}
                                </Link>
                            </Breadcrumb.Item>
                        );
                })}
            </Breadcrumb>
        )
    }
}

export default withRouter(MyBreadcrumb)