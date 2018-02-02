/**
 * 控件使用需要jquery
 */
$(function(){
    var liLength = $('#Path li').length;
    var ulWidth = $('#Path').width();
    var liWidth =	(ulWidth-21)/(liLength-1);
    $('#Path li').width(liWidth);
    $('#Path li:first').width('21px');

});


function pathStep(){
    var liLength = $('#Path li').length;
    var ulWidth = $('#Path').width();
    var liWidth =	(ulWidth-21)/(liLength-1);
    $('#Path li').width(liWidth);
    $('#Path li:first').width('21px');
}
/**
 *动态计算当前状态处在第几步
 * @param status 当前步骤的状态
 */
function statusClass(status){
    if(!status){
        //alert("当前状态无效");
        return;
    }else{//状态不为空时
        var indexID =0;
        $('#Path li').removeClass('on');
        var length = $('#Path li').length;
        for(var i=0;i<length;i++){
            var data = $('#Path li').eq(i).attr("data");//绑定在li上的状态值多个可以使用','分隔
            if(data){
                if(data.indexOf(",")>0){
                    var arr = data.split(',');
                    var b = false;
                    for(var j=0;j<arr.length;j++){//判断当前值是否相等
                        if(status == arr[j]){
                            b = true;break;
                        }
                    }
                    if(b){
                        indexID = i;break;
                    }
                }else{
                    if(status == data){
                        indexID = i;break;
                    }
                }
            }
        }
        for (var i = 0; i <=indexID; i++) {
            $('#Path li').eq(i).addClass('on');
        }
    }
}