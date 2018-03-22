import React, { Component } from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
// import 'antd/dist/antd.css';
import Router from './router';
import './App.less';

class App extends Component {

    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Router />
            </LocaleProvider>
        );
    }
}

export default App;
