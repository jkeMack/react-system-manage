import React, { Component } from 'react';
import LzEditor from 'react-lz-editor';

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            htmlContent: "",
            responseList: []
        };
        this.receiveHtml=this.receiveHtml.bind(this);
    }
    receiveHtml(content) {
        console.log("接收到的html内容", content);
        this.setState({responseList:[]});
    }
    render() {
        let policy = "";
        const uploadProps = {
            action: "http://v0.api.upyun.com/devopee",
            onChange: this.onChange,
            listType: 'picture',
            fileList: this.state.responseList,
            //处理文件上传
            data: (file) => {
                console.log('查看文件',file);
            },
            multiple: true,
            beforeUpload: this.beforeUpload,
            showUploadList: true
        }
        return (
            <div>
                <div>富文本编辑器(使用html输入内容格式):
                </div>
                <LzEditor active={true} importContent={this.state.htmlContent} cbReceiver={this.receiveHtml} uploadProps={uploadProps}
                          lang="cn"/>
            </div>
        );
    }
}