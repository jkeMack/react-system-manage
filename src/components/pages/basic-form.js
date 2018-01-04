import React, {Component} from 'react';
import { Form, Input, Select, Radio, Checkbox, Row, Col, DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class basicForm extends Component {
    componentDidMount() {

    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (
            <Form style={{width:20+'%'}}>
                <FormItem label="姓名">
                    <Input/>
                </FormItem>
                <FormItem label="性别">
                    <RadioGroup>
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="学历">
                    <Select>
                        <Option value="1">初中</Option>
                        <Option value="2">高中</Option>
                        <Option value="3">本科</Option>
                        <Option value="4">研究生</Option>
                        <Option value="5">博士</Option>
                    </Select>
                </FormItem>
                <FormItem label="兴趣爱好">
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            <Col span={8}><Checkbox value="1">篮球</Checkbox></Col>
                            <Col span={8}><Checkbox value="2">足球</Checkbox></Col>
                            <Col span={8}><Checkbox value="3">乒乓球</Checkbox></Col>
                        </Row>
                    </Checkbox.Group>
                </FormItem>
                <FormItem label="日期选择">
                    <DatePicker placeholder="点击选择"></DatePicker>
                </FormItem>
                <FormItem label="月份选择">
                    <MonthPicker placeholder="点击选择"></MonthPicker>
                </FormItem>
                <FormItem label="周选择">
                    <WeekPicker placeholder="点击选择"></WeekPicker>
                </FormItem>
                <FormItem label="日期范围">
                    <RangePicker placeholder={['开始日期','结束日期']}></RangePicker>
                </FormItem>
            </Form>
        );
    }
}

export const BasicForm = Form.create()(basicForm);