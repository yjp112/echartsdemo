/**
 * 巡检管理--巡检监控--监控
 */
function monitorIndexMon(grid){
	var row = grid.select();
    if(row.length==0){
        notify("没有选择要监控的任务", "warn");
        return false;
    }
    if(row.length>4){
        notify("一次最多只能选择4条监控线路", "warn");
        return false;
    }
    var detialId="";
    for(var i=0;i<row.length;i++){
        detialId += grid.dataItem(row[i]).detailId+",";
    }
    var planType= grid.dataItem(row[0]).planType;
    var isAdditional= grid.dataItem(row[0]).isAdditional;

    var planNameTemp1 = encodeURIComponent(encodeURIComponent($("#planNameTemp1").val()));
    var lineNameTemp2 = encodeURIComponent(encodeURIComponent($("#lineNameTemp2").val()));

    url = $.CONTEXT_PATH+"/monitor/execution/monitor/monitorshow?detialId="+detialId+"&planType="+planType+"&isAdditional="+isAdditional+"&planNameTemp1="+planNameTemp1
           +"&lineNameTemp2="+lineNameTemp2 ;
    var localUrl = $.CONTEXT_PATH+"/monitor/execution/monitor/monitorIndex";
    formard("", url, "grid", localUrl)
    //window.location.href="/tjyy/monitor/execution/monitor/monitorshow?detialId="+detialId+"&planType="+planType+"&isAdditional="+isAdditional;
}
/**
 * 巡检管理--巡检监控--强制结束
 */
function monitorIndexStop(grid){
	var row = grid.select();
    if(row.length==0){
        notify("没有选择要强制结束的任务", "warn");
        return false;
    }
    if(row.length>1){
        notify("一次最多只能选择1条任务强制结束", "warn");
        return false;
    }
    var data = grid.dataItem(row)
    if(data.status != '巡检中'){
        notify("只有计划状态为巡检中的任务才能强制结束", "warn");
        return false;
    }
    var detialId="";
    for(var i=0;i<row.length;i++){
        detialId += grid.dataItem(row[i]).detailId+",";
    }

    var planType= grid.dataItem(row[0]).planType;
    var isAdditional= grid.dataItem(row[0]).isAdditional;
    if(!confirm("确定要强制结束吗？"))return false;

    $.ajax({
        type:"post",
        url:$.CONTEXT_PATH+"/monitor/execution/monitor/mandatoryFinish",
        async: false,
        data:{
            "detailId":detialId,
            "planType":planType,
            "isAdditional":isAdditional
        },
        success: function(data, textStatus){
            if(data.data!="强制解除失败！"){
                notify("强制结束成功", "warn");
                $("#queryBtn").click();
                return true;
            }else{
                notify("强制结束失败，请咨询系统管理员", "warn");
                return false;
            }
        },
        error: function(){
            notify("发送请求失败", "warn");
            return false;
        }
    });
}

/**
 * 设备管理--设备导入导出--编辑
 */
function deviceExpEdit(grid){
	var cs = getCheckedData("#grid","input[name='check']");
	  var ids = [];
    if (null == cs || cs.length == 0) {
        notify("请选择要修改的项", "error");
        return;
    }
    for(var i=0; i<cs.length; i++){
  	  ids.push(cs[i].id);
    }
    
    if(ids.length == 0){
  	  notify("没有选中需要修改的选项！","warn");
    	return;
    }else if(ids.length > 1){
  	  notify("请选中一项进行修改！","warn");
        return;
    }
    window.location.href=$.CONTEXT_PATH+"/device/device/edit?flage=1&id=" + ids;
}
/**
 * 设备管理--设备导入导出--删除
 */
function deviceExpDel(grid){
	var cs = getCheckedData("#grid","input[name='check']");
	var ids = [];
    if (null == cs || cs.length == 0) {
        notify("请选择要处理的项", "error");
        return;
    }
    for(var i=0; i<cs.length; i++){
  	  ids.push(cs[i].id);
    }
    
    if(ids.length == 0){
  	  notify("没有选中需要删除的选项！","warn");
    	return;
    }
    
    if(!confirm("确定要删除吗？"))return;
	  else{
        $.ajax({
            type: "post",
            cache: false,
            url: $.CONTEXT_PATH+"/device/imp_exp/delete",
            data: "ids=" + ids,
            success:function(msg){
				if (msg.status == "fail") {
					notify(msg.message);
				}else{
					notify("删除成功","success");
					edited_callback(grid);
				}
				
			}, error: function (xhr, status, error) {
				notify("删除失败，请检查网络！","error");
            }
        });
	  }
}
/**
 * 设备管理--设备导入导出--导出
 */
function deviceExpExp(){
	var locationId = $("input[name='locationId']").val();
	var categoryId = $("input[name='categoryId']").val();
	var hpid = $("input[name='hpid']").val();
	var deviceCode = $("input[name='deviceCode']").val();
	var deviceName = $("input[name='deviceName']").val();
	window.location.href=$.CONTEXT_PATH+"/device/imp_exp/expDevice?locationId="+locationId+"&categoryId="+categoryId+"&hpid="+hpid+"&deviceCode="+deviceCode+"&deviceName="+deviceName;
}