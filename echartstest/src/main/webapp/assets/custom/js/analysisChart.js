/***
 * 折柱混搭图
 * @param option{title,elementId,legendData,xAxisData,yAxisData,seriesData}
 */
function lineBarChart(opt){
    option = {
        title : {
            text: opt.title?opt.title:"",
            textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight : 'bolder',
                fontSize : 18
            },
            x:'center',
            y:'top'
        },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {
                    show : true,
                    title : '数据视图',
                    readOnly: false,
                    lang : ['数据视图', '关闭', '刷新']
                },
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:opt.legendData,
            y:'bottom'
        },
        xAxis : [
            {
                type : 'category',
                data : opt.xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : opt.yAxisData[0].name,
                axisLabel : {
                    formatter: '{value} '+opt.yAxisData[0].unit
                }
            },
            {
                type : 'value',
                name : opt.yAxisData[1].name,
                axisLabel : {
                    formatter: '{value} '+opt.yAxisData[1].unit
                }
            }
        ],
        series : opt.seriesData
    };

    var domMain = document.getElementById(opt.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(option,false);
    pieOne.hideLoading();
}


/***
 * 个性折线图
 * @param option{title,elementId,legendData,xAxisData,yAxisData,seriesData}
 */
function starlineChart(opt){
    option = {
        title : {
            text: opt.title?opt.title:"",
            textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight : 'bolder',
                fontSize : 18
            },
            x:'center',
            y:'top'
        },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {
                    show : true,
                    title : '数据视图',
                    readOnly: false,
                    lang : ['数据视图', '关闭', '刷新']
                },
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:opt.legendData,
            y:'bottom'
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : opt.xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : opt.yAxisData[0].name,
                axisLabel : {
                    formatter: '{value} '+opt.yAxisData[0].unit
                }
            }
        ],
        series : [
            {
                name:opt.seriesData[0].name,
                type:'line',
                stack: '总量',
                symbol: 'none',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:opt.seriesData[0].data
            },
            {
                name:opt.seriesData[1].name,
                type:'line',
                stack: '总量',
                smooth: true,
                symbol:'emptyCircle',    // 系列级个性化拐点图形
                symbolSize: 8,
                data:opt.seriesData[1].data
            },
            {
                name:opt.seriesData[2].name,
                type:'line',
                stack: '总量',
                symbol: 'arrow',
                symbolSize: 6,
                symbolRotate: -45,
                itemStyle: {
                    normal: {
                        color: 'red',
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'dashed'
                        }
                    },
                    emphasis: {
                        color: 'blue'
                    }
                },
                data:opt.seriesData[2].data
            }
        ]
    };

    var domMain = document.getElementById(opt.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(option,false);
    pieOne.hideLoading();
}

/***
 * 仪表盘图
 * @param option{title,elementId,legendData,xAxisData,yAxisData,seriesData}
 */
function gaugeChart(opt){
    option = {
        title : {
            text: opt.title?opt.title:"",
            textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight : 'bolder',
                fontSize : 18
            },
            x:'center',
            y:'top'
        },
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:opt.seriesData[0].name,
                type:'gauge',
                startAngle: 180,
                endAngle: 0,
                center : ['50%', '90%'],    // 默认全局居中
                radius : 220|['30%', '75%'],
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 200
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false
                },
                axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                    formatter: function(v){
                        switch (v+''){
                            case opt.seriesData[0].low: return '低';
                            case opt.seriesData[0].mid: return '中';
                            case opt.seriesData[0].high: return '高';
                            default: return '';
                        }
                    },
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: 'bolder'
                    }
                },
                splitLine: {           // 分隔线
                    show: false
                },
                pointer: {
                    width:50,
                    length: '90%',
                    color: 'rgba(255, 255, 255, 0.8)'
                },
                title : {
                    show : true,
                    offsetCenter: [0, '-60%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#fff',
                        fontSize: 30
                    }
                },
                detail : {
                    show : true,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                    borderColor: '#ccc',
                    width: 100,
                    height: 40,
                    offsetCenter: [0, -40],       // x, y，单位px
                    formatter:'{value}%',
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontSize : 50
                    }
                },
                data:[{value: opt.seriesData[0].data, name: '完成率'}]
            }
        ]
    };

    var domMain = document.getElementById(opt.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(option,false);
    pieOne.hideLoading();
}


/***
 * 区域折线图
 * @param option{title,elementId,legendData,xAxisData,yAxisData,seriesData}
 */
function arealineChart(opt){
    option = {
        title : {
            text: opt.title?opt.title:"",
            textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight : 'bolder',
                fontSize : 18
            },
            x:'center',
            y:'top'
        },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {
                    show : true,
                    title : '数据视图',
                    readOnly: false,
                    lang : ['数据视图', '关闭', '刷新']
                },
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:opt.legendData,
            y:'bottom'
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : opt.xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : opt.yAxisData[0].name,
                axisLabel : {
                    formatter: '{value} '+opt.yAxisData[0].unit
                }
            }
        ],
        series : opt.seriesData
    };

    var domMain = document.getElementById(opt.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(option,false);
    pieOne.hideLoading();
}


/***
 * 面积图
 * @param option{title,elementId,legendData,xAxisData,yAxisData,seriesData}
 */
function areaChart(opt){
    option = {
        title : {
            text: opt.title?opt.title:"",
            textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight : 'bolder',
                fontSize : 18
            },
            x:'center',
            y:'top'
        },
        tooltip : {
            trigger: 'axis',
            formatter: function(v) {
                return v[0][1] + '<br/>'
                    + v[0][0] + ' : ' + v[0][2] + ''+opt.yAxisData[0].unit+'<br/>'
                    + v[1][0] + ' : ' + -v[1][2] + ''+opt.yAxisData[1].unit+'';
            }
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {
                    show : true,
                    title : '数据视图',
                    readOnly: false,
                    lang : ['数据视图', '关闭', '刷新']
                },
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:opt.legendData,
            y:'bottom'
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : opt.xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : opt.yAxisData[0].name,
                axisLabel : {
                    formatter: '{value} '+opt.yAxisData[0].unit
                }
            },
            {
                type : 'value',
                name : opt.yAxisData[1].name,
                axisLabel : {
                    formatter: function(v){
                        return - v+opt.yAxisData[1].unit;
                    }
                }
            }
        ],
        series : opt.seriesData
    };

    var domMain = document.getElementById(opt.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(option,false);
    pieOne.hideLoading();
}


/***
 * 标准折线图
 * @param option{title,elementId,legendData,xAxisData,yAxisData,seriesData}
 */
function standardlineChart(opt){
    option = {
        title : {
            text: opt.title?opt.title:"",
            textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight : 'bolder',
                fontSize : 18
            },
            x:'center',
            y:'top'
        },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {
                    show : true,
                    title : '数据视图',
                    readOnly: false,
                    lang : ['数据视图', '关闭', '刷新']
                },
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:opt.legendData,
            y:'bottom'
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : opt.xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} '+opt.yAxisData[0].unit
                }
            }
        ],
        series : opt.seriesData
    };

    var domMain = document.getElementById(opt.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(option,false);
    pieOne.hideLoading();
}


/***
 * 多维条形图
 * @param option{title,elementId,legendData,xAxisData,yAxisData,seriesData}
 */
function multibarChart(opt){
    option = {
        title : {
            text: opt.title?opt.title:"",
            textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight : 'bolder',
                fontSize : 18
            },
            x:'center',
            y:'top'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter : opt.xformat
        },
        legend: {
            y: 'bottom',
            itemGap : document.getElementById(opt.elementId).offsetWidth / (opt.legendData.length*2),
            data:opt.legendData
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {
                    show : true,
                    title : '数据视图',
                    readOnly: false,
                    lang : ['数据视图', '关闭', '刷新']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        grid: {
            y: 50,
            y2: 50
        },
        xAxis : [
            {
                type : 'value',
                position: 'top',
                splitLine: {show: false},
                axisLabel: {show: false}
            }
        ],
        yAxis : [
            {
                type : 'category',
                splitLine: {show: false},
                data : opt.xAxisData
            }
        ],
        series : opt.seriesData
//        [
//            {
//                name:'ZTW',
//                type:'bar',
//                stack: '总量',
//                itemStyle : dataStyle,
//                data:[71, 50, 31, 39]
//            },
//            {
//                name:'ZTW',
//                type:'bar',
//                stack: '总量',
//                itemStyle: placeHoledStyle,
//                data:[29, 50, 69, 61]
//            }
//        ]
    };
    var domMain = document.getElementById(opt.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(option,false);
    pieOne.hideLoading();
}

/***
 * 堆积柱状图
 * @param option{title,elementId,legendData,xAxisData,yAxisData,seriesData}
 */
function areaBarChart(opt){

    option = {
        title : {
            text: opt.title?opt.title:"",
            textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight : 'bolder',
                fontSize : 18
            },
            x:'center',
            y:'top'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:opt.legendData,
            y:'bottom'
        },
        toolbox: {
            show : true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                dataView : {
                    show : true,
                    title : '数据视图',
                    readOnly: false,
                    lang : ['数据视图', '关闭', '刷新']
                },
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        grid: {
            y2: 100,
            x2: 90
        },
        xAxis : [
            {
                type : 'category',
                data : opt.xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : opt.yAxisData[0].name,
                axisLabel : {
                    formatter: '{value} '+opt.yAxisData[0].unit
                }
            },
            {
                type : 'value',
                name : opt.yAxisData[1].name,
                axisLabel : {
                    formatter: '{value} '+opt.yAxisData[1].unit
                }
            }
        ],
        series : opt.seriesData
//        [   {
//                name:'百度',
//                type:'bar',
//                stack: '搜索引擎',
//                data:[620, 732, 701, 734, 1090, 1130, 1120]
//            },
//            {
//                name:'谷歌',
//                type:'bar',
//                stack: '搜索引擎',
//                data:[120, 132, 101, 134, 290, 230, 220]
//            }
//        ]
    };

    var domMain = document.getElementById(opt.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(option,false);
    pieOne.hideLoading();

}



/***
 * 折柱混搭区间图(包含区间拖拽)
 * @param option{title,elementId,legendData,xAxisData,yAxisData,seriesData}
 */
function lineBarZoomChart(opt){
    option = {
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {
                    show : true,
                    title : '数据视图',
                    readOnly: false,
                    lang : ['数据视图', '关闭', '刷新']
                },
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:opt.legendData,
            y:'top'
        },
        grid: {
            y: 80
        },
        dataZoom : {
            show : true,
            realtime : true,
            start : 0,
            end : 100
        },
        xAxis : [
            {
                type : 'category',
                data : opt.xAxisData
            }
        ],
        yAxis : opt.yAxisData,
        series : opt.seriesData
    };

    var domMain = document.getElementById(opt.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(option,false);
    pieOne.hideLoading();
}




