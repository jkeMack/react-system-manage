import '../style/basic-markdown.css';
import React, {Component} from 'react';
import Markdown from 'react-markdown';
import {Form, Input} from 'antd';

const {TextArea} = Input;
const FormItem = Form.Item;

export class BasicMarkdown extends Component {
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
            <div className="basic-markdown">
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