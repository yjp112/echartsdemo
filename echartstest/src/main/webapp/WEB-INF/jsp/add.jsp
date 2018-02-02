<%--
  Created by IntelliJ IDEA.
  User: yejianping
  Date: 2018/1/16
  Time: 16:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <base href="<%=basePath%>">

    <title>My JSP 'list.jsp' starting page</title>

    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="This is my page">
    <!--
    <link rel="stylesheet" type="text/css" href="styles.css">
    -->

</head>

<body>
<form action="person/add.do" method="post">
    <table align="center" width="80%">
        <tr>
            <td><label>姓名：</label><input type="text" name="name" value="叶建平"></td>
            <td><label>性别：</label>
                <select name="gender">
                    <option value="">请选择</option>
                    <option value="1" selected="selected">男</option>
                    <option value="0" >女</option>
                </select>
            </td>
            <td><label>地址：</label><input type="text" name="personAddr" value="杭州市滨江区"></td>
            <td><label>生日：</label><input type="text" name="birthday" value="1989-02-26"></td>
            <td><input type="submit" value="添加"></td>
        </tr>
    </table>
</form>
<hr/>
</body>
</html>
