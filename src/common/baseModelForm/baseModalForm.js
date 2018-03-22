import React from 'react';
import { Modal, Form, Input, Cascader, Select, DatePicker, Radio, Row, Col } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const {TextArea} = Input;

export class BaseModalForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            option: props.option
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({option: nextProps.option});
    }

    renderByType = (item, index) => {
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
                               onFocus={() => item.focus && this.props[item.focus](item, index)}
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
    };

    render() {
        let {visible, onOk, onCancel, form, option, title, confirmLoading, entity} = this.props;

        title = entity ? '修改' + title : '新增' + title;

        let {getFieldDecorator} = form;

        return (
            <Modal width={'1200px'} maskClosable={false} destroyOnClose={true}
                   title={title}
                   visible={visible}
                   onOk={onOk}
                   onCancel={onCancel}
            >
                <Form layout={'horizontal'}>
                    <Row>
                        {this.state.option ? this.state.option.map((item, index) => {
                            return (
                                <Col key={item.name} span={item.colSpan ? item.colSpan : '8'} className="pr-20">
                                    <FormItem label={item.label}>
                                        {getFieldDecorator(item.name, {
                                            initialValue: entity ? entity[item.name] : undefined,
                                            rules: item.rules
                                        })(this.renderByType(item, index))}
                                    </FormItem>
                                </Col>
                            );
                        }) : null}
                    </Row>
                </Form>
            </Modal>
        )
    }
}

BaseModalForm = Form.create()(BaseModalForm);