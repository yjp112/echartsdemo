function getContext(){
    return $.CONTEXT_PATH+'/';
}
/**
 *
 * @param url
 * @param title
 * @param isLock
 * @param width
 * @param height
 * @param callback
 */
function newDialog(id, url, title, isLock, width, height, okCallback, closeCallBack, max) {
    if (dialog.list[id ? id : "dialog_id"]) {
        dialog.list[id ? id : "dialog_id"].show();
        return;
    }
    if (okCallback) {
        dialog({
            id: id ? id : "dialog_id",
            content: url,
            title: title ? title : "标题",
            lock: isLock,
            width: width ? width : 300,
            height: height ? height : 500,
            close: closeCallBack ? closeCallBack : null,
            ok: okCallback,
            min: false,
            max: max ? max : false,
            okVal: '确定'

        });
    } else {
        dialog({
            id: id ? id : "dialog_id",
            content: url,
            title: title ? title : "标题",
            lock: isLock,
            width: width ? width : 300,
            height: height ? height : 500,
            min: false,
            max: max ? max : false,
            close: closeCallBack ? closeCallBack : null

        });
    }

}

/**
 * 格式化金额
 */

function formatPrice(price)
{
    return price;
}

/**
 *实现replaceAll方法
 */

String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}


/**
 * grid中时间列format方法，适合时间为String形式传值
 * BY： Aaron.CN
 * data：数据
 * start：截取起始位置
 * end：截取结束位置
 */
function format_date_grid(data, start, end)
{

    if(undefined != data)
    {
        var formatDate = data.substr(start,end);
        return formatDate;
    } else
    {
        return "";
    }
}

/**
 * 过滤正数和小数
 * @param value
 * @returns
 */
function isDigtal(value)
{
    var regex = /^([\+]?[0-9]+(\.[0-9]+)?)?$/;
    return regex.test(value);
}

/**
 * 过滤正数
 * @param value
 * @returns
 */
function isZzs(value)
{
    var regex = /^[0-9]*$/;
    return regex.test(value);
}

/**
 * 清除时间约束
 * BY： Aaron.CN
 * startId：开始时间控件
 * endId：结束时间控件
 */
function clearDate(startId, endId)
{
    var datetimepicker_s = $("#" + startId).data("kendoDateTimePicker");
    datetimepicker_s.max(new Date(9999, 0, 1));

    var datetimepicker_e = $("#" + endId).data("kendoDateTimePicker");
    datetimepicker_e.min(new Date(1000, 0, 1));

}

/**
 * 清除时间约束
 * BY： Aaron.CN
 * startId：开始时间控件
 * endId：结束时间控件
 */
function clearDateWithout(startId, endId)
{
    var datetimepicker_s = $("#" + startId).data("kendoDatePicker");
    datetimepicker_s.max(new Date(9999, 0, 1));

    var datetimepicker_e = $("#" + endId).data("kendoDatePicker");
    datetimepicker_e.min(new Date(1000, 0, 1));

}

/**
 * 时间+
 * @param hour
 * @returns {string}
 */
function addHours(hour){
    var today = new Date().getTime();
    var ms = hour *60*60*1000;
    var date = new Date(today+ms);
    //var year = date.getYear()+1900;
    var year = date.getFullYear();

    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return year+"-"+month+"-"+day+" "+hour+":"+m+":"+s;
}

function empty_date(e){
    $(e).val("");
}

/**
 * 通用时间控件方法，待扩展
 * 扩展功能：显示时间、格式化、国际化、开始结束时间约束
 * BY： Aaron.CN
 * startId：开始时间控件
 * endId：结束时间控件
 * formatStr：时间格式  yyyy-MM-dd HH:mm:ss
 * local：国际化  zh-CN
 */

var startTime;
var endTime;
var startTime1;
var endTime1;
var startTime2;
var endTime2;
var endDate;
var startDate;

var startTime_11;
var endtime_11;
var startDate_11;
var endDate_11;
var startTime_22;
var endtime_22;
var startDate_22;
var endDate_22;

function startChange()
{
    startDate = startTime.value(),
        endDate = endTime.value();

    if (startDate) {
        startDate = new Date(startDate);
        startDate.setDate(startDate.getDate());
        endTime.min(startDate);
    } else {
        endTime.min('');
    }
}
function startChange1()
{
    startDate = startTime1.value(),
        endDate = endTime1.value();

    if (startDate) {
        startDate = new Date(startDate);
        startDate.setDate(startDate.getDate());
        endTime1.min(startDate);
    } else {
        endTime1.min('');
    }
}
function startChange2()
{
    startDate = startTime2.value(),
        endDate = endTime2.value();

    if (startDate) {
        startDate = new Date(startDate);
        startDate.setDate(startDate.getDate());
        endTime2.min(startDate);
    } else {
        endTime2.min('');
    }
}

function endChange()
{
    startDate = startTime.value(),
        endDate = endTime.value();

    if (endDate) {
        endDate = new Date(endDate);
        endDate.setDate(endDate.getDate());
        startTime.max(endDate);
    }  else {
        startTime.max('');
    }
}
function endChange1()
{
    startDate = startTime1.value(),
        endDate = endTime1.value();

    if (endDate) {
        endDate = new Date(endDate);
        endDate.setDate(endDate.getDate());
        startTime1.max(endDate);
    } else {
        startTime1.max('');
    }
}
function endChange2()
{
    startDate = startTime2.value(),
        endDate = endTime2.value();

    if (endDate) {
        endDate = new Date(endDate);
        endDate.setDate(endDate.getDate());
        startTime2.max(endDate);
    } else {
        startTime2.max('');
    }
}

function commonDate(startId, endId, formatStr, local, interval)
{
    //加载时间控件
    var $start = $("#" + startId);
    var $end = $("#" + endId);
    var interval = interval;
    $start.removeClass("k-textbox").hcDateTimePicker({
        format: formatStr,
        culture: local,
        change: startChange,
        interval: interval
    });
    $end.removeClass("k-textbox").hcDateTimePicker({
        format: formatStr,
        culture: local,
        change: endChange,
        interval: interval
    });

    startTime = $start.data("kendoDateTimePicker");
    endTime = $end.data("kendoDateTimePicker");
    $start.attr("readonly",true);
    $end.attr("readonly",true);
    startChange();
    endChange();
}
/**
 * 月份选择并比较
 * @param startId
 * @param endId
 * @param formatStr
 * @param local
 */
function commonMonthWithout(startId, endId, formatStr, local)
{
    //加载时间控件
    var $start = $("#" + startId);
    var $end = $("#" + endId);
    $start.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: startChange,
        start: "year",
        depth: "year"
    });
    $end.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: endChange,
        start: "year",
        depth: "year"
    });

    startTime = $start.data("kendoDatePicker");
    endTime = $end.data("kendoDatePicker");
    $start.attr("readonly",true);
    $end.attr("readonly",true);
    startChange();
    endChange();
}
/**
 * 通用时间控件方法，待扩展 没有时分秒
 * 扩展功能：显示时间、格式化、国际化、开始结束时间约束
 * BY： Aaron.CN
 * startId：开始时间控件
 * endId：结束时间控件
 * formatStr：时间格式  yyyy-MM-dd HH:mm:ss
 * local：国际化  zh-CN
 */
function commonDateWithout(startId, endId, formatStr, local)
{
    //加载时间控件
    var $start = $("#" + startId);
    var $end = $("#" + endId);
    $start.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: startChange1

    });
    $end.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: endChange1
    });

    startTime1 = $start.data("kendoDatePicker");
    endTime1 = $end.data("kendoDatePicker");
    $start.attr("readonly",true);
    $end.attr("readonly",true);
    startChange1();
    endChange1();
}

function commonDateWithout_1(startId, endId, formatStr, local)
{
    //加载时间控件
    var $start = $("#" + startId);
    var $end = $("#" + endId);
    $start.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: startChange_11

    });
    $end.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: endChange_11
    });

    startTime_11 = $start.data("kendoDatePicker");
    endTime_11 = $end.data("kendoDatePicker");
    $start.attr("readonly",true);
    $end.attr("readonly",true);
    startChange_11();
    endChange_11();
}

function startChange_11()
{
    startDate_11 = startTime_11.value(),
        endDate_11 = endTime_11.value();

    if (startDate_11) {
        startDate_11 = new Date(startDate_11);
        startDate_11.setDate(startDate_11.getDate());
        endTime_11.min(startDate_11);
    } else {
        endTime_11.min('');
    }
}

function endChange_11()
{
    startDate_11 = startTime_11.value(),
        endDate_11 = endTime_11.value();

    if (endDate_11) {
        endDate_11 = new Date(endDate_11);
        endDate_11.setDate(endDate_11.getDate());
        startTime_11.max(endDate_11);
    } else {
        startTime_11.max('');
    }
}

function commonDateWithout_2(startId, endId, formatStr, local)
{
    //加载时间控件
    var $start = $("#" + startId);
    var $end = $("#" + endId);
    $start.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: startChange_22

    });
    $end.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: endChange_22
    });

    startTime_22 = $start.data("kendoDatePicker");
    endTime_22 = $end.data("kendoDatePicker");
    $start.attr("readonly",true);
    $end.attr("readonly",true);
    startChange_22();
    endChange_22();
}

function startChange_22()
{
    startDate_22 = startTime_22.value(),
        endDate_22 = endTime_22.value();

    if (startDate_22) {
        startDate_22 = new Date(startDate_22);
        startDate_22.setDate(startDate_22.getDate());
        endTime_22.min(startDate_22);
    } else {
        endTime_22.min('');
    }
}

function endChange_22()
{
    startDate_22 = startTime_22.value(),
        endDate_22 = endTime_22.value();

    if (endDate_22) {
        endDate_22 = new Date(endDate_22);
        endDate_22.setDate(endDate_22.getDate());
        startTime_22.max(endDate_22);
    } else {
        startTime_22.max('');
    }
}

/**
 * 和commonDateWithout方法类似 只取小于当前日期的
 *
 *
 * 通用时间控件方法，待扩展 没有时分秒
 * 扩展功能：显示时间、格式化、国际化、开始结束时间约束
 * BY： Aaron.CN
 * startId：开始时间控件
 * endId：结束时间控件
 * formatStr：时间格式  yyyy-MM-dd HH:mm:ss
 * local：国际化  zh-CN
 */
function commonDateWithoutLTNowTime(startId, endId, formatStr, local)
{
    //加载时间控件
    var today = new Date();
    var $start = $("#" + startId);
    var $end = $("#" + endId);
    $start.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: startChange1

    });
    $end.removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local,
        change: endChange1
    });

    startTime1 = $start.data("kendoDatePicker");
    endTime1 = $end.data("kendoDatePicker");
    $start.attr("readonly",true);
    $end.attr("readonly",true);
    startTime1.max(today);
    endTime1.max(today);
    startChange1();
    endChange1();
}

/**
 * 通用单个时间控件方法，待扩展 没有时分秒
 * 扩展功能：显示时间、格式化、国际化、开始结束时间约束
 * BY： Aaron.CN
 * dateId：开始时间控件
 * formatStr：时间格式  yyyy-MM-dd
 * local：国际化  zh-CN
 */
function commonSingleDateWithout(dateId, formatStr, local)
{
    //加载时间控件
    $("#" + dateId).removeClass("k-textbox").hcDatePicker({
        format: formatStr,
        culture: local
    }).attr("readonly",true);
}
/**
 * 通用单个时间控件方法，待扩展 月
 * 扩展功能：显示时间、格式化、国际化、开始结束时间约束
 * BY： Aaron.CN
 * dateId：开始时间控件
 * formatStr：时间格式  yyyy-MM
 * local：国际化  zh-CN
 */
function commonSingleDateMonth(dateId, formatStr, local)
{
    //加载时间控件
    $("#" + dateId).removeClass("k-textbox").hcDatePicker({
        start: "year",
        depth: "year",
        format: formatStr,
        culture: local
    }).attr("readonly",true);
}
/**
 * 通用单个时间控件方法，待扩展 年
 * 扩展功能：显示时间、格式化、国际化、开始结束时间约束
 * BY： Aaron.CN
 * dateId：开始时间控件
 * formatStr：时间格式  yyyy
 * local：国际化  zh-CN
 */
function commonSingleDateYear(dateId, formatStr, local)
{
    //加载时间控件
    $("#" + dateId).removeClass("k-textbox").hcDatePicker({
        start: "decade",
        depth: "decade",
        format: formatStr,
        culture: local
    }).attr("readonly",true);
}

/**
 * 通用单个时间控件方法，待扩展 没有时分秒
 * 扩展功能：显示时间、格式化、国际化、开始结束时间约束
 * BY： Aaron.CN
 * dateId：开始时间控件
 * formatStr：时间格式  yyyy-MM-dd HH:mm:ss
 * local：国际化  zh-CN
 */
function commonSingleDate(dateId, formatStr, local)
{
    //加载时间控件
    $("#" + dateId).removeClass("k-textbox").hcDateTimePicker({
        format: formatStr,
        culture: local
    }).attr("readonly",true);
}
/**
 * 通用时间控件方法，待扩展 时分秒
 * 扩展功能：显示时间、格式化、国际化、开始结束时间约束
 * BY： Aaron.CN
 * startId：开始时间控件
 * endId：结束时间控件
 * formatStr：时间格式   HH:mm:ss
 * local：国际化  zh-CN
 */
function commonDateHms(startId, endId, formatStr, local)
{
    //加载时间控件
    var $start = $("#" + startId);
    var $end = $("#" + endId);
    $start.removeClass("k-textbox").hcTimePicker({
        format: formatStr,
        culture: local,
        change: startChange2

    });
    $end.removeClass("k-textbox").hcTimePicker({
        format: formatStr,
        culture: local,
        change: endChange2
    });

    startTime2 = $start.data("kendoTimePicker");
    endTime2 = $end.data("kendoTimePicker");
    $start.attr("readonly",true);
    $end.attr("readonly",true);
    startChange2();
    endChange2();
}
/**
 * 通用单个时间控件方法，待扩展 时分秒
 * 扩展功能：显示时间、格式化、国际化、开始结束时间约束
 * BY： Aaron.CN
 * dateId：开始时间控件
 * formatStr：时间格式  yyyy-MM-dd HH:mm:ss
 * local：国际化  zh-CN
 */
function commonSingleDateHms(dateId, formatStr, local)
{
    //加载时间控件
    $("#" + dateId).removeClass("k-textbox").hcTimePicker({
        format: formatStr,
        culture: local
    }).attr("readonly",true);
}
//
function newIframeDialog(id, url, title, width, height) {
    //穿越iframe
    var api = frameElement.api, W = api.opener;
    W.dialog({
        id: id ? id : "dialog_id",
        content: 'url:' + url,
        title: title ? title : "标题",
        parent: api,
        padding: 0,
        width: width ? width : 500,
        height: height ? height : 300,
        min: false,
        max: false
    });
}
function showFlowChart(processInstanceId, width, height) {
    width = width || 800;
    height = height || 600;
    quick_dialog("FLOW_CHART", "流程图", getContext()+"base/process/chart?processInstanceId=" + processInstanceId,width, height);
    //newDialog("FLOW_CHART", "url:base/process/chart?processInstanceId=" + processInstanceId, "流程图", true, 800, 600);
    //window.open(contextPath+"/base/process/chart?processInstanceId="+processInstanceId);
}

/**
 *
 * @param id datagrid的ID
 * @param url 删除数据的URL地址，默认为del
 */
function singleDelete(grid, url) {
    var row = grid.select();
    var data = grid.dataItem(row);
    if (!data) {
        notify("请选择要删除的项", "warn");
        return;
    } else {
        if (!confirm("确定删除吗？"))return;
        $.ajax({
            type: "post",
            cache: false,
            url: url ? url : "delete",
            data: "ids=" + data.id,
            success: function (response) {
                if (response.status == "error") {
                    notify(response.message || "操作失败！","error");
                } else if (response.status == "success") {
                    if (response.data.next) {
                        if (response.data.next == ".") {//刷新datagrid
                            edited_callback(grid);
                        } else if (response.data.next == "x") {
                            edited_callback(grid);
                        } else {//刷新maincontent  例子：response.data.next：  相对路径
                            parent.loadFrame(getContext()+response.data.next);
                        }
                    }
                    notify(response.data.message || "操作成功！","success");

                }
            }, error: function (xhr, status, error) {
                var response = $.parseJSON(xhr.responseText);
                if (response.error) {
                    response = response.error;
                }
                notify(response.message || "操作失败！","error");
            }
        });

    }
}

/**
 *测试按钮，点击后刷新列表
 */
function testButton(grid, url) {

    $.ajax({
        type: "post",
        cache: false,
        url: url ? url : "delete",
        success: function (response) {
            if (response.status == "error") {
                notify(response.message || "操作失败！","error");
            } else if (response.status == "success") {
                if (response.data.next) {
                    if (response.data.next == ".") {//刷新datagrid
                        edited_callback(grid);
                    } else if (response.data.next == "x") {
                        edited_callback(grid);
                    } else {//刷新maincontent  例子：response.data.next：  相对路径
                        parent.loadFrame(getContext()+response.data.next);
                    }
                }
                notify(response.data.message || "操作成功！","success");

            }
        }, error: function (xhr, status, error) {
            var response = $.parseJSON(xhr.responseText);
            if (response.error) {
                response = response.error;
            }
            notify(response.message || "操作失败！","error");
        }
    });

}

/**巡检的删除
 * @param grid id
 * @param url
 */
function singleDelete_xj(grid,url) {
    var row = grid.select();
    var data = grid.dataItem(row);
    if (!data) {
        notify("请选择要删除的项", "warn");
        return;
    } else {
        if (!confirm("确定删除吗？"))return;
        $.ajax({
            type: "post",
            cache: false,
            url: url ? url : "delete",
            data: "id=" + data.id,
            success: function (response) {
                if (response.status == "error") {
                    notify(response.message,"error");
                    return;
                } else if (response.status == "success") {
                    edited_callback(grid);
                }
                notify("操作成功！","success");
            }
            ,error: function (xhr, status, error) {
                var response = $.parseJSON(xhr.responseText);
                if (response.error) {
                    response = response.error;
                }
                notify("操作失败！","error");
            }
        });

    }
}

function formatMessage(message, status) {
    if (status == 'ok') {
        return '<div class="ui-message-content"><p class="ui-tiptext ui-tiptext-success"><i class="iconfont icon-ok-sign"></i>成功</p><p class="ui-message-text">' + message + '</p></div>';
    } else {
        return '<div class="ui-message-content"><p class="ui-tiptext ui-tiptext-error"><i class="iconfont icon-remove-sign"></i>失败</p><p class="ui-message-text">' + message + '</p></div><div class="ui-message-btn"><button class="btn" type="button">确定</button></div>';
    }
}
function showSuccessMsg(msg) {
    $.message(formatMessage(msg, 'ok'), $.message.TYPE_OK, 4, true, true);
}

function showErrorMsg(msg) {
    $.message(formatMessage(msg, 'error'), $.message.TYPE_ERROR, 4, false, true);
}
function validateCallback(response, dataGridId,dialogId) {
    if (response.status == "success") {
        notify(response.data.message || "操作成功！", "success");
        if (response.data.next) {
            if (response.data.next == ".") {//刷新datagrid
                edited_callback(window.parent._main_frame.get_grid("#" + dataGridId));

            } else if (response.data.next == "x") {//关闭dialog并刷新datagrid
                edited_callback(window.parent._main_frame.get_grid("#" + dataGridId));
                close_dialog();//关闭dialog
            }
            else if (response.data.next == 'r') {

            } else if (response.data.next == 'c') {
                close_dialog(dialogId);//关闭dialog
            } else {//关闭dialog并刷新页面
                if (parent) {//dialog中有iframe
                    if (parent.$("#_main_frame")) {
                        parent.loadFrame(getContext()+response.data.next);
                    }
                } else if ($("#_main_frame")) {
                    loadFrame(getContext()+response.data.next);
                }
                if(dialogId) {
                    close_dialog(dialogId);//关闭dialog
                }
            }
        }
        if($("#"+dataGridId)){
            $("form").find("input").last().focus();
            $("form").find("input").last().blur();
        }


    }
}

// 添加修改后刷新list数据
function edited_callback(grid) {
    if(grid.dataSource){
        grid.dataSource.read();
    }else{
        $grid.data("kendoGrid").dataSource.read();
    }
}

function closeDialog() {
    destroyFileUpload("dialog");
    if (frameElement) {
        try {
            var api = frameElement.api, W = api.opener;
            W.dialog.focus.close();
        } catch (err) {
        }
    } else {
        dialog.focus && dialog.focus.close();
    }
}

function choosePerson(txtId, txtName, type, dialogId, deptId, deptName) {
    if (deptId == null)deptId = "";
    if (deptName == null)deptName = "";
    quick_dialog(
        "selectDiloag",
        "选择人员",
        getContext()+"choose/person/page/" + (type ? type : 1) + "/" + txtId + "/" + txtName + "?deptId=" + deptId + "&deptName=" + deptName + "&dialogId=" + dialogId,
        950,
        450
    );

}



//选择委外合同
function chooseContract(txtId, txtName, contractStatus, dialogId) {
    quick_dialog(
        "choose_contract",
        "委外合同选择",
        getContext()+ "choose/contract/" + txtId + "/" + txtName + "?contractStatus=" + contractStatus +"&dialogId=" + dialogId,
        950,
        450
    );
}

function chooseAlarmType(txtId, txtName, type) {

    quick_dialog(
        "selectDiloagAlarmType",
        "选择设备类别",
        getContext()+"choose/alarmType?txtId=" + txtId + "&txtName=" + txtName + "&type=" + type,
        300,
        550
    );

}

//选部门
function chooseDept(txtId, txtName, type, dialogId , afterAction) {
    if(!afterAction) afterAction = "";
    quick_dialog(
        "choose_dept",
        "选择部门",
        getContext()+"choose/dept?txtId=" + txtId + "&txtName=" + txtName + "&type=" + type +"&dialogId=" + dialogId +"&afterAction="+afterAction,
        280,
        400
    );

}
//选设备
function chooseDevice(txtId, txtName, type, status, dialogId,id) {
    if (status == null) {
        status = "";
    }
    quick_dialog(
        "choose_device",
        "选择设备",
        getContext()+"choose/devicePage?txtId=" + txtId + "&txtName=" + txtName + "&type=" + type + "&status=" + status + "&dialogId=" + dialogId + "&id=" +id,
        820,
        495
    );

}
//选设备
function chooseDevice1(txtId, hpid,txtName, type, status, dialogId,id) {
    if (status == null) {
        status = "";
    }
    quick_dialog(
        "choose_device1",
        "选择设备",
        getContext()+"choose/device1?txtId=" + txtId +"&hpid=" + hpid + "&txtName=" + txtName + "&type=" + type + "&status=" + status + "&dialogId=" + dialogId + "&id=" +id,
        820,
        495
    );

}

function chooseDeviceCate(txtId, txtName, dialogId,categoryId,categoryName) {
    if (categoryId == null)categoryId = "";
    if (categoryName == null)categoryName = "";
    quick_dialog(
        "selectDiloag",
        "选择设备",
        getContext()+"choose/deviceCate?txtId=" + txtId + "&txtName=" + txtName + "&dialogId=" + dialogId + "&categoryId=" +categoryId+ "&categoryName=" +categoryName,
        820,
        495
    );


}
//选择电表
function chooseElectricWatch(txtId, txtName, deviceCategory, type, dialogId) {
    if (status == null) {
        status = "";
    }
    if (deviceCategory == null){
        deviceCategory = "";
    }
    quick_dialog(
        "choose_device",
        "选择设备",
        getContext()+"choose/device?txtId=" + txtId + "&txtName=" + txtName + "&type=" + type + "&status=0&categoryId=" + deviceCategory + "&dialogId" + dialogId,
        820,
        495
    );

}
//根据特种设备状态查询设备
function chooseDeviceBySpecStatus(txtId, txtName, type, specStatus, dialogId) {
    quick_dialog(
        "choose_deviceCategory",
        "选择设备",
        getContext()+"choose/device?txtId=" + txtId + "&txtName=" + txtName + "&type=" + type + "&status=0&specStatus=" + specStatus + "&dialogId=" +dialogId,
        820,
        495
    );

}
//选区域
function chooseGeoarea(txtId, txtName) {
    quick_dialog(
        "select_item_dlg",
        "选择安装位置",
        getContext()+"/choose/geoarea?txtId=" + txtId + "&txtName=" + txtName,
        270,
        350
    );
}
//选区域
function chooseGeoarea1(txtId, txtName, dialogId) {
    quick_dialog(
        "select_item_dlg",
        "选择区域",
        getContext()+"/choose/geoarea?txtId=" + txtId + "&txtName=" + txtName + "&dialogId="+dialogId,
        310,
        360
    );
}

//选维修班组
function chooseDutyGroup(txtId, txtName, dialogId) {
    quick_dialog(
        "select_group_dlg",
        "选择维修班组",
        getContext()+"/choose/dutyGroup?txtId=" + txtId + "&txtName=" + txtName + "&dialogId="+dialogId,
        270,
        350
    );
}

//选维修事件
function chooseRepairEvtCategory(txtId, txtName) {
    quick_dialog(
        "select_evtCategory",
        "选择事件类型",
        getContext()+"/choose/repairEvtCategory?txtId=" + txtId + "&txtName=" + txtName,
        270,
        350
        //inputChooseClear()
    );
}
//选维修事件
function chooseRepairEvtCategory1(txtId, txtName, dialogId) {
    quick_dialog(
        "select_evtCategory",
        "选择事件类型",
        getContext()+"/choose/repairEvtCategory?txtId=" + txtId + "&txtName=" + txtName + "&dialogId="+dialogId,
        270,
        350
        //inputChooseClear()
    );
}

//选择维修人员
function chooseRepairPerson(categoryType,categoryId,areaId,txtId, txtName, dialogId,txtGroupId,txtGroupName) {
    quick_dialog(
        "select_repairPerson",
        "选择服务人员",
        getContext()+"/choose/repairPerson?categoryType="+ categoryType +"&categoryId="+ categoryId +"&areaId=" + areaId +"&txtId=" + txtId + "&txtName=" + txtName + "&dialogId="+dialogId+ "&txtGroupId=" + txtGroupId + "&txtGroupName="+txtGroupName,
        270,
        250
        //inputChooseClear()
    );
}

//选维修事件
function chooseRepairEvtCategory2(txtId, txtName, dialogId,txtTime,txtEmergency) {
    quick_dialog(
        "select_evtCategory",
        "选择事件类型",
        getContext()+"/choose/repairEvtCategory?txtId=" + txtId + "&txtName=" + txtName + "&dialogId="+dialogId+ "&txtTime=" + txtTime + "&txtEmergency="+txtEmergency,
        270,
        350
        //inputChooseClear()
    );
}

//选设备类别
function chooseDeviceCategory(txtId, txtName, dialogId, type) {
    if (type == 2) {
        quick_dialog(
            "choose_deviceCategory",
            "选择设备类别",
            getContext()+"choose/deviceCategory?txtId=" + txtId + "&txtName=" + txtName + "&dialogId="+dialogId + "&type=" + type,
            300,
            300

        );

    } else {
        if(type == null)
            type = "";
        quick_dialog(
            "choose_deviceCategory",
            '选择设备类别',
            getContext()+"choose/deviceCategory?txtId=" + txtId + "&txtName=" + txtName + "&dialogId=" + dialogId + "&type=" + type,
            300,
            300
            //inputChooseClear()

        );
    }
}
function chooseSupplier(txtId, txtName,dialogId) {
    quick_dialog(
        "selectDiloag",
        "选择厂商",
        getContext()+"base/supplier/lookup/" + txtId + "/" + txtName + "?flag=0&dialogId=" + dialogId,
        950,
        400

    );

}
/*判断选择输入框是否能清空*/
function inputChooseClear() {
    $(".ui-input-choose").each(function () {
        var emptyFunc = $(this).attr("emptyFunc");
        if (emptyFunc) {
            emptyFunc = eval(emptyFunc);
            var clearId = $(this).attr('clearId');
            if (!clearId) {
                clearId = new Date().getTime();
                var _clear = $("<a id='" + clearId + "' class='ui-input-remove' href='javascript:void(0);' title='清空'>×</a>");
                $(this).after(_clear);
                _clear.click(function () {
                    emptyFunc();
                    $(this).hide();
                });
                $(this).attr('clearId', clearId);
            }

            if ($(this).attr("value") != "") {
                $('#' + clearId).show();
            } else {
                $('#' + clearId).hide();
            }
        }
    });

}
function formatMoney(num) {
    try {
        num = $.trim(num);
        if (num == '') {
            return '';
        }
        num = num * 1;
        return num.toFixed(2);
    } catch (ex) {
    }
    return '0.00';
}
function formatNumber2(num) {
    try {
        num = $.trim(num);
        if (num == '') {
            return '';
        }
        num = num * 1;
        return num.toFixed(2);
    } catch (ex) {
    }
    return '0.00';
}
function subtract(num1, num2) {
    try {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        return num1 - num2;
    } catch (err) {
    }

}

function greaterThanOrEqual(num1, num2) {
    if (subtract(num1, num2) >= 0) {
        return true;
    }
    return false;
}
function lessThan(num1, num2) {
    if (subtract(num1, num2) < 0) {
        return true;
    }
    return false;
}

$(document).ready(function () {
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
        ,error: function(xhr, textStatus, errorThrown) {
            var obj = $.parseJSON(xhr.responseText);
            if (xhr.status == 401) {
                $.message("会话已失效，请重新登录！", $.message.TYPE_ERROR, 4, true, true);
                var _login_dlg = dialog({
                    content: '<form id="_login_dlg_form" class="ui-form" method="post" action="'+$.CONTEXT_PATH+'/platform/login"><input type="hidden" name="rtype" value="json" /><fieldset>' + '<div class="ui-form-item block"><label style="width:80px;" class="ui-label" for="">用户名:</label><input class="ui-input" type="text" name="username" value="" data-rule="required;" />' + '</div><div class="ui-form-item block"><label style="width:80px;" class="ui-label" for="">密码:</label><input class="ui-input" type="password" name="password" value="" data-rule="required;" />' + '</div><div class="ui-form-item block fn-mt-20"><label style="width:80px;" class="ui-label"></label><button class="btn btn-primary" type="submit"><i class="iconfont icon-key" style="color:#FFF;"></i>登录</button>' + '<a class="btn" href="javascript:void(0)" onclick="dialog.list[\'_login_dlg\'].close();"><i class="iconfont icon-minus-sign" style="color:#333;"></i>取消</a>' + '</div></fieldset></form>',
                    id: '_login_dlg',
                    lock: true,
                    width: 380,
                    height: 150,
                    title : '请重新登录'
                });
                $("#_login_dlg_form input[name='username']").focus();
                $("#_login_dlg_form").submit(function(){
                    $.forms.submit("#_login_dlg_form",function(){
                        _login_dlg.close();
                    });
                    return false;
                });
                return false;
            } else if (xhr.status == 403) {
                notify(obj.message||"无权访问！","error");
                return false;
            } else if (xhr.status == 404) {
                notify(obj.message||"不存在的访问路径！","error");
                return false;
            } else if (xhr.status == 500) {
                notify(obj.message||"内部错误！","error");
                return false;
            } else if (textStatus == "error") {
                notify(obj.message||"未知错误！","error");
                return false;
            }
        }
    });
    $('.money').each(function (i, v) {
        $(v).change(function () {
            var value = $.trim($(this).val());
            $(this).val(formatMoney(value));
        });
        var value2 = $.trim($(v).val());
        $(v).val(formatMoney(value2));
    });
    $('.number2').each(function (i, v) {
        $(v).change(function () {
            var value = $.trim($(this).val());
            $(this).val(formatNumber2(value));
        });
        var value2 = $.trim($(v).val());
        $(v).val(formatNumber2(value2));
    });
    /*$(".money,.number2").keydown(function(event) {
     var keyCode = event.which;
     if (keyCode == 46 || (keyCode >= 48 && keyCode <=57))
     return true;
     else
     return false;
     }).focus(function() {
     this.style.imeMode='disabled';
     });*/

    /*禁用backspace键的后退功能，但是可以删除文本内容*/
    document.onkeydown = function(e){
        var code;
        if (!e) var e = window.event;
        if (e.keyCode) code = e.keyCode;
        else if (e.which) code = e.which;
        if ((code == 8) &&
            ((event.srcElement.type != "text" &&
                event.srcElement.type != "textarea" &&
                event.srcElement.type != "password")||(event.srcElement.readOnly == true))) {
            event.keyCode = 0;
            event.returnValue = false;
        }
        return true;
    }
});
//----------
function setMainContentH() {
    var rootEl = document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
    var rootHd = parseInt(rootEl.clientHeight);
    $(".mainContent").height(rootHd - 117);
    $(window).resize(function () {
        var rootEl = document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
        var rootHd = parseInt(rootEl.clientHeight);
        $(".mainContent").height(rootHd - 117);
    });
}
function setDivHeight(id,mdValue) {
    var rootEl = document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
    var rootHd = parseInt(rootEl.clientHeight);
    $("#"+id).height(rootHd - mdValue);
    $(window).resize(function () {
        var rootEl = document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
        var rootHd = parseInt(rootEl.clientHeight);
        $("#"+id).height(rootHd - mdValue);
    });
}
//从login2登录系统
function setMainContentH_login2() {
    var rootEl = document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
    var rootHd = parseInt(rootEl.clientHeight);
    $(".mainContent").height(rootHd - 117+32-72);
    $(window).resize(function () {
        var rootEl = document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
        var rootHd = parseInt(rootEl.clientHeight);
        $(".mainContent").height(rootHd - 117+32-72);
    });
}
function setHospitalHomeH_login2() {
    var rootEl = document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
    var rootHd = parseInt(rootEl.clientHeight);
    $(".hospitalHome").height(rootHd - 117+32);
    $(window).resize(function () {
        var rootEl = document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
        var rootHd = parseInt(rootEl.clientHeight);
        $(".hospitalHome").height(rootHd - 117+32);
    });
}
function createXmlhttp(func,func2) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        //code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 ){
            if(xmlhttp.status==200){
                var data = xmlhttp.responseText;
                if(data!=null && data!=""){
                    data = eval("("+data+")");
                }
                func(data);
            }else{

            }
            if(func2!=null){func2();}
        }
    }
    return xmlhttp;
}
function sendXmlhttp(_xmlhttp,method,url,dataIn) {
    if(method.toUpperCase()=="GET"){
        _xmlhttp.open("GET",url,true);
        _xmlhttp.send();
    }else if(method.toUpperCase()=="POST"){
        _xmlhttp.open("POST",url,true);
        _xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        _xmlhttp.send(dataIn);
    }
}

//写点位
function writeBlock(hpids, bits, val, projectName) {
    var dataIn = {"hpids": hpids, "bits": bits, "val": val};
    $.ajax({
        'url': projectName + "/gis/writeBit?r=" + Math.random(),
        'data': dataIn,
        'traditional': true,
        'dataType': 'json',
        'type': 'get',
        'error': function (data) {
        },
        'success': function (data) {
        }
    });
}
function getMiddleCode(hpid) {
    var hpids = hpid.split("_");
    if (hpids != null && hpids.length > 3) {
        return hpids[2] + "_" + hpids[3];
    } else {
        alert("无效的设备编码");
        return "";
    }
}
//判断一个数组是否包含某个对象
function isInArray(strs, str) {
    var bol = false;
    if (strs != null && strs.length > 0) {
        for (var i = 0; i < strs.length; i++) {
            if (strs[i] == str) {
                bol = true;
                return bol;
            }
        }
    }
    return bol;
}
//判断一个数组是否包含某个对象
function isInArrayByIndex(strs, str) {
    var bol = false;
    if (strs != null && strs.length > 0 && str!=null) {
        for (var i = 0; i < strs.length; i++) {
            if (str.indexOf(strs[i])!=-1) {
                bol = true;
                return bol;
            }
        }
    }
    return bol;
}
//显示当前时间
function ShowCurrentTime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    if(hour<10)hour="0"+hour;
    if(min<10)min="0"+min;
    $("#spnCurrentTime").text(hour+":"+min)
    setTimeout("ShowCurrentTime()",1000);
}
function loadMain(url) {
    $.ajaxSetup({
        cache: false
    });
    destroyFileUpload();
    if (url == null || url == "") {
        $('.mainContent').empty();
    } else {
        $('.mainContent').load(url);
    }
}

function destroyFileUpload(type) {
    try {
        var parent = type == "dialog" ? "div#" + dialog.focusId + " " : "";
        if ($(parent + "div.uploadify").length > 0) {
            $(parent + "div.uploadify").uploadify('destroy');
        }
    } catch (e) {
    }
}
function setAllReadonly(type) {
    $(document).ready(function(){
        type="";
        var parent = type == "dialog" ? ".ui_dialog " : "";
        //$(parent + '[type=button]').hide();
        $(parent + '[type=submit]').hide();
        //$(parent + '[type=button]').parent("div.actions").hide();
        //$(parent + '.cancel[type=button]').show();//查看页面的取消按钮
        //$(parent + '.k-primary[type=button]').show();//查看页面的其他按钮
        $('.ui-form-required').hide();//必须输入的*标志
        if ($(parent + '.ui-box-close a').length == 0) {
            $(parent + '.ui-box-close').hide();
        }
        //$(parent + ':input').attr('readonly', true);
        $(parent + '[type=radio]').attr('disabled', true);
        $(parent + '[type=checkbox]').attr('disabled', true);
        $(parent + 'select').attr('disabled', true);
        $(parent + ':input').attr('readonly', true);
        $(parent + "input[type=text]").attr('readonly', true).unbind("click").removeAttr("onclick");
        //$(parent + ":input").attr('readonly', true).unbind("click").removeAttr("onclick");
//	    $(parent + "span").unbind("click").removeAttr("onclick");
        $(parent + "a.k-i-search").hide().parent("span").attr("readonly",true).css("padding-right","0");//选择框的放大镜
        $(parent +'.addRow').unbind("click").hide();
        $(parent +'.delRow').unbind("click").hide();
    })
}

function setDomReadonly(parentdom) {

        if(parentdom){
            var dom=$(parentdom);

            dom.find('[type=submit]').hide();
            dom.find('.ui-form-required').hide();//必须输入的*标志
            if (dom.find( '.ui-box-close a').length == 0) {
                dom.find('.ui-box-close').hide();
            }
            dom.find('[type=radio]').attr('disabled', true);
            dom.find('[type=checkbox]').attr('disabled', true);
            dom.find(':input').attr('readonly', true);
            dom.find("input[type=text]").attr('readonly', true).unbind("click").removeAttr("onclick");
            dom.find("a.k-i-search").hide().parent("span").attr("readonly",true).css("padding-right","0");//选择框的放大镜
            dom.find('.addRow').unbind("click").hide();
            dom.find('.delRow').unbind("click").hide();
        }


}

//--------
function isExist(list, obj) {
    if (list == null || list == "" || list.length < 1 || obj == null || obj == "") {
        return false;
    }
    for (var i = 0; i < list.length; i++) {
        if (list[i] == obj) {
            return true;
        }
    }
    return false;
}
function stringToArray(idstr) {
    if (idstr == null || idstr == "")return new Array();
    var ids = idstr.split(",");
    return ids;
}

/*动态校验*/
function dynamicValid(formId) {
    var methods = {
        not_empty: function (field, value) {
            return value !== null && $.trim(value).length > 0;
        },
        min_length: function (field, value, min_len, all_rules) {
            var regex1 = /[\u4E00-\u9FA5\uf900-\ufa2d]/ig;//中文字符
            var regex2 = /[^\u4E00-\u9FA5\uf900-\ufa2d]/g;//非中文字符
            var temp1 = value.replace(regex2, '');//纯中文字符串
            var temp2 = value.replace(regex1, '');//纯非中文文字符串

            var length = 2 * temp1.length + temp2.length, result = (length >= min_len);

            if (!all_rules['not_empty']) {
                result = result || length === 0;
            }
            return result;
        },
        max_length: function (field, value, max_len) {
            var regex1 = /[\u4E00-\u9FA5\uf900-\ufa2d]/ig;//中文字符
            var regex2 = /[^\u4E00-\u9FA5\uf900-\ufa2d]/g;//非中文字符
            var temp1 = value.replace(regex2, '');//纯中文字符串
            var temp2 = value.replace(regex1, '');//纯非中文文字符串
            return 2 * temp1.length + temp2.length <= max_len;
        },
        plusNumeric: function (field, value) {

            var regex = /^([\+]?[0-9]+(\.[0-9]+)?)?$/;
            return regex.test(value);
        }
    };
    var messages = {
        not_empty: '必填字段。',
        min_length: '请至少输入 :value 字符。',
        max_length: '请最多输入 :value 字符。',
        regex: '',
        email: '请填写正确的 email 地址。',
        url: '请填写正确的 url。',
        exact_length: '请输入 :value 字符。',
        equals: '请输入指定字符串。',
        ip: '请输入正确的 IP 地址。',
        credit_card: '请填写正确的卡号。',
        alpha: '必须输入字母。',
        alpha_numeric: '必须输入字母或数字。',
        alpha_dash: '必须输入字母、数字、下划线或连字符。',
        digit: '请输入数字。',
        numeric: '请输入十进制数字。',
        plusNumeric: '请输入正数',
        matches: '必须与前一个值相同。',
        money: '请输入金额',
        bigger: '必须比前一个值大',
        smaller: '必须比后一个值小',
        chinese: '请输入中文'
    };
    var allowed_rules = [];
    $.each(methods,
        function (k, v) {
            allowed_rules.push(k);
        });

    function format(field_name, rule, params) {
        var message;
        if (typeof messages[field_name] !== 'undefined' && typeof messages[field_name][rule] !== 'undefined') {
            message = messages[field_name][rule];
        } else {
            message = messages[rule];
        }

        if ($.type(params) !== 'undefined' && params !== null) {
            if ($.type(params) === 'boolean' || $.type(params) === 'string' || $.type(params) === 'number') {
                params = {
                    value: params
                };
            }
            $.each(params,
                function (k, v) {
                    message = message.replace(new RegExp(':' + k, 'ig'), v);
                });
        }
        return message;
    }


    var errors = {};
    $('#' + formId + ' :input[name][valid]').each(function () {
        var field = {
            name: $(this).attr('name'),
            value: $.trim($(this).val())
        };
        var validAttr = $(this).attr('valid');
        var rules = eval(validAttr);//['plusNumeric',{max_length: 20}]
        normalized_rules = {};
        $.each(rules,
            function (rule_idx, rule_value) {
                if ($.type(rule_value) === 'string') {
                    if ($.inArray(rule_value, allowed_rules) !== -1) {
                        normalized_rules[rule_value] = null;
                    }
                } else {
                    $.each(rule_value,
                        function (k, v) {
                            if ($.inArray(k, allowed_rules) !== -1) {
                                normalized_rules[k] = v;
                                return false;
                            }
                        });
                }
            });

        //console.dir(normalized_rules)
        $.each(normalized_rules,
            function (fn_name, fn_args) {
                if (methods[fn_name].call(self, field, field.value, fn_args, normalized_rules) !== true) {
                    errors[field.name] = format.call(self, field.name, fn_name, fn_args);
                }
            });

    });
    return errors;
}
/*
 将数值四舍五入后格式化.
 @param num 数值(Number或者string)
 @param cent 要保留的小数位(Number)
 @param isThousand 是否需要千分位 0:不需要,1:需要(数值类型);
 @return 格式的字符串,如'1,234,567.45'
 @type String
 */
function formatNumber(num, cent, isThousand) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))//检查传入数值为数值类型.
        num = "0";
    if (isNaN(cent))//确保传入小数位为数值型数值.
        cent = 0;
    cent = parseInt(cent);
    cent = Math.abs(cent);//求出小数位数,确保为正整数.
    if (isNaN(isThousand))//确保传入是否需要千分位为数值类型.
        isThousand = 0;
    isThousand = parseInt(isThousand);
    if (isThousand < 0)
        isThousand = 0;
    if (isThousand >= 1) //确保传入的数值只为0或1
        isThousand = 1;
    sign = (num == (num = Math.abs(num)));//获取符号(正/负数)
    //Math.floor:返回小于等于其数值参数的最大整数
    num = Math.floor(num * Math.pow(10, cent) + 0.50000000001);//把指定的小数位先转换成整数.多余的小数位四舍五入.
    cents = num % Math.pow(10, cent); //求出小数位数值.
    num = Math.floor(num / Math.pow(10, cent)).toString();//求出整数位数值.
    cents = cents.toString();//把小数位转换成字符串,以便求小数位长度.
    while (cents.length < cent) {//补足小数位到指定的位数.
        cents = "0" + cents;
    }
    if (isThousand == 0) //不需要千分位符.
        return (((sign) ? '' : '-') + num +((cent==0)?'': ('.' + cents)));
    //对整数部分进行千分位格式化.
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ','
            + num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num+((cent==0)?'': ('.' + cents)));
}
//千分位以","隔开，并四舍五入保留2为小数
function fNum2(num) {
    return formatNumber(num, 2, 1);
}
//千分位以","隔开，并四舍五入取整
function fInt(num) {
    return formatNumber(num, 0, 1);
}
//获取iframe的window对象
function getIframeWin(iframeId,win){
    if(!win){
        win=window;
    }
    return win.document.getElementById(iframeId).contentWindow;
}
//设置选择框焦点
function resetfocus(obj){
    $(obj).focus();
    $(obj).blur();
}

//页面里文本框数字的格式化
function fNumPage(){
    $('.fNum2').each(function(){
        var num=$.trim($(this).val());
        if(num!=''){
            $(this).val(''+fNum2(num)+'');
        }
    });
    $('.fInt').each(function(){
        var num=$.trim($(this).val());
        if(num!=''){
            $(this).val(''+fInt(num)+'');
        }
    });
}
//页面里td数字的格式化
function fNumPagetd(){
    $('.fNum2').each(function(){
        var num=$.trim($(this).text());
        if(num!=''){
            $(this).val(''+fNum2(num)+'');
        }
    });
    $('.fInt').each(function(){
        var num=$.trim($(this).text());
        if(num!=''){
            $(this).val(''+fInt(num)+'');
        }
    });
}

//针对本页面重设div宽度
function resetDivWidth(leftWidth,navigationOffset){
    $("div.toggle_menu").css("left",leftWidth);
    $("#G_Map").css("left",leftWidth);
    $("#G_MapMenu").width(leftWidth);
    $("#gisbar").css("left",navigationOffset);
}
//空判断
function isEmpty(s){
    return (s==null || s==undefined || s=="");
}

//选择人员
function choosePersons(type, txtId, txtName,dialogId, id,deptId, deptName, tel) {
    var personId = $("#personId").val();
    if(!personId){
        personId = '';
    }
    if (txtId == null)txtId = "";
    if (txtName == null)txtName = "";
    quick_dialog(
        "selectDiloag",
        "选择人员",
        getContext()+"choose/personPage?type="+type+"&txtId=" + txtId +"&txtName=" + txtName +"&dialogId=" + dialogId + "&id=" + id+ "&personId=" + personId+ "&deptId=" + deptId+ "&deptName=" + deptName+ "&tel=" + tel,
        1000,
        520
    );
}

//选择班组人员
function chooseGroupPersons(txtId, txtName,groupId,groupName,dialogId, gId) {
    quick_dialog(
        "selectDiloag",
        "选择人员",
        getContext()+"choose/groupPersonPage?txtId=" + txtId +"&txtName=" + txtName +"&groupId=" + groupId +"&groupName=" + groupName +"&dialogId=" + dialogId + "&gId=" + gId,
        1000,
        520
    );
}

//选择设备
function chooseDevices(type, txtId, txtName,dialogId, id,deviceName, deviceSpec, locationName,useDepartmentName) {
    if (txtId == null)txtId = "";
    if (txtName == null)txtName = "";
    quick_dialog(
        "selectDiloag",
        "选择设备",
        getContext()+"device/choose/devicePage?type="+type+"&txtId=" + txtId +"&txtName=" + txtName +"&dialogId=" + dialogId + "&id=" + id+ "&deviceName=" + deviceName+ "&deviceSpec=" + deviceSpec+ "&locationName=" + locationName+ "&useDepartmentName=" + useDepartmentName,
        1000,
        520
    );
}

/**
 * 只能输入数字
 * @param e
 */

function isNumDouble(e){
    var v = $(e).val();
    if(!v)return;
    if(v.toString().length>15){
        alert("请输入15位以内的数字");
        $(e).val("");
        return;
    }
    if(!v.match(/^\d+(\.)?(\d+)?$/)){
        alert("请输入数字");
        $(e).val("");
        return false;
    }
}
/**
 * 只能输入数字
 * @param e
 */

function isNumDouble1(e){
    var v = $(e).val();
    if(!v)return;
    if(v.toString().length>7){
        notify("请输入7位以内的数字","warn");
        $(e).val("");
        return;
    }
    if(!v.match(/^\d+(\.)?(\d+)?$/)){
        notify("请输入数字","warn");
        $(e).val("");
        return false;
    }
}

function checkLenght(e){
    var v = $(e).val();
    if(!v)return;
    if(v.toString().length>25){
        notify("请输入25位以内的数字","warn");
        $(e).val("");
        return false;
    }
}


/**
 * 只能输入正数
 * @param e
 */
function isNum(e){
    var v = $(e).val();
    if(!v)return;
    if(v.toString().length>9){
        alert("请输入9位以内的数字");
        $(e).val("");
        return;
    }
    if(!v.match(/^\d+$/)){
        alert("请输入整数");
        $(e).val("");
        return false;
    }
}

/**
 * 地图级别数字验证
 * @param e
 */
function mapLevelIsNum(e){
    var v = $(e).val();
    if(!v)return;
    if(v.toString().length>2){
        alert("请输入2位以内的数字");
        $(e).val("");
        return;
    }
    if(!v.match(/^\d+$/)){
        alert("请输入正整数");
        $(e).val("");
        return false;
    }
}

/**
 * 只能输入正数
 * @param e
 */
function isNum1(e){
    var v = $(e).val();
    if(!v)return;
    if(v.toString().length>3){
        notify("请输入3位以内的数字","warn");
        $(e).val("");
        return;
    }
    if(!v.match(/^\d+$/)){
        notify("请输入整数","warn");
        $(e).val("");
        return false;
    }
}
/**
 * 验证库存量是否为数字
 * @param e
 * @returns {boolean}
 */
function isNumReal(e){
    var v = $(e).val();
    if(!v)return;
    var s=v.split(".");
    if(v<0||v>999999999.99){
        notify("请输入9位以内整数和2位小数","warn");
        $(e).val("");
        return false;
    }
    if(s[0].toString().length>9 || s[1].toString().length>2){
        notify("请输入9位以内整数和2位小数","warn");
        $(e).val("");
        return false;
    }

}

$(function(){
    /* 通过ul宽度及点的个数计算间隔值 */
    $(".homepage-path ul").each(function(){
        var count =  $(this).find("li").length;
        var borwidth = 50.9;//默认是谷歌浏览器
        if(navigator.userAgent.indexOf("MSIE")!=-1){
            borwidth = 112;
        }
        var distans = parseInt(( $(this).width()- count*borwidth ) / (count-1));
        $(this).find("li").not(":first").not(":last").css("padding-left",distans +"px");
        if(navigator.userAgent.indexOf("MSIE")!=-1){
            $(this).find("li:last").css("padding-left",distans-5 +"px");
        }else{
            $(this).find("li:last").css("padding-left",distans-5 +"px"); //在ie下有时会多一像素最后一个点跑到下一行，所以最后一个减一像素兼容ie
        }
    });
    /* 通过ul宽度及点的个数计算间隔值 */
    $(".homepage-path1 ul").each(function(){
        var count =  $(this).find("li").length;
        var borwidth = 110;//默认是谷歌浏览器
        if(navigator.userAgent.indexOf("MSIE")!=-1){
            borwidth = 170;
        }
        var distans = parseInt(( $(this).width()- count*borwidth ) / (count-1));
        $(this).find("li").not(":first").not(":last").css("padding-left",distans +"px");

        $(this).find("li:last").css("padding-left",distans-10 +"px"); //在ie下有时会多一像素最后一个点跑到下一行，所以最后一个减一像素兼容ie
    });


});


/**
 * 根据当前状态手动改变当前选中值
 * @param status

 function statusClass(status){
    if(status){
        if("1" === status || "3" === status){
            $(".homepage-path-point").addClass("point-one");
        }
        if("2" === status || "5" === status ){
            $(".homepage-path-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path-point-two").addClass("point-two");
        }
        if("4" === status || "7" === status){
            $(".homepage-path-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path-point-two").addClass("point-two");
            $(".three").addClass("graybg");
            $(".homepage-path-point-three").addClass("point-three");
        }
        if( "6"===status ){
            $(".homepage-path-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path-point-two").addClass("point-two");
            $(".three").addClass("graybg");
            $(".homepage-path-point-three").addClass("point-three");
            $(".four").addClass("graybg");
            $(".homepage-path-point-four").addClass("point-four");
        }
        if( "8"===status ){
            $(".homepage-path-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path-point-two").addClass("point-two");
            $(".three").addClass("graybg");
            $(".homepage-path-point-three").addClass("point-three");
            $(".four").addClass("graybg");
            $(".homepage-path-point-four").addClass("point-four");
            $(".five").addClass("graybg");
            $(".homepage-path-point-five").addClass("point-five");
        }


    }
}*/
/**
 * 根据当前状态手动改变当前选中值
 * @param status
 */
function maintainStatusClass(status){
    if(status){
        if("05" === status){
            $(".homepage-path1-point").addClass("point-one");
        }
        if("02" === status){
            $(".homepage-path1-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path1-point-two").addClass("point-two");
        }
        if("03" === status || "07" === status){
            $(".homepage-path1-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path1-point-two").addClass("point-two");
        }
        if("04" === status || "06" === status){
            $(".homepage-path1-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path1-point-two").addClass("point-two");
            $(".three").addClass("graybg");
            $(".homepage-path1-point-three").addClass("point-three");
        }
    }
}

/**
 * 设置报修流程
 * @param status
 */
function repaiMainStatus(status){
    if(status){
        if("1" == status || "4" == status){
            $(".homepage-path1-point").addClass("point-one");
        }
        if("2" == status || "3"==status || "7"==status){
            $(".homepage-path1-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path1-point-two").addClass("point-two");
        }
        if("5" == status || "6" == status){
            $(".homepage-path1-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path1-point-two").addClass("point-two");
            $(".three").addClass("graybg");
            $(".homepage-path1-point-three").addClass("point-three");
        }
    }
}

/**
 * 设置报修流程
 * @param status
 */
function haulStatus(status){
    if(status){
        if("02" == status || "04" == status){
            $(".homepage-path1-point").addClass("point-one");
        }
        if("03" == status ||  "07"==status){
            $(".homepage-path1-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path1-point-two").addClass("point-two");
        }
        if("05"==status ||"06" == status){
            $(".homepage-path1-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path1-point-two").addClass("point-two");
            $(".three").addClass("graybg");
            $(".homepage-path1-point-three").addClass("point-three");
        }
    }
}

/**
 * 多个月份用逗号分隔
 * @param e
 */
function isMonth(e){
    var v = $(e).val();
    if(!v)return;
//    var year = $("#overhaulYear").val();
//    if(!year){
//        alert("请先填写计划年度");
//        return;
//    };
    var cDate = new Date();
    var minDate = new Date(cDate.getFullYear(),cDate.getMonth()+2);
    var m = v.split(",");
    if(0==m.length)
    {
        return;
    }else{
        var result = true;
        for(var i=0;i< m.length;i++){
            var mm = Number(m[i]);
            if(null!=mm && undefined!=mm && !(mm>=0)){result=false; break;}//字符串为空时转换为0.故添加月份判断>=0
            if(''!=m[i]){
                //整数判断
                if(!m[i].match(/^\d+$/) || mm>12 || mm<1){
                    result =  false;
                }else{
                    if(new Date(Number(year),mm-1)<minDate){
                        result = false;
                    }
                }
            }
            if(!result) break;
        }
        if(!result){
            $(e).val('');
            alert("月份格式错误,请检查");
        }
        return result;
    }
}

function isDouble(e){
    var v = $(e).val();
    if(!v)return;
    if(!v.match(/^[-+]?\d+(\.\d+)?$/)){
        notify("请输入正确的实数!", "warn");
    }
}


/**
 * 设置报修流程
 * @param status
 */
function laStatus(status){
    if(status){
        if("1" == status || "3" == status){
            $(".homepage-path1-point").addClass("point-one");
        }
        if("2" == status ){
            $(".homepage-path1-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path1-point-two").addClass("point-two");
        }
        if("4"==status ||"99" == status){
            $(".homepage-path1-point").addClass("point-one");
            $(".two").addClass("graybg");
            $(".homepage-path1-point-two").addClass("point-two");
            $(".three").addClass("graybg");
            $(".homepage-path1-point-three").addClass("point-three");
        }
    }
}

/**
 *
 * 表格合并单元格rowSpan,本方法只针对相邻两行单元格的合并，所以数据查询的时候需要按照一定的规则分组排序
 * 参数(tableId)：表格的id
 * 参数(mergeCols)：要合并的列，数组，如合并第1,2两列，则mergeCols=[0,1]
 * 参数(compareFun)：上下两个单元格是否需要合并的比较方法
 **/
