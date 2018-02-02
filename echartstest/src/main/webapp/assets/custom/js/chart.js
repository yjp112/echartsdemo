/**
 *报表工具函数
 */

/**
 * 单柱柱状图
 * @param id 图表对应的ID
 * @param title 图标标题
 * @param legend 数组
 * @param xAxisData 数组
 * @param seriesName
 * @param seriesData 数组
 */
function autoChart(id,title,legend,xAxisData,seriesName,seriesData){
  var  myChart = echarts.init(document.getElementById(id));
    myChart.showLoading({
        text: '正在努力的加载数据中...'
    });
    myChart.hideLoading();
  var  options = {
        title : {
            text:title,
            textStyle:{
                fontSize: 12,
                fontWeight:"normal"
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:legend
        },
        toolbox: {
            show : true,
            feature : {
                magicType : {show: true, type: ['line', 'bar']}
            }
        },
        calculable : false,
        xAxis : [
            {
                type : 'category',
                axisLabel:{show : true,interval:0,rotate:15,
                    textStyle:{fontSize:'8px'}
                },
                data : xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitArea : {show : true}
            }
        ],
        series : [
            {
                name:seriesName,
                type:'bar',
                itemStyle: {
                    normal: {
                        color: '#25C1C3',
                        borderColor: '#25C1C3'
                    }
                },
                data:seriesData,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(options);
    return myChart;
}
/**
 * 双线折线/柱状图
 * @param id
 * @param title
 * @param legend
 * @param xAxisData
 * @param seriesAName
 * @param seriesAData
 * @param seriesBName
 * @param seriesBData
 * @param type 图标类型：bar,line
 * @returns {*|ZRender}
 */
function lineChart(id,title,legend,xAxisData,seriesAName,seriesAData,seriesBName,seriesBData,type){
   var option = {
        title : {
            text: title,
            textStyle:{
                fontSize: 12,
                fontWeight:"normal"
            }
        },
        tooltip : {
            trigger: 'axis'

        },
        legend: {
            data:legend
        },
        toolbox: {
            show : true,
            feature : {
                magicType : {show: true, type: ['line', 'bar']}
            }
        },
        calculable : false,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}'
                }
            }
        ],
        series : [
            {
                name:seriesAName,
                type:type,
                data:seriesAData,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                }
            },
            {
                name:seriesBName,
                type:type,
                data:seriesBData,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                }
            }
        ]
    };
    var chart = echarts.init(document.getElementById(id));
    chart.setOption(option);
    return chart
}
/**
 * 并状图
 * @param id
 * @param timeData
 * @param title
 * @param legend
 * @param seriesAData
 * @param seriesBData
 * @returns {*|ZRender}
 */
function pieChart(id,timeData,title,legend,seriesAData,seriesBData){
  var  option = {
        timeline : {
            data : timeData,
            label : {
                formatter : function(s) {
                    return s.slice(5, 7)+"月";
                }
            }
        },
        options : [
            {
                title : {
                    text: title,
                    textStyle:{
                        fontSize: 12,
                        fontWeight:"normal"
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    data:legend
                },
                toolbox: {
                    show : true,
                    feature : {
                        restore : {show: true}
                    }
                },
                series : seriesAData
            }
        ]
    };

    for(var i=0;i<seriesBData.length;i++)
        option.options.push(seriesBData[i]);


    var typeChart = echarts.init(document.getElementById(id));
    typeChart.setOption(option);
    return typeChart;
}

/**
 * 温度计图表
 * @param id
 * @param title
 * @param legend
 * @param xAxisData
 * @param seriesAName
 * @param seriesAData
 * @param seriesBName
 * @param seriesBData
 * @returns {*|ZRender}
 */
function temperatureChart(id,title,legend,xAxisData,seriesAName,seriesAData,seriesBName,seriesBData){
  var option = {
        title : {
            text: title
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(param){
                return param[0][1] + '<br/>'
                    + param[0][0] + ' : ' + param[0][2] + '<br/>'
                    + param[1][0] + ' : ' + (param[1][2] + param[0][2]);
            }
        },
        legend: {
            selectedMode:false,
            data:legend
        },
        calculable : false,
        xAxis : [
            {
                type : 'category',
                splitLine : {show: false},
                data : xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                boundaryGap: [0, 0.1],
                splitArea : {show : true}
            }
        ],
        series : [
            {
                name:seriesAName,
                type:'bar',
                stack: 'sum',
                barCategoryGap: '50%',
                itemStyle: {
                    normal: {
                        color: 'green',
                        borderColor: 'tomato',
                        borderWidth: 6,
                        label : {
                            show: true, position: 'inside'
                        }
                    }
                },
                data:seriesAData
            },
            {
                name:seriesBName,
                type:'bar',
                stack: 'sum',
                itemStyle: {
                    normal: {
                        color: 'tomato',
                        borderColor: 'tomato',
                        borderWidth: 6,
                        label : {
                            show: true,
                            position: 'top',
                            formatter: function(a, b, c) {
                                for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                                    if (option.xAxis[0].data[i] == b) {
                                        return option.series[0].data[i] + c;
                                    }
                                }
                            },
                            textStyle: {
                                color: 'tomato'
                            }
                        }
                    }
                },
                data:seriesBData
            }
        ]
    };
    var chart = echarts.init(document.getElementById(id));
    chart.setOption(option);
    return chart;
}


/**
 * 多柱柱状图
 * @param id 图表对应的ID
 * @param title 图标标题
 * @param legend 数组
 * @param xAxisData 数组
 * @param seriesData 数组
 */
function stackBarChart(id,title,legend,xAxisData,seriesData){
    var  myChart = echarts.init(document.getElementById(id));
    myChart.showLoading({
        text: '正在努力的加载数据中...'
    });
    myChart.hideLoading();
    var  options = {
        title : {
            text:title,
            textStyle:{
                fontSize: 12,
                fontWeight:"normal"
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        legend: {
            data:legend
        },
        toolbox: {
            show : true,
            feature : {
                magicType : {show: true, type: ['line', 'bar']}
            }
        },
        calculable : false,
        xAxis : [
            {
                type : 'category',
                axisLabel:{show : true,interval:0,rotate:15,
                    textStyle:{fontSize:'8px'}
                },
                data : xAxisData
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitArea : {show : true}
            }
        ],
        series : seriesData
    };
    myChart.setOption(options);
    return myChart;
}


/**
 * 标准饼状图(无时间轴)
 * @param id 图表对应的ID
 * @param title 图表标题
 * @param legend 数组
 * @param seriesName 数据名
 * @param seriesData 数组
 * @author caijianming
 */
function standardPieChart(id,title,legend,seriesName,seriesData){
    var  myChart = echarts.init(document.getElementById(id));
    myChart.showLoading({
        text: '正在努力的加载数据中...'
    });
    myChart.hideLoading();
    var options = {
        title : {
            text: title,
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : '15%',
            y : '25%',
            data:legend
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:seriesName,
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:seriesData
            }
        ]
    };
    myChart.setOption(options);
    return myChart;
}

/**
 * 将字符串数组转换为数字数组
 */
function arrChangeNumber(arr){
    for(var i=0;i<arr.length;i++)
        arr[i] = Number(arr[i]);
    return arr;
}