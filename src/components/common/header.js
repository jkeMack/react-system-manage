import React, { Component } from 'react';
import {Avatar} from 'antd';
import '../style/header.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
        );
    }
}

