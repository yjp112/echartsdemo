<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <title>标题</title>
    <link href="${pageContext.request.contextPath}/assets/hc/framework/styles/kendo.common.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/assets/hc/framework/styles/kendo.default.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/assets/hc/css/layout-default-latest.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/assets/hc/css/jquery.validator.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/assets/hc/css/ztree/zTreeStyle.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/assets/hc/css/font-awesome.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/assets/hc/skins/hctpl3/css/skin.css" rel="stylesheet"/>

    <link href="${pageContext.request.contextPath}/platform/css/font.css" rel="stylesheet">

    <script src="${pageContext.request.contextPath}/assets/hc/js/jquery-1.11.1.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/js/jquery.layout-latest.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.core.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.data.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.dom.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.button.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.menu.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.popup.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.list.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.dropdownlist.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.combobox.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.calendar.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.datepicker.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.timepicker.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.datetimepicker.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.userevents.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.numerictextbox.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.pager.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.selectable.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.columnsorter.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.binder.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.validator.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.editable.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.multiselect.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.autocomplete.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.resizable.min.js "></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.grid.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.treelist.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.draganddrop.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.window.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/messages/kendo.messages.zh-CN.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/cultures/kendo.culture.zh-CN.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.tabstrip.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.scheduler.view.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.scheduler.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/messages/kendo.messages.zh-CN.min.js "></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.scheduler.agendaview.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.scheduler.dayview.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.scheduler.monthview.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.scheduler.recurrence.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.scheduler.timelineview.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.scheduler.agendaview.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/framework/js/kendo.all.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/js/jquery.form.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/js/jquery.validator.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/js/adapter.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/js/base64.js"></script>

    <!-- 报警 -->
    <script type="text/javascript" src="${pageContext.request.contextPath}/alarmjs/js/dialog.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/alarmjs/js/alarm.js"></script>

    <!--        临时使用           -->
    <link href="${pageContext.request.contextPath}/assets/custom/js/pathStep/css/css.css" rel="stylesheet">

    <script src="${pageContext.request.contextPath}/assets/hc/js/notify-combined.min.js"></script>
    <%--<script src="${pageContext.request.contextPath}/assets/hc/js/site.js"></script>--%>
    <script src="${pageContext.request.contextPath}/assets/hc/js/jquery.autocomplete.js"></script>
    <script src="${pageContext.request.contextPath}/assets/hc/js/jquery.ztree.all-3.5.min.js"></script>

    <script src="${pageContext.request.contextPath}/assets/custom/js/site.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/custom.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/navmenu.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/ywgl.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/zh_CN.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/addrow.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/buttonfunc.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/pathStep/pathStep.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/chart.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/qrcode/jquery.qrcode.min.js"></script>
    <script src="${pageContext.request.contextPath}/assets/custom/js/qrcode/qrcode-util.js"></script>

    <%--<script src="${pageContext.request.contextPath}/platform/js/hcjs.js"></script>--%>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/platform/css/hcstyle.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/platform/css/font.css"/>
    <%--<link rel="stylesheet" href="${pageContext.request.contextPath}/platform/css/custom.css" />--%>

    <link href="${pageContext.request.contextPath}/assets/custom/css/custom.css" rel="stylesheet">


    <link href="${pageContext.request.contextPath}/assets/custom/skins/default/skin.css" rel="stylesheet" id="skin_css_file_ndgs"/>

    <script type="text/javascript">
        $.CONTEXT_PATH = "$!{rc.contextPath}";
        var skin_url_cookie;
        /* 读取皮肤 */
        skin_url_cookie = readCookie("skin_url_ndgs");
        if (skin_url_cookie) {
            $("#skin_css_file_ndgs").attr("href", skin_url_cookie);
        }

    </script>
