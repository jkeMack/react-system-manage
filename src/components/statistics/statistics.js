import React, {Component} from 'react';
import {Row, Col} from 'antd';
import echarts from 'echarts/dist/echarts-en.common';
import './statistics.less';

export class Statistics extends Component {

    componentDidMount() {
        let chart = echarts.init(document.getElementById('pointChart'));
        let websiteChart = echarts.init(document.getElementById('websiteChart'));
        let outlineChart = echarts.init(document.getElementById('outlineChart'));
        let abnormalChart = echarts.init(document.getElementById('abnormalChart'));
        let pointTypeChart = echarts.init(document.getElementById('pointTypeChart'));
        let demoOneChart = echarts.init(document.getElementById('demoOneChart'));
        let demoTwoChart = echarts.init(document.getElementById('demoTwoChart'));

        chart.setOption({
            title: [
                {text: '1000', subtext: 'X总数',left:'15%',top:'40%',textStyle:{color:'#fff',fontSize:'30',fontWeight:'400'}},
                {text: '500', subtext: 'XX总数',left:'45%',top:'40%',textStyle:{color:'#fff',fontSize:'30',fontWeight:'400'}},
                {text: '666', subtext: 'XXX总数',left:'75%',top:'40%',textStyle:{color:'#fff',fontSize:'30',fontWeight:'400'}},
            ],
            legend: {
                x: 'center',
                y: '80%',
                data: [
                    {name: '离线数250', icon: 'circle'},
                    {name: '异常数250', icon: 'circle'},
                    {name: '离线数500', icon: 'circle'},
                    {name: '异常数500', icon: 'circle'},
                    {name: '离线数333', icon: 'circle'},
                    {name: '异常数333', icon: 'circle'},
                ],
                textStyle: {color: '#8997aa'}
            },
            calculable: true,
            series: [
                {
                    name: 'X',
                    type: 'pie',
                    radius: ['40%', '45%'],
                    center: ['20%', '50%'],
                    itemStyle: {
                        normal: {
                            color: (params) => {
                                let colorList = ['#2a3a43', '#aa3f34'];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {value: 250, name: '离线数250'},
                        {value: 250, name: '异常数250'}
                    ]
                },
                {
                    name: 'XX',
                    type: 'pie',
                    radius: ['40%', '45%'],
                    center: ['50%', '50%'],
                    itemStyle: {
                        normal: {
                            color: (params) => {
                                let colorList = ['#2a3a43', '#ff9b41'];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {value: 500, name: '离线数500'},
                        {value: 500, name: '异常数500'}
                    ]
                },
                {
                    name: 'XXX',
                    type: 'pie',
                    radius: ['40%', '45%'],
                    center: ['80%', '50%'],
                    itemStyle: {
                        normal: {
                            color: (params) => {
                                let colorList = ['#2a3a43', '#27b056'];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {value: 333, name: '离线数333'},
                        {value: 333, name: '异常数333'}
                    ]
                }
            ]
        });

        websiteChart.setOption({
            title: {
                text: '12小时内',
                subtext: '查询总数30000',
                textStyle: {color: '#8997aa'}
            },
            tooltip: {
                trigger: 'axis',
                textStyle: {color: '#8997aa'}
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        textStyle: {color: '#8997aa'}
                    },
                    data: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {color: '#8997aa'}
                    }
                }
            ],
            series: [
                {
                    name: '查询次数',
                    type: 'line',
                    areaStyle: {},
                    itemStyle: {
                        normal: {
                            color: '#299277',
                            opacity: 0
                        }
                    },
                    data: [120, 95, 102, 67, 150, 122, 66]
                }
            ]
        });

        outlineChart.setOption({
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['X', 'XX', 'XXX'],
                textStyle: {color: '#8997aa'}
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        textStyle: {color: '#8997aa'}
                    },
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {color: '#8997aa'}
                    },
                }
            ],
            series: [
                {
                    name: 'X',
                    type: 'line',
                    stack: '总量',
                    symbolSize: 8,
                    smooth: true,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: "#f7af70"
                            }
                        }
                    },
                    data: [33, 60, 50, 94, 44, 58, 76]
                },
                {
                    name: 'XX',
                    type: 'line',
                    stack: '总量',
                    symbolSize: 8,
                    smooth: true,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: "#cf437c"
                            }
                        }
                    },
                    data: [12, 34, 88, 66, 55, 33, 46]
                },
                {
                    name: 'XXX',
                    type: 'line',
                    stack: '总量',
                    symbolSize: 8,
                    smooth: true,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: "#5db383"
                            }
                        }
                    },
                    data: [25, 78, 64, 58, 90, 43, 26]
                }
            ]
        });

        abnormalChart.setOption({
            tooltip: {
                trigger: 'axis',
                textStyle: {color: '#8997aa'}
            },
            calculable: true,
            legend: {
                data: [
                    {name: 'X', icon: 'circle'},
                    {name: 'XX', icon: 'circle'},
                    {name: 'XXX', icon: 'circle'},
                ],
                textStyle: {color: '#8997aa'}
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel: {
                        textStyle: {color: '#8997aa'}
                    },
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 次',
                        textStyle: {color: '#8997aa'}
                    }
                }
            ],
            series: [
                {
                    name: 'X',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#17696e'
                        }
                    },
                    data: [55, 34, 68, 90, 44, 56, 70, 88, 24, 19, 33, 55]
                },
                {
                    name: 'XX',
                    type: 'line',
                    itemStyle: {
                        normal: {
                            color: '#3e4d55'
                        }
                    },
                    data: [90, 22, 55, 75, 88, 55, 66, 77, 16, 25, 26, 46]
                },
                {
                    name: 'XXX',
                    type: 'line',
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    },
                    data: [85, 43, 55, 66, 77, 16, 55, 44, 66, 25, 18, 33]
                }
            ]
        });

        pointTypeChart.setOption({
            calculable: true,
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['50%', "50%"],
                    roseType: 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort: 'ascending',     // for funnel
                    data: [
                        {value: 10, name: '站点类型一'},
                        {value: 5, name: '站点类型二'},
                        {value: 15, name: '站点类型三'},
                        {value: 25, name: '站点类型四'},
                        {value: 20, name: '站点类型五'},
                        {value: 35, name: '站点类型六'},
                        {value: 30, name: '站点类型七'},
                        {value: 40, name: '站点类型八'}
                    ]
                }
            ]
        });

        demoOneChart.setOption({
            title: {
                text: '男性女性身高体重分布',
                textStyle: {color: '#8997aa'}
            },
            legend: {
                data: ['女性', '男性'],
                textStyle: {color: '#8997aa'}
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                }
            },
            xAxis: [
                {
                    type: 'value',
                    scale: true,
                    splitNumber: 4,
                    axisLabel: {
                        formatter: '{value} cm',
                        textStyle: {color: '#8997aa'}
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    splitNumber: 4,
                    axisLabel: {
                        formatter: '{value} kg',
                        textStyle: {color: '#8997aa'}
                    }
                }
            ],
            series: [
                {
                    name: '女性',
                    type: 'scatter',
                    symbolSize: function (value) {
                        return Math.round(value[0] / 10);
                    },
                    itemStyle: {
                        normal: {
                            color: '#d39d27'
                        }
                    },
                    data: [[100.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                        [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                        [172.5, 55.2], [170.9, 54.2], [111.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                        [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                        [159.5, 50.6], [175.0, 82.5], [120.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                    ]
                },
                {
                    name: '男性',
                    type: 'scatter',
                    symbolSize: function (value) {
                        return Math.round(value[0] / 10);
                    },
                    itemStyle: {
                        normal: {
                            color: '#9ccfbc'
                        }
                    },
                    data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                        [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                        [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                        [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9]
                    ]
                }
            ]
        });

        demoTwoChart.setOption({
            title: {
                text: '时间坐标折线图',
                textStyle: {color: '#8997aa'}
            },
            dataZoom: {
                show: true,
                start: 70
            },
            legend: {
                data: ['series1'],
                textStyle: {color: '#8997aa'}
            },
            grid: {
                y2: 80
            },
            xAxis: [
                {
                    type: 'time',
                    splitNumber: 10,
                    axisLabel: {
                        textStyle: {color: '#8997aa'}
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        textStyle: {color: '#8997aa'}
                    }
                }
            ],
            series: [
                {
                    name: 'series1',
                    type: 'line',
                    showAllSymbol: true,
                    smooth: true,
                    data: (function () {
                        var d = [];
                        var len = 0;
                        var now = new Date();
                        var value;
                        while (len++ < 200) {
                            d.push([
                                new Date(2014, 9, 1, 0, len * 10000),
                                (Math.random() * 30).toFixed(2) - 0,
                                (Math.random() * 100).toFixed(2) - 0
                            ]);
                        }
                        return d;
                    })()
                }
            ]
        });
    }

    render() {

        return (
            <div className="statistics" style={{width: 100 + '%'}}>
                <Row>
                    <Col className="chart-container" span={12}>
                        <div id="pointChart" className="chart-bg"></div>
                    </Col>
                    <Col className="chart-container" span={12}>
                        <div id="websiteChart" className="chart-bg"></div>
                    </Col>
                </Row>
                <Row>
                    <Col className="chart-container" span={12}>
                        <div id="outlineChart"></div>
                    </Col>
                    <Col className="chart-container" span={12}>
                        <div id="abnormalChart"></div>
                    </Col>
                </Row>
                <Row>
                    <Col className="chart-container" span={8}>
                        <div id="pointTypeChart" className="chart-bg"></div>
                    </Col>
                    <Col className="chart-container" span={16}>
                        <div id="demoOneChart" className="chart-bg"></div>
                    </Col>
                </Row>
                <div className="pr-20">
                    <div className="chart-bg" id="demoTwoChart"></div>
                </div>
            </div>
        )
    }
}
