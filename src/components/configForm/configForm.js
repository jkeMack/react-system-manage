import React, {Component} from 'react';
import {message} from 'antd';
import {BaseForm} from '../../common/baseForm/baseForm';
import axios from 'axios';
import './configForm.less';

export class ConfigForm extends Component {

    state = {
        //保存区域选择数据
        areaData: []
    };

    componentWillMount () {
        message.loading('正在加载区域数据...', 0);
        axios.get('http://localhost:3000/area.json', {
            responseType: 'json'
        }).then(response => {
            console.log('查看区域数据', response.data.data);
            this.setState({areaData: response.data.data});
            //取消loading
            message.destroy();
        }).catch(error => {
            //取消loading
            message.destroy();
        });
    }

    render () {
        const config = [
            {
                name: 'name',
                label: '姓名',
                type: 'text',
                placeholder: '请输入',
                colSpan: '24',
                rules: [{required: true, message: '姓名不能为空'}]
            },
            {
                name: 'permission',
                label: '权限',
                type: 'select',
                colSpan: '24',
                data: [{id: 1, name: '系统管理'}, {id: 2, name: '账号管理'}, {id: 3, name: '数据管理'}, {id: 4, name: '超级权限'}],
                placeholder: '请选择',
                rules: [{required: true, message: '权限不能为空'}]
            },
            {
                name: 'money',
                label: '工资',
                type: 'number',
                colSpan: '24',
                placeholder: '请输入',
                rules: [{required: true, message: '工资不能为空'}]
            },
            {
                name: 'address',
                label: '所在区域',
                type: 'area',
                data: this.state.areaData,
                placeholder: '请选择',
                colSpan: '24',
                rules: [{required: true, message: '所在区域不能为空'}]
            },
        ];

        return (
            <div className="config-form">
                <BaseForm option={config}></BaseForm>
            </div>
        )
    }
}

