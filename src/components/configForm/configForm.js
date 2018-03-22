import React, {Component} from 'react';
import {message} from 'antd';
import {BaseForm} from '../../common/baseForm/baseForm';

export class ConfigForm extends Component {

    render() {
        const config = [
                {
                    name: 'name',
                    label: '姓名',
                    type: 'text',
                    placeholder: '请输入',
                    colSpan:'24',
                    rules: [{required: true, message: '姓名不能为空'}]
                },
                {
                    name: 'permission',
                    label: '权限',
                    type: 'select',
                    colSpan:'24',
                    data: [{id: 1, name: '系统管理'}, {id: 2, name: '账号管理'}, {id: 3, name: '数据管理'}, {id: 4, name: '超级权限'}],
                    placeholder: '请选择',
                    rules: [{required: true, message: '权限不能为空'}]
                },
                {
                    name: 'money',
                    label: '工资',
                    type: 'number',
                    colSpan:'24',
                    placeholder: '请输入',
                    rules: [{required: true, message: '工资不能为空'}]
                },
            ];

        return (
            <div className="config-form">
                <BaseForm option={config}></BaseForm>
            </div>
        )
    }
}

