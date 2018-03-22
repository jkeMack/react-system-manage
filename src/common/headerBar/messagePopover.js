import React, {Component} from 'react';
import { Tabs, List, Avatar, Icon, Badge, Popover} from 'antd';

const TabPane = Tabs.TabPane;

export default class MessagePopover extends Component {
    count = 0;
    /**
     * 处理数据生产内容列表
     * @returns {XML}
     */
    handleData() {
        this.messages = {
            message1:  [
                {title: '曲丽丽 评论了你', info: '消息内容 25分钟前'},
                {title: '小白 回复了你', info: '消息内容 25分钟前'},
                {title: '小黑 赞了你', info: '消息内容 25分钟前'},
            ],
            message2: [
                {title: '你收到了11份简报', info: '12分钟前'},
                {title: '你推荐的小张通过了面试', info: '15分钟前'},
                {title: '请及时回复王总的邮件', info: '18分钟前'},
            ],
            message3: [
                {title: '任务名称', info: '任务需要在2018-03-25前启动', state: 1},
                {title: '第三方紧急代码变更', info: '小白在五分钟前提交了代码', state: 2},
                {title: '信息安全考试', info: '指派小黑明天早上之前完成更新发布', state: 3},
            ]
        }

        let {message1, message2, message3} = this.messages;
        this.count = message1.length + message2.length + message3.length;

        return (
            <Tabs defaultActiveKey="1" style={{width: 300 + "px"}}>
                <TabPane tab={'通知(' + message1.length + ')'} key="1">
                    <List
                        itemLayout="horizontal"
                        dataSource={message1}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                    title={item.title}
                                    description={item.info}
                                />
                            </List.Item>
                        )}
                    />
                </TabPane>
                <TabPane tab={'消息(' + message2.length + ')'} key="2">
                    <List
                        itemLayout="horizontal"
                        dataSource={message2}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                                    title={item.title}
                                    description={item.info}
                                />
                            </List.Item>
                        )}
                    />
                </TabPane>
                <TabPane tab={'待办(' + message3.length + ')'} key="3">
                    <List
                        itemLayout="horizontal"
                        dataSource={message3}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.title}
                                    description={item.info}
                                />
                                <div>
                                    {item.state === 1 ? <span className="message-not-start">未开始</span> : null}
                                    {item.state === 2 ? <span className="message-progress">进行中</span> : null}
                                    {item.state === 3 ? <span className="message-start">已耗时2天</span> : null}
                                </div>
                            </List.Item>
                        )}
                    />
                </TabPane>
            </Tabs>
        );
    }

    render() {
        return (
            <Popover placement="leftBottom" trigger="click" content={this.handleData()}>
                <Badge className="message" count={this.count}>
                    <Icon type="bell"></Icon>
                </Badge>
            </Popover>
            
        )
    }
}