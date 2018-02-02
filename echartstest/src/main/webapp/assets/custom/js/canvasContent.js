

/**
 * 设备统计(柱状图)
 * 
 * @param option:[{
 * 		chartData:图表数据参数(数组),
 * 		nameData:图表统计名称参数(统计参数:字符串),
 * 		nameTitle:图表统计图表title,
 * 		name:图表统计名称参数(x轴显示参数:字符串),
 * 		elementId:图表所在div的Id 
 * 		showLegendData：是否显示LegendData,默认显示,传入任何不为空的参数不显示
 * }]
 * 
 */
function mBarChart(option){
	var name = option.nameData;
	var info = option.name;
	var showLegendData;
	if(option.showLegendData == undefined || option.showLegendData == null || option.showLegendData=="")
	{
		showLegendData = "";
	}else
	{
		showLegendData = option.showLegendData;
	}
	var imgSrc = "";
	if(option.imgSrc == undefined || option.imgSrc == null || option.imgSrc=="")
	{
		imgSrc = "/xjgl/assets/skins/xjgl/images/noData.png";
	}else
	{
		imgSrc = option.imgSrc;
	}
	
	if(""==name||""==info){
		
		$("#"+option.elementId).append("<div style='font-size:14px!important;font-weight:bold;'>&nbsp;&nbsp;</div><div style='margin-top: 20px;'><img width='100%' src='"+imgSrc+"'></img></div>");
	}else{
        barOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:showLegendData==""?option.name.split(","):[],
        },
        grid:{
          	x:50,
          	x2:30,
          	y:30,
          	y2:50
      	},
        toolbox: {
            show : false,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                magicType : {show: true, type: ['line', 'bar']}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : name.split(",")
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : option.chartData
    };
    	var domMain = document.getElementById(option.elementId); 
    	pieOne = echarts.init(domMain);
    	pieOne.showLoading();
    	pieOne.setOption(barOption,false);	
    	pieOne.hideLoading();
	}
	
}

/**
 * 设备统计(仪表盘)
 * 
 *@param option:[{
 * 		lData:图表数据参数(上月数据),
 * 		cmData:图表数据参数(当月数据),
 * 		cyData:图表数据参数(当年数据),
 * 		aData:图表数据参数(历史数据),
 * 		title:图表标题,
 * 		elementId:图表所在div的Id 
 * }]
 */
function gaugeChart(option) {
	var gaugeOption = {
		tooltip : {
			formatter : "{a} <br/>{c}%"
		},
		series : [
				{
					name : '当月',
					type : 'gauge',
					radius : '70%',
					min : 0,
					max : 100,
					splitNumber : 5,
					axisLine : { // 坐标轴线
						lineStyle : { // 属性lineStyle控制线条样式
							width : 10
						}
					},
					axisTick : { // 坐标轴小标记
						length : 15, // 属性length控制线长
						lineStyle : { // 属性lineStyle控制线条样式
							color : 'auto'
						}
					},
					splitLine : { // 分隔线
						length : 20, // 属性length控制线长
						lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
							color : 'auto'
						}
					},
					title : {
						textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							fontWeight : 'bolder',
							fontSize : 20,
							fontStyle : 'italic'
						}
					},
					detail : {
						show : false
					},
					data : [ {
						value : option.cmData,
						name : '当月'
					} ]
				},
				{
					name : '上月',
					type : 'gauge',
					center : [ '25%', '55%' ], // 默认全局居中
					radius : '50%',
					min : 0,
					max : 100,
					endAngle : 45,
					splitNumber : 2,
					axisLine : { // 坐标轴线
						lineStyle : { // 属性lineStyle控制线条样式
							width : 8
						}
					},
					axisTick : { // 坐标轴小标记
						length : 12, // 属性length控制线长
						lineStyle : { // 属性lineStyle控制线条样式
							color : 'auto'
						}
					},
					splitLine : { // 分隔线
						length : 15, // 属性length控制线长
						lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
							color : 'auto'
						}
					},
					pointer : {
						width : 5
					},
					title : {
						offsetCenter : [ 0, '-30%' ], // x, y，单位px
					},
					detail : {
						show : false
					},
					data : [ {
						value : option.lData,
						name : '上月'
					} ]
				},
				{
					name : '当年',
					type : 'gauge',
					center : [ '75%', '50%' ], // 默认全局居中
					radius : '50%',
					min : 0,
					max : 100,
					startAngle : 135,
					endAngle : 45,
					splitNumber : 2,
					axisLine : { // 坐标轴线
						lineStyle : { // 属性lineStyle控制线条样式
							color : [ [ 0.2, '#ff4500' ], [ 0.8, '#48b' ],
									[ 1, '#228b22' ] ],
							width : 8
						}
					},
					axisTick : { // 坐标轴小标记
						splitNumber : 5,
						length : 10, // 属性length控制线长
						lineStyle : { // 属性lineStyle控制线条样式
							color : 'auto'
						}
					},
					splitLine : { // 分隔线
						length : 15, // 属性length控制线长
						lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
							color : 'auto'
						}
					},
					pointer : {
						width : 2
					},
					title : {
						offsetCenter : [ 0, '-40%' ],
					},
					detail : {
						show : false
					},
					data : [ {
						value :  option.cyData,
						name : '当年'
					} ]
				},
				{
					name : '历史',
					type : 'gauge',
					center : [ '75%', '50%' ], // 默认全局居中
					radius : '50%',
					min : 0,
					max : 100,
					startAngle : 315,
					endAngle : 225,
					splitNumber : 2,
					axisLine : { // 坐标轴线
						lineStyle : { // 属性lineStyle控制线条样式
							color : [ [ 0.2, '#ff4500' ], [ 0.8, '#48b' ],
									[ 1, '#228b22' ] ],
							width : 8
						}
					},
					axisTick : { // 坐标轴小标记
						splitNumber : 5,
						length : 10, // 属性length控制线长
						lineStyle : { // 属性lineStyle控制线条样式
							color : 'auto'
						}
					},
					splitLine : { // 分隔线
						length : 15, // 属性length控制线长
						lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
							color : 'auto'
						}
					},
					pointer : {
						width : 2
					},
					title : {
						offsetCenter : [ 0, '40%' ],
					},
					detail : {
						show : false
					},
					data : [ {
						value :  option.aData,
						name : '历史'
					} ]
				} ]
	};

	var domMain = document.getElementById(option.elementId);
	pieOne = echarts.init(domMain);
	pieOne.showLoading();
	pieOne.setOption(gaugeOption, false);
	pieOne.hideLoading();

}

