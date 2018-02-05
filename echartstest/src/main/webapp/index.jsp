<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <base href="#">

    <title>My JSP 'index.jsp' starting page</title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="This is my page">
</head>

<body>
<script  src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script  src="${pageContext.request.contextPath}/js/jquery-1.8.3.js"></script>
<script src="${pageContext.request.contextPath}/assets/hc/js/jquery-1.11.1.js"></script>
<a href="${pageContext.request.contextPath}/person/listPerson.do">人员</a>
<br>
<a href="${pageContext.request.contextPath}/echarts/index.do">ECharts图表</a>
<script type="javascript">
    $(function(){
        alert("aaaaaaaaaaa");
    });
</script>

</body>
</html>