function mergeRowSpan(tableId,mergeCols,compareFun) {
    var tb = document.getElementById(tableId);
    var totalRows = tb.rows.length;
    if(totalRows==0){
        return false;
    }
    var totalCols = tb.rows[0].cells.length;
    if(!mergeCols){
        mergeCols=[];
        for( var i = totalCols-1; i >= 0; i--){
            mergeCols.push(i);
        }
    }
    mergeCols=mergeCols.sort(function(a,b){
        //从大到小排序
        return b-a;
    });
    var startCell;
    var targetCell
    for(var idx in mergeCols){
        var i=mergeCols[idx]
        for ( var j = totalRows-1; j >= 1; j--) {
            startCell = tb.rows[j].cells[i];
            targetCell = tb.rows[j-1].cells[i];
            /*console.log(startCell);
             console.log(targetCell);
             console.log('-------'+i+'-------')*/
            if(compareFun(startCell,targetCell)==0){
                targetCell.rowSpan=(startCell.rowSpan==undefined)?2:(startCell.rowSpan+1);
                tb.rows[j].deleteCell(i)
            }
        }
    }
}

/**
 * 收集页面参数
 * @param formId
 * @param url 跳转的url
 * @param grid
 * @param localUrl 记录原始的url供返回使用
 * @param otherParam 当使用流程时出现额外参数时使用
 */
function formard(formId,url,grid,localUrl,otherParam){
    var arr = [];
    if($("#"+formId))
        arr = $("#"+formId).serializeArray();
    if($("#"+grid).length !=0){
        var page = $("#"+grid).data("kendoGrid").pager.dataSource._page;
        var pageSize =  $("#"+grid).data("kendoGrid").pager.dataSource._pageSize;
        arr.push({"name":"pageNo","value":page});
        arr.push({"name":"pageSize","value":pageSize});
    }
    arr.push({"name":"localUrl","value":localUrl});
    if(otherParam){
        var str = "_bpm_extra_params={\"id\":"+otherParam+",";
        if(otherParam == "0")
            str = "_bpm_extra_params={";
        var name = "";
        $.each(arr,function(index,item){
            name = item.value+"";
            if(name && name.match(/[\u2E80-\u9FFF]/)){
                str +=",\""+item.name+"\":\""+encodeURIComponent(encodeURIComponent(encodeURIComponent(item.value)))+"\"";
            }else{
                str +=",\""+item.name+"\":\""+item.value+"\"";
            }
        });
        str += "}";
        url = url+"&"+str;
    }else{
        if(url.indexOf("?")>0)
            url = url+"&"+$.param(arr,true);
        else
            url = url+"?"+$.param(arr,true);
    }
    window.location.href = url;
}

/**
 *对Date的扩展，将 Date 转化为指定格式的String
 *月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @param fmt
 * @returns {*}
 * @constructor
 */
Date.prototype.Format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,//月份
        "d+" : this.getDate(),//日
        "h+" : this.getHours(),//小时
        "m+" : this.getMinutes(),//分
        "s+" : this.getSeconds(),//秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o) if(
        new RegExp("("+ k +")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); return fmt;
};

/**
 * 比较当前的日期的大小
 * @param date1
 * @param date2
 */
function compareDate(date1,date2){
    var year1 = date1.getYear();
    var year2 = date2.getYear();
    if(navigator.userAgent.indexOf("MSIE")!=-1){
        year1 = date1.getFullYear();
        year2 = date2.getFullYear();
    }
    var month1 = date1.getMonth();
    var month2 = date2.getMonth();
    var day1 = date1.getDate();
    var day2 = date2.getDate();

    if(year1 === year2)
    {
        if(month1>month2){
            return true;
        }else if(month1 == month2){
            if(day1>=day2)
                return true;
            return false;
        }else{
            return false;
        }

    }else if(year1 >year2)return true;
    else    return false;

}
/**
 * 打印报表
 * @param id
 * @param print
 */
function showReport(id,print){
    quick_dialog("report_win", "报表", getContext()+"base/printPreview?businessId="+id+"&reportName=report&jasperPath="+print+".jasper", 860, 600,null );
}

/**
 * 表单提交回调函数
 * @param response
 * @param dataGridId
 * @param dialogId
 */
function validateCallback5000(response, dataGridId,dialogId) {
    //var dataGrid;
    if (response.status == "success") {
        notify(response.data.message || "操作成功！", "success");
        if (response.data.next) {
            if (response.data.next == ".") {//刷新datagrid
                edited_callback(window.parent._main_frame.get_grid("#" + dataGridId));
            } else if (response.data.next == "x") {//关闭dialog并刷新datagrid
                edited_callback(window.parent._main_frame.get_grid("#" + dataGridId));
                close_dialog();//关闭dialog
            }
            else if (response.data.next == 'r') {
            } else if (response.data.next == 'c') {
                close_dialog(dialogId);//关闭dialog
            } else {//关闭dialog并刷新页面
                if (parent) {//dialog中有iframe
                    if (parent.$("#_main_frame")) {
                        parent.loadFrame(getContext()+response.data.next);
                    }
                } else if ($("#_main_frame")) {
                    loadFrame(getContext()+response.data.next);
                }
                if(dialogId) {
                    close_dialog(dialogId);//关闭dialog
                }
            }
        }
    }
}


/**
 * 根据传入的参数下载excel文件
 * @param formId
 * @param url
 */
function downloadFile(formId,url){
    if($("#"+formId).length>0){
        /* var param = $("#queryForm").serializeArray();*/
        var param = $("#"+formId).serializeArray();
        window.location.href = url+"&"+ $.param(param);
    }else
        window.location.href = url;
}

/**
 * 根据传入的参数清除回显的查询条件
 */
function clearForm(formId){
    $("#"+formId+" :text").attr("value","");
}
/**
 * 返回并销毁fileupload对象
 */
function goback(url){
    destroyFileUpload();
    window.location.href = url;
}

//阻止冒泡事件,兼容IE
function cancelBubbleInfo(evt){
    var e=(evt)?evt:window.event; //判断浏览器的类型
    if (window.event) {
        e.cancelBubble=true;
    } else {
        e.stopPropagation();
    }
}

//如果是null或者undefined转译为空
function isNullOrEmpty(data){
    if(null==data || undefined ==data){
        return "";
    }else{
        return data;
    }
}
//统一文件下载方法
function downloadByEncodeURI(filename,path){
    window.location.href=  getContext()+'device/attachment/download?path='+path+'&fileName='+encodeURIComponent(filename);
}
function executeAjax(grid, url,confirmMsg) {
    if (!confirm(confirmMsg))return;
    $.ajax({
        type: "post",
        cache: false,
        url: url ? url : "delete",
        data: "_t=" + new Date().getTime(),
        success: function (response) {
            if (response.status == "error") {
                //$.message(response.message, $.message.TYPE_ERROR);
                //showErrorMsg(response.message);
                notify(response.message || "操作失败！","error");
            } else if (response.status == "success") {
                if (response.data.next) {
                    if (response.data.next == ".") {//刷新datagrid
                        edited_callback(grid);
                    } else if (response.data.next == "x") {
                        edited_callback(grid);
                    } else {//刷新maincontent  例子：response.data.next：  相对路径
                        parent.loadFrame(getContext()+response.data.next);
                    }
                }
                notify(response.data.message || "操作成功！","success");
                //$.message(response.data.message, $.message.TYPE_OK);
                // showSuccessMsg(response.data.message);

            }
        }, error: function (xhr, status, error) {
            var response = $.parseJSON(xhr.responseText);
            if (response.error) {
                response = response.error;
            }
            //$.message(response.message, $.message.TYPE_ERROR);
            ///showErrorMsg(response.message);
            notify(response.message || "操作失败！","error");
        }
    });

}

/*pc所有流程处理前校验流程是否已操作*/
function processIsExists(id,url) {
    if(id==''){
        notify('流程不存在！','error');
    }
    var processstatus=true;
    $.ajax({
        type: "POST",
        async: false,
        dataType: "json",
        url:url,
        data: "id=" + id,
        success: function (msg) {
            if (msg == "NULL") {
                processstatus=false;
                notify('该流程已经被处理，请刷新页面！','error');
                return false;
            }
        }
    });
    return processstatus;
}