/*******************************************************************************
 * 设备对比(折线图)
 * 
  *@param option:[{
 * 		xData:图表数据参数(x轴数据,字符串),
 * 		mlineData:图表数据参数(数组),
 * 		title:图表标题,
 * 		elementId:图表所在div的Id 
 * }]
 */
function mLineChart(option){
		var lineOption = {
		    tooltip : {
		        trigger: 'axis' 
		    }, 
		    legend: {
		        data:['上月','当月'] 
		    },
		    grid:{
	          	x:50,
	          	x2:50,
	          	y:50,
	          	y2:50
		    },
		    toolbox: {
		        show : false,
		        feature : {
		            magicType : {show: true, type: ['line', 'bar']},
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : option.xData.split(",")
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
		    series : option.mlineData
			
			};
		    var domMain = document.getElementById(option.elementId);   
		    	pieOne = echarts.init(domMain);
		    	pieOne.showLoading();
		    	pieOne.setOption(lineOption,false);	
		    	pieOne.hideLoading();                
}

/*******************************************************************************
 * dan(折线图)
 *
 *@param option:[{
 * 		xData:图表数据参数(x轴数据,字符串),
 * 		yData:y轴(数组),
 * 		title:图表标题,
 * 		elementId:图表所在div的Id 
 * }]
 */
function mSingleLineChart(option){
    var lineOption = {
        grid: {
            y2: 150,
            y: 20
        },
        legend: {
            data:['巡检值']
        },
        tooltip : {
            trigger: 'axis',
            formatter: function(params){
                var xdata = option.xData;
                var format = option.formatData;
                var x = 0;
                for(var i=0;i<xdata.length;i++){
                    if(xdata[i]==params[0][1]){
                        x=i;
                        break;
                    }
                }
                return params[0][0]+'：'+params[0][2]+'<br/>'+'时间：'+params[0][1]+'<br/>' +'巡检人：'+format[x];
            }
        },
        xAxis : [
            {
                type : 'category',
                data : option.xData,
                axisLabel:{interval:0,rotate:90,textStyle:{fontSize:12,fontFamily:'Arial'}},
                axisTick:{inside:true}
            }
        ],
        yAxis : [
            {
                type: 'value',
                min: option.min,
                max: option.max,
                name : option.yNameData
            }
        ],
        series : [
            {
                "name":"巡检值",
                "type":"line",
                "data":option.yData,
                markLine : {
                    "data":option.markLineData
                }
            }
        ]

    };
    var domMain = document.getElementById(option.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(lineOption,false);
    pieOne.hideLoading();
}


/*******************************************************************************
 * 折线图
 *
 *@param option:[{
 * 		xData:图表数据参数(x轴数据,字符串),
 * 		seriesData:数据值,
 * 	    legendData:legend数据,
 * 		elementId:图表所在div的Id
 * }]
 */
function LineChart(option){
    var lineOption = {
        title : {
            text: option.title?option.title:"",
            textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight : 'bolder',
                fontSize : 18
            }
        },
        tooltip : {
            trigger: 'axis',
            formatter: function (params,ticket,callback) {
                var res = params[0][1];
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i][0] + ' : ' + params[i][2] +option.unit;
                }
                return res;
            }
        },
        toolbox: {
            show : true,
            x:'right',
            y:'top',
            feature : {
                dataView : {
                    show : true,
                    title : '数据视图',
                    readOnly: false,
                    lang : ['数据视图', '关闭', '刷新']
                },
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {
                    show : true,
                    title : '保存为图片',
                    type : 'png'
                },
                exportExcel : {
                    show : option.showExcel?option.showExcel:false,
                    title : '导出Excel',
                    icon :'image://../assets/custom/images/download.png',
                    onclick : function (){
                        if(null!=option.exportExcelUri && undefined!=option.exportExcelUri)
                           window.location.href=option.exportExcelUri;
                    }
                }
            }
        },
        legend: {
            y:30,
            data:option.legendData
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : option.xData
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : '单位 '+(option.unit?option.unit:"")
            }
        ],
        series : option.seriesData

    };
    var domMain = document.getElementById(option.elementId);
    pieOne = echarts.init(domMain);
    pieOne.showLoading();
    pieOne.setOption(lineOption,false);
    pieOne.hideLoading();
}