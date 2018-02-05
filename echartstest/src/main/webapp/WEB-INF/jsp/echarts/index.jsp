<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="../index/_header.jsp"/>
</head>
<style>
    .nh-nd-date {
        float: left;
        width: 100%;
        height: 28px;
        position: relative;
        background-color: #F0F5FA;
        padding-left: 30px;
        box-sizing: border-box;
    }

    .nh-nd-date ul.nh-option {
        height: 28px;
        line-height: 28px;
    }

    .nh-nd-date ul a {
        padding: 4px 6px;
    }

    .nh-nd-date ul a.current {
        background-color: #69bbe9;
        color: #fff;
        border-radius: 6px;
    }

    .nh-nd-date ul li {
        float: left;
        width: 60px;
    }

    .nh-nd-date ul li.option-first {
        width: 40px;
    }

    .nh-nd-date ul li.current a {
        background-color: #69bbe9;
        border-radius: 6px;
        color: #fff;
    }
</style>
<body>
<div class="ui-layout-center" id="subMain">
    <div class="ui-layout-north">
        <form class="ui-form " id='queryForm'>
            <input type="hidden" id="year" name="year" 　value="${nowyear}">
            <input type="hidden" id="code" name="code" 　value="">
            <input type="hidden" id="llMonth">
            <input type="hidden" id="llBack">
            <div id="dateTime" class="nh-nd-date">
                <ul class="nh-option">
                    <li class="option-first">年度：</li>
                    <li><a name="time" id="first" href="javascript:linkTo('first')">${firstyear}年</a></li>
                    <li><a name="time" id="second" href="javascript:linkTo('second')">${secondyear}年</a></li>
                    <li><a name="time" id="now" href="javascript:linkTo('now')" class="current">今年</a></li>
                </ul>
            </div>
            <div class="ui-chart-dep">
                <span class="ui-span-dep">单位:</span>

                <input type="radio" name="areaCode" value="" checked/>
                <span class="ui-span-dep">全公司</span>

                <input type="radio" name="areaCode" value="421"/>
                <span class="ui-span-dep">一水厂</span>

                <input type="radio" name="areaCode" value="422"/>
                <span class="ui-span-dep">二水厂</span>
            </div>
        </form>
    </div>
    <div class="ui-layout-center chart-box">

        <div class="block-top" style="height: 75%;padding: 10px 15px">

            <div class="left" style="position: relative;width: 90%;margin: 0 auto;float: none">
                <div id="main3button" class="showflag" style="display:none">
                    <button class="k-button" onclick="backToHigner('ll')"><i class="fa fa-reply"></i>返回</button>
                </div>
                <div id="main3" style="height:100%;width:100%">数据加载中...</div>
            </div>

        </div>

    </div>
</div>
</body>
<script src="${pageContext.request.contextPath}/assets/custom/js/echarts-all.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/custom/js/echarts/echarts.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/platform/zrender/tool/color.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/assets/custom/js/analysisChart.js" type="text/javascript"></script>
#parse("index/_footer.vm")
<script type="text/javascript">
    var _iframe_layout, _inner_layout, chart1, chart2, chart3, chart4;
    var code = "";
    $(document).ready(function () {
        if (_iframe_layout) {
            _iframe_layout.destory();
        }
        _iframe_layout = $('body').layout({
            defaults: {
                resizable: false,
                closable: false,
                spacing_open: 0
            }
        });

        if (_inner_layout) {
            _inner_layout.destory();
        }
        _inner_layout = $("#subMain").layout({
            defaults: {
                resizable: false,
                closable: false,
                spacing_open: 1
            },
            north: {
                size: 56
            },
            center: {
                onresize_end: function () {
                    getData();//查询Echarts数据
                }
            }
        });
    });

    //年份查询,按年份切换查询
    function linkTo(obj) {
        var year;
        //移除样式
        $("a[name='time']").each(function () {
            $(this).removeClass("current");
        })
        var text = $("#" + obj).text();
        var cyear = parseInt(text.split("年")[0], 10);
        var now = parseInt(new Date().getFullYear(), 10);
        if (obj == "first") {
            $("#second").text(cyear + "年");
            $("#second").addClass("current");
            $("#first").text(parseInt(cyear - 1) + "年");
            year = cyear;
        } else if (obj == "second") {
            if (parseInt(cyear + 1) >= now) {
                $("#second").addClass("current");
            } else {
                $("#first").text(cyear + "年");
                $("#first").addClass("current");
                $("#second").text(parseInt(cyear + 1) + "年");
            }
            year = cyear;
        } else {
            $("#now").addClass("current");
            $("#first").text(parseInt(now - 2) + "年");
            $("#second").text(parseInt(now - 1) + "年");
            year = now;
        }
        $("#year").attr("value", year);
        getData();
    }

    //按单位查询
    $("input[type='radio']").click(function () {
        var deptCode = "";
        if ("ALL" != $(this).val()) {
            deptCode = $(this).val();
        }
        $("#code").attr("value", deptCode);
        getData();
    });

    //获取图表数据
    function getData() {
        var year = $("#year").val();
        code = $("#code").val();
        if (code == "") {
            code = $("input:radio[name='dep']:checked").val();
        }
        getChart("3", year, null, null, code);
    }


    //通过ajax获取当前所选数据
    function getChart(index, year, month, day, code) {
        if (year == "") {
            year = new Date().getFullYear();
        }
        var timestamp = year + "年";
        if (3 == index && chart3) {
            chart3.dispose();
            $("#main3").css({"filter": "", "background-color": ""});//解决IE下出现暂无数据图片显示不出
        }
        ;

        var url = "${pageContext.request.contextPath}/echarts/getData.do?index=" + index + "&year=" + year + "&areaCode=" + code;
        if (month != null) {
            url += "&month=" + month;
            timestamp = year + "年" + month + "月";
        }
        if (day != null) {
            url += "&day=" + day;
            timestamp = year + "年" + month + "月" + day + "日";
        }

        $.ajax({
            url: url,
            dataType: "json",
            data: {},
            success: function (data) {
                if (null != data) {
                    if (null != data && null != data.seriesData && undefined != data.seriesData && data.seriesData.length > 0)
                        showChart(index, data, timestamp);
                } else {
                    $("#main" + index).html("<img src='${pageContext.request.contextPath}/assets/gwxj/images/noData.png' />");
                }
            },
            error: function () {
                notify("数据加载出错", "warn");
            }
        })
    }

    /**
     * 图表数据显示
     * @param index
     * @param data
     */
    function showChart(index, data, timestamp) {
        var elementId = "main" + index;
        var seriesData = [];

        if ((1 == index) && (data.seriesData[1].data[11] == 0)) {
            var num;
            for (var j = 0; j < data.seriesData[1].data.length; j++) {

                if (data.seriesData[1].data[j] == 0) {
                    num = j - 1;
                    break;
                }
            }
            for (var i = 0; i < data.seriesData.length; i++) {
                var data2 = [];
                for (var j = 0; j < num; j++) {
                    data2[j] = data.seriesData[i].data[j];
                }
                data.seriesData[i].data = data2;
            }
        }
        $.each(data.seriesData, function (index, item) {
            seriesData.push({
                name: item.name,
                type: 'line',
                smooth: true,
                data: item.data/*,markPoint:markpoint,markLine:markline*/
            });//去掉水质分析图表中的最大值、最小值、平均值显示，modify by hht at 201704281006
        });
        if (3 == index) {
            //调用后面
            flowLineBarChart({
                title: timestamp + "出水流量分析",
                elementId: elementId,
                legendData: data.legendData,
                xAxisData: data.xxAxisData,
                yAxisData: data.yyAxisData,
                seriesData: data.seriesData
            })
        }
    }


    function flowLineBarChart(opt) {
        option = {
            title: {
                text: opt.title ? opt.title : "",
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 18
                },
                x: 'center',
                y: 'top'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (v) {
                    return v[0][1] + '<br/>'
                        + v[0][0] + ' : ' + v[0][2] + '' + opt.yAxisData[0].unit + '<br/>'
                        + v[1][0] + ' : ' + v[1][2] + '' + opt.yAxisData[0].unit + '<br/>'
                        + v[2][0] + ' : ' + v[2][2] + '' + opt.yAxisData[1].unit + '';
                }
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        show: true,
                        title: '数据视图',
                        readOnly: false,
                        lang: ['数据视图', '关闭', '刷新']
                    },
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            legend: {
                data: opt.legendData,
                y: 'bottom'
            },
            xAxis: [
                {
                    type: 'category',
                    data: opt.xAxisData
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: opt.yAxisData[0].name,
                    axisLabel: {
                        formatter: '{value} ' + opt.yAxisData[0].unit
                    }
                },
                {
                    type: 'value',
                    name: opt.yAxisData[1].name,
                    axisLabel: {
                        formatter: '{value} ' + opt.yAxisData[1].unit
                    }
                }
            ],
            series: opt.seriesData
        };
        var domMain = document.getElementById(opt.elementId);
        pieOne = echarts.init(domMain);

        pieOne.showLoading();
        pieOne.setOption(option, false);
        pieOne.hideLoading();
        pieOne.on("click", eConsole); //点击柱状图后触发的事件
        function eConsole(param) {
            var year = $("#year").val();
            var code = $("#code").val();
            var index;
            if (opt.elementId == "main3") {
                index = 3;
            }
            if (param.name.length == 2) {

                if (param.name.substring(1, 2) == "月") {
                    //保存当前查询月份至隐藏域，用于当查询该月中某日的数据时的月份入参
                    $("#llMonth").val(param.name.substring(0, 1));
                    $("#llBack").val('年');
                    $('#main3button').attr("style", "display:block");
                    getChart(index, year, param.name.substring(0, 1), null, code);
                } else if (param.name.substring(1, 2) == "日") {
                    //获取保存的查询月份
                    var queryMonth = $("#llMonth").val();
                    $("#llBack").val('月');
                    getChart(index, year, queryMonth, param.name.substring(0, 1), code);
                }

            } else if (param.name.length == 3) {

                if (param.name.substring(2, 3) == "月") {
                    //保存当前查询月份至隐藏域，用于当查询该月中某日的数据时的月份入参
                    $("#llMonth").val(param.name.substring(0, 2));
                    $("#llBack").val('年');
                    getChart(index, year, param.name.substring(0, 2), null, code);
                } else if (param.name.substring(2, 3) == "日") {
                    //获取保存的查询月份
                    var queryMonth = $("#llMonth").val();
                    $("#llBack").val('月');
                    getChart(index, year, queryMonth, param.name.substring(0, 2), code);
                }

            }

        }
    }

    //点击返回上一级  年份-月份-日
    function backToHigner(type) {
        var queryLevel;
        var queryMonth;
        var year = $("#year").val();
        var code = $("#code").val();
        if (type == "ll") {
            queryLevel = $("#llBack").val();
            if (queryLevel == "年") {
                $('#main3button').attr("style", "display:none");
                getChart(3, year, null, null, code);
            } else {
                $("#llBack").val("年");
                queryMonth = $("#llMonth").val();
                getChart(3, year, queryMonth, null, code);
            }
        }
    }


    window.onload = getData();
</script>
