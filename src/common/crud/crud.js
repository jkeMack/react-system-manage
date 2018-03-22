import React, {Component} from 'react';
import {Table, Button, Icon, Select} from 'antd';
import {BaseModalForm} from '../../common/baseModelForm/baseModalForm';
import {message} from "antd/lib/index";
import './crud.css';

export class Crud extends Component {

    /*crud组件需要的属性是config对象，里面包括buttons配置，expands配置，columns配置
      配置crud基本按钮，默认展示新增、修改、删除按钮
      buttons: {
            create: true,
            update: true,
            delete: true
      },
      可配置自定义按钮,title、className、name、type分别是按钮名称、样式名称、回调函数名称、按钮类型。type默认是default。增加了可配置reactNode，type为reactNode时，允许配置reactNode和click回调方法
      expands: []
      api是crud需要的接口，类似'／api/users'
      api:string,
      formTitle是模态框的标题，gridTitle是表格的标题
    */

    state = {
        //表格加载loading
        loading: false,
        //模态框的显示
        formVisible: false,
        selectedRow: null,
        selectedRowKeys: [],
        gridData: [],
        pagination: {
            total: 0
        }
    };

    componentWillMount() {
        this.getData();
    }

    getData = (params) => {
        this.setState({loading: true});
        if (this.props.config.gridData) {
            this.setState({
                loading: false,
                gridData: this.props.config.gridData
            });
        }
    };

    //表格的分页、排序、筛选变化时触发
    tableOnChange = (pagination, filters, sorter) => {
        console.log('查看参数', pagination, filters, sorter);

        this.getData({
            page: pagination.current,
            // size: pagination.pageSize
        });
    };

    //表格选中行执行
    onSelect = (record, index) => {
        //如果点击了已选中的行，取消选中项
        if (index === this.state.selectedRowKeys[0]) {
            this.setState({selectedRow: null, selectedRowKeys: []});
        }
        else
            this.setState({selectedRow: record, selectedRowKeys: [index]});
    };

    //新增数据
    create = () => {
        this.setState({selectedRow: null, formVisible: true});
    };

    //修改数据
    update = () => {
        console.log('点击修改');
        this.setState({formVisible: true});
    };

    //删除数据
    delete = () => {
        message.success('删除成功！');
    };

    //模态框的确认按钮回调
    handleOk = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            else {
                message.success('操作成功！');
            }
        });
    };

    //模态框的取消按钮回调
    handleCancel = () => {
        this.setState({formVisible: false});
    };

    //模态框的form数据清除
    saveFormRef = (form) => {
        console.log('11111', form);
        this.form = form;
    };

    render() {
        const columns = this.props.config.columns;
        const data = this.state.gridData;
        const pagination = Object.assign(this.state.pagination, {
            showTotal: (total) => `第1-${total}条，共计${total}条记录`,
            // showSizeChanger: true,
            pageSize: 20
        });

        //获取自定义按钮
        const expands = this.props.config.expands ? this.props.config.expands.map((item, index) => {

            if (item.type === 'reactNode') {
                return (<span onClick={this.props[item.name]}>{item.reactNode}</span>);
            }

            return (
                <Button disabled={!this.state.selectedRow} key={index} type={item.type ? item.type : 'default'}
                        className={item.className}
                        onClick={this.props[item.name]}
                ><Icon type={item.icon} className={item.iconStyle}></Icon>{item.title}</Button>
            );
        }) : null;


        //默认三个按钮都显示，如果config里面有配置，根据配置获取按钮
        const buttons = this.props.config.buttons ? this.props.config.buttons : {
            create: true,
            update: true,
            delete: true
        };

        const formConfig = this.props.config.formConfig;
        const gridTitle = this.props.config.gridTitle;
        //entity在需要重新create、update方法时调用
        const entity = this.state.selectedRow;

        return (
            <div className='crud'>
                <div className="grid-title">
                    <span>{gridTitle}</span>
                </div>
                <div className='buttons'>
                    {buttons.create ?
                        <Button type="primary" onClick={this.props.create ? this.props.create : this.create}><Icon
                            type="plus"></Icon>新增</Button> : null}
                    {buttons.update ? <Button disabled={!this.state.selectedRow} type="default"
                                              onClick={this.props.update ? (entity) => this.props.update(entity) : this.update}>修改</Button> : null}
                    {buttons.delete ? <Button disabled={!this.state.selectedRow} type="danger"
                                              onClick={this.props.delete ? this.props.delete : this.delete}>删除</Button> : null}
                    {expands}
                </div>
                <Table
                    onChange={this.tableOnChange}
                    loading={this.state.loading}
                    rowKey={(record, index) => index}
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={pagination}
                    onRowClick={this.onSelect}
                    rowSelection={
                        {
                            selectedRowKeys: this.state.selectedRowKeys,
                        }
                    }
                />
                <BaseModalForm option={formConfig} visible={this.state.formVisible} onCancel={this.handleCancel}
                               onOk={this.handleOk} ref={this.saveFormRef} title={this.props.config.formTitle}
                               entity={this.state.selectedRow}/>
            </div>
        )
    }
}
