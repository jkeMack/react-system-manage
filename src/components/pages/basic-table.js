import React, {Component} from 'react';
import {Table, Button, message} from 'antd';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
}, {
    title: '地址',
    dataIndex: 'address',
}];

let data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

export class BasicTable extends Component {
    state = {
        //保存选中的行数据
        selectedRowKeys: [],
        //保存列表数据
        listData: data
    };

    //删除选中行
    delete = () => {
        data = data.filter(item=>{
            let selected = false;
            this.state.selectedRowKeys.forEach(key=>{
                if(key === item.key){
                    return selected = true;
                }
            });

            return !selected;
        });

        message.success('删除'+this.state.selectedRowKeys.length+'行数据成功!');
        //删除后更新列表数据，更新选中的数据
        this.setState({listData:data,selectedRowKeys:[]});
    };

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    render() {
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{marginBottom: 16}}>
                    <Button type="primary" onClick={this.delete} disabled={!hasSelected}>删除</Button>
                    <span style={{marginLeft: 8}}>{hasSelected ? `选中 ${selectedRowKeys.length} 行` : ''}</span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.listData}/>
            </div>
        );
    }
}