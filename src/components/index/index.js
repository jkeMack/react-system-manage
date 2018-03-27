import React, {Component} from 'react';
import {Map, MarkerList, NavigationControl} from 'react-bmap';
import {Icon, Tag} from 'antd';
import "./index.less";
import echarts from "echarts/dist/echarts-en.common";

export class Index extends Component {

    state = {
        visible: false,
        rtuInfoVisible: false,
        equipInfoVisible: false
    };

    componentDidMount(){
        let chart1 = echarts.init(document.getElementById('chart-one'));
        let chart2 = echarts.init(document.getElementById('chart-two'));
        let chart3 = echarts.init(document.getElementById('chart-three'));

        chart1.setOption({
            title:{
                text:'数据一统计比例',
                top:'20',
                left:'20',
                textStyle:{
                    color:'#ccc',
                    fontSize:'16'
                }
            },
            calculable: true,
            series: [
                {
                    name: '数据一统计比例',
                    type: 'pie',
                    radius: ['40%', '60%'],
                    itemStyle: {
                        normal: {
                            label:{
                                formatter:'{b}\n————\n{d}%',
                            }
                        }
                    },
                    data: [
                        {value: 35, name: '异常'},
                        {value: 32, name: '正常'},
                        {value: 28, name: '离线'}
                    ]
                }
            ]
        });
        chart2.setOption({
            title:{
                text:'数据二统计比例',
                top:'20',
                left:'20',
                textStyle:{
                    color:'#ccc',
                    fontSize:'16'
                }
            },
            calculable: true,
            series: [
                {
                    name: '数据二统计比例',
                    type: 'pie',
                    radius: ['40%', '60%'],
                    itemStyle: {
                        normal: {
                            label:{
                                formatter:'{b}\n————\n{d}%',
                            }
                        }
                    },
                    data: [
                        {value: 66, name: '异常数'},
                        {value: 32, name: '正常数'},
                        {value: 55, name: '离线数'}
                    ]
                }
            ]
        });
        chart3.setOption({
            title:{
                text:'数据三统计比例',
                top:'20',
                left:'20',
                textStyle:{
                    color:'#ccc',
                    fontSize:'16'
                }
            },
            calculable: true,
            series: [
                {
                    name: '数据三统计比例',
                    type: 'pie',
                    radius: ['40%', '60%'],
                    itemStyle: {
                        normal: {
                            label:{
                                formatter:'{b}\n————\n{d}%',
                            }
                        }
                    },
                    data: [
                        {value: 65, name: '异常数'},
                        {value: 32, name: '正常数'},
                        {value: 40, name: '离线数'}
                    ]
                }
            ]
        });
    }

    clickPoint = (...arr) => {
        console.log('点击', ...arr);
        this.setState({visible: true});
    };

    closePop = () => {
        this.setState({visible: false});
    };

    //打开关闭设备信息
    openEquipInfo = () => {
        this.setState({equipInfoVisible: true, rtuInfoVisible: false});
    };

    closeEquipInfo = () => {
        this.setState({equipInfoVisible: false});
        console.log('点击关闭');
    };

    //打开关闭rtu信息
    openRtuInfo = () => {
        this.setState({rtuInfoVisible: true, equipInfoVisible: false});
    };

    closeRtuInfo = () => {
        this.setState({rtuInfoVisible: false});
    };

    render() {

        const data = [
            {text: '坐标一', location: '98.411,42.279'},
            {text: '坐标二', location: '105.257,30.88'},
        ];

        const rtuInfoPop = (
            <div className="info-panel">
                <Icon className="caret-left" type="caret-left"></Icon>
                <span className="close" onClick={this.closeRtuInfo}><Icon type="close"></Icon></span>

                <div className="title">
                    标题 #1
                </div>
                <div>
                    <Tag color="magenta">XXXXX</Tag>
                    <Tag color="red">gasga-210</Tag>
                    <Tag color="volcano">gajslgj-315</Tag>
                    <Tag color="orange">gaslgjak-350</Tag>
                    <Tag color="gold">gjalsgkja-284</Tag>
                </div>
            </div>
        );

        const equipInfoPop = (
            <div className="info-panel">
                <Icon className="caret-left" type="caret-left"></Icon>
                <span className="close" onClick={this.closeEquipInfo}><Icon type="close"></Icon></span>

                <div className="title">
                    标题 #1
                </div>
                <div>
                    <Tag color="magenta">45646</Tag>
                    <Tag color="red">hash-210</Tag>
                    <Tag color="volcano">jdss-315</Tag>
                    <Tag color="orange">hhasas-350</Tag>
                    <Tag color="gold">jhlasgj-284</Tag>
                </div>
            </div>
        );

        const popContent = (
            <div className="panel">
                <div className="panel-header">坐标XXX <span className="close" onClick={this.closePop}><Icon
                    type="close"></Icon></span></div>
                <div className="panel-body">
                    <div className="has-info" onClick={this.openRtuInfo}>
                        XXX数量：3／4／7
                        <span className="right-icon"><Icon type="right"></Icon></span>
                    </div>
                    <div className="has-info" onClick={this.openEquipInfo}>
                        YYY数量：3／4／7
                        <span className="right-icon"><Icon type="right"></Icon></span>
                    </div>
                    <p>日期：2018-02-27</p>
                    <p>最后同步：2018-02-08 11:35</p>
                </div>
                <div className="panel-footer text-center">
                    更多信息
                </div>
            </div>
        );

        return (
            <div className="home-index">
                <Map className="map-container" center={{lng: 116.402544, lat: 39.928216}} zoom="2">
                    <MarkerList onClick={this.clickPoint} data={data} fillStyle="#ff3333" animation={true}
                                isShowShadow={false}/>
                    <NavigationControl/>
                </Map>

                {this.state.visible ? popContent : null}
                {this.state.rtuInfoVisible ? rtuInfoPop : null}
                {this.state.equipInfoVisible ? equipInfoPop : null}

                <div className="chart-container">
                    <div id="chart-one"></div>
                    <div id="chart-two"></div>
                    <div id="chart-three"></div>
                </div>
            </div>
        );
    }

}