import React, {Component} from 'react';
import Markdown from 'react-markdown';
import {Form, Input} from 'antd';
import './markdown.less';

const {TextArea} = Input;
const FormItem = Form.Item;

export class MarkdownDemo extends Component {
    state = {
        inputInner: ''
    };

    //处理编辑内容变化时展示内容变化
    handleChange(e){
        this.setState({inputInner:e.target.value});
    }

    render() {

        const {inputInner} = this.state;

        return (
            <div className="markdown">
                <Form>
                    <FormItem label="编辑markdown文本">
                        <TextArea rows={10} placeholder="请在此处编辑文本..." value={inputInner} onChange={this.handleChange.bind(this)}></TextArea>
                    </FormItem>
                </Form>
                <h3>效果展示</h3>
                <Markdown className="show-content" source={inputInner}></Markdown>
            </div>
        )
    }
}