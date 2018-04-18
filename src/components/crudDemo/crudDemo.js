import React, {Component} from 'react';
import {message} from 'antd';
import {Crud} from '../../common/crud/crud';
import './curdDemo.less';

export class CrudDemo extends Component {

    test = ()=>{
        message.success('你点击了扩展按钮!');
    };

    render() {
        const config = {
            formTitle: '账号',
            gridTitle: '账号管理',
            expands: [
                {title: '扩展按钮', name: 'test'}
            ],
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'key',
                    key: '1'
                },
                {
                    title: '账号名称',
                    dataIndex: 'account',
                    key: '2'
                },
                {
                    title: '用户',
                    dataIndex: 'name',
                    key: '3'
                },
                {
                    title: '电话',
                    dataIndex: 'phone',
                    key: '4',
                    sorter: (a, b) => a.phone - b.phone,
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: '5',
                    sorter: (a, b) => a.address - b.address,
                }
            ],
            gridData: [
                {key: 1, account: '账号一', name: '小王', phone: '13693471772', address: '成都市武侯区'},
                {key: 2, account: '账号二', name: '小李', phone: '13693471772', address: '成都市龙泉驿区'},
                {key: 3, account: '账号三', name: '小刘', phone: '13693471772', address: '成都市高新区'}
            ],
            formConfig: [
                {
                    name: 'account',
                    label: '账号名称',
                    type: 'text',
                    placeholder: '请输入账号名称',
                    rules: [{required: true, message: '账号名称不能为空'}]
                },
                {
                    name: 'name',
                    label: '用户',
                    type: 'select',
                    data: [{id: 1, name: '小王'}, {id: 2, name: '小白'}, {id: 3, name: '小黑'}, {id: 4, name: '小刘'}],
                    placeholder: '请选择用户',
                    rules: [{required: true, message: '用户不能为空'}]
                },
                {
                    name: 'phone',
                    label: '电话号码',
                    type: 'text',
                    placeholder: '请输入电话号码',
                    rules: [{required: true, message: '电话号码不能为空'}]
                },
                {
                    name: 'address',
                    label: '住址',
                    type: 'text',
                    placeholder: '请输入住址',
                    rules: [{required: true, message: '住址不能为空'}]
                },
            ]
        };

        return (
            <div class="crud-demo">
                <Crud config={config} test={this.test}></Crud>
            </div>
        )
    }
}

