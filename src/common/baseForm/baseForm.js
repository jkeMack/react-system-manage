import React from 'react';
import {Form, Input, Cascader, Select, DatePicker, Radio, Button, Row, Col} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const {TextArea} = Input;

export const BaseForm = Form.create()((props) => {
    {
        const renderByType = (item) => {
            switch (item.type) {
                case 'text':
                    return <Input addonAfter={item.addonAfter || ''} addonBefore={item.addonBefore || ''}
                                  disabled={item.disabled} type={item.type}
                                  placeholder={item.placeholder}/>;
                    break;
                case 'textarea':
                    return <TextArea addonAfter={item.addonAfter || ''} addonBefore={item.addonBefore || ''}
                                     disabled={item.disabled} rows={item.rows}
                                     placeholder={item.placeholder}/>;
                    break;
                case 'number':
                    return <Input addonAfter={item.addonAfter || ''} addonBefore={item.addonBefore || ''}
                                  disabled={item.disabled} type={item.type}
                                  placeholder={item.placeholder}/>;
                    break;
                case 'area':
                    return <Cascader options={item.data} placeholder={item.placeholder} showSearch={true}
                                     notFoundContent={item.notFoundContent || '没有匹配数据'}/>
                    break;
                case 'date':
                    return <DatePicker format={item.format} disabledDate={item.disabledDate} disabled={item.disabled}
                                       disabledTime={item.disabledDateTime}/>;
                    break;
                case 'select':
                    return <Select allowClear={item.allowClear || true} mode={item.mode}
                                   showSearch={item.showSearch || true} placeholder={item.placeholder}>
                        {item.data.map((value, index) => {
                            return <Option key={index} value={value.id}>{value.name}</Option>
                        })}
                    </Select>;
                    break;
                case 'radio':
                    return <RadioGroup>
                        {item.data.map((value, index) => {
                            return <Radio value={value.id} key={index}>{value.name}</Radio>;
                        })}
                    </RadioGroup>
                    break;
            }
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            props.form.validateFields((err, values) => {
                if (!err) {
                    props.save(values);
                }
            });
        }

        let {form, option} = props;

        let {getFieldDecorator} = form;

        return (
            <Form layout={'horizontal'} onSubmit={handleSubmit}>
                <Row>
                    {option ? option.map((item) => {
                        return (
                            <Col key={item.name} span={item.colSpan?item.colSpan:'8'} className="pr-20">
                                <FormItem label={item.label}>
                                    {getFieldDecorator(item.name, {
                                        rules: item.rules
                                    })(renderByType(item))}
                                </FormItem>
                            </Col>
                        );
                    }) : null}
                </Row>
                <Button type="primary" htmlType="submit">
                    保存
                </Button>
            </Form>
        )
    }
});