function generateQRCode(renderElementId,rendermethod, picwidth, picheight, contentText,logoUrl) {

    var logowidth=picwidth/4;
    var logoheight=picheight/4;
    var style='position:absolute;z-index:9999999;left:50%;top:50%;width:'+logowidth+'px;height:'+logoheight+'px;padding:2px;background:#fff;background-repeat:round;border-radius:10px;';
    var logoId=renderElementId+'_logo';
    $("#"+renderElementId).css({"padding": "8px","background-color": "#fff","border-radius": "8px"}).empty().append('<div id="'+logoId+'" style="'+style+'"><img src="'+logoUrl+'" width="100%" height="100%"></div>').qrcode({
        render: rendermethod, // 渲染方式有table方式（IE兼容）和canvas方式
        width: picwidth, //宽度
        height:picheight, //高度
        text: utf16to8(contentText), //内容
        typeNumber:-1,//计算模式
        correctLevel:0,//二维码纠错级别
        background:"#ffffff",//背景颜色
        foreground:"#000000"  //二维码颜色

    });

    var margin = -$("#"+logoId).height()/2;
    $("#"+logoId).css({
        "margin-top":margin,
        "margin-left":margin,
        "box-sizing":'border-box'
    });
}

//中文编码格式转换
function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}