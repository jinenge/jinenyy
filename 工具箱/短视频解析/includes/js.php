<script src="//lib.baomitu.com/clipboard.js/1.7.1/clipboard.min.js"></script>
<script>
   var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
    layer.msg('复制成功！'); 
        e.clearSelection();
    });
    clipboard.on('error', function(e) {
     layer.msg('复制失败，请手动复制！');
    });
var clipboard2 = new Clipboard('.qiaoqiaofz'); 

function copy(text) {
    const id = 'copy-hide-dom';
    let elem = document.getElementById(id);
    if (!elem) {
        elem = document.createElement('input');
        elem.style.height = '0px';
        elem.style.outline = '0px';
        elem.style.borderWidth = '0px';
        elem.style.padding = '0 0';
        elem.style.margin = '0 0';
        elem.style.position = 'fixed';
        document.body.appendChild(elem);   }
    elem.value = text;
    elem.select();
    elem.setSelectionRange(0, elem.value.length);
    document.execCommand('copy');
 layer.msg('复制成功！'); }
</script>


<script src="//lib.baomitu.com/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="//lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>

<script src="./assets/layer/layer.js"></script>

<script>
function empty(e) { //判断是否为空
  switch (e) {
    case "":
    case 0:
    case "0":
    case null:
    case false:
    case undefined:
      return true;
    default:
      return false; }  }
      
      
function tips(text,id,seat,color,time,close) { 
layer.tips('<center>'+text+'</center>' ,id, {
    tips: [seat,color], //设置tips方向和颜色
            tipsMore:true , //是否允许多个tips，tipsMore:true开启
              time:time,  //3000=3秒，0不会消失
            closeBtn:close, //1开启关闭按钮
            }); }
            

function song_url(){ var songurl=$('#url').val();
	if(songurl.indexOf('http')<0){layer.alert('提示：链接不能带有汉字和空格等！<br>输入的链接不正确，建议使用复制粘贴！',{icon:7}); $('#url').val(''); return false;} try{
		if(songurl.indexOf('http://')>=0){
			var songid = 'http://' + songurl.split('http://')[1].split(' ')[0].split('，')[0].split("%")[0];
		}else if(songurl.indexOf('https://')>=0){
			var songid = 'https://' + songurl.split('https://')[1].split(' ')[0].split('，')[0].split("%")[0]; }
	if(songid != $('#url').val())layer.msg('链接转换成功，直接去水印即可！');
	}catch(e){ layer.alert('提示：链接不能带有汉字和空格等！<br>输入的链接不正确，建议使用复制粘贴！',{icon:2});$('#url').val(''); return false; }
	$('#url').val(songid); }

function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
return unescape(arr[2]); else return null; }
            
if(document.getElementById("url")) { 
tips('请在这里输入链接','#url',3,'#0FA6D8',4000);
$("#url").focus(function(){  if(typeof(layer.tips)=='function') layer.tips('请将复制的视频链接粘贴到这里', this, { tips: 1}); }); }

if(document.getElementById("qsy_url")){ tips('视频无法查看？点我重新试下','#cxjx',1,'#0FA6D8',5000,1); 
tips('请务必在8分钟内下载保存视频<br>否则超时的话 可能要重新解析','#qsy_url',1,'red',11000,1);
}
</script>

<!--千山万水总是情，留个版权行不行，@远昔博客 yuanxiblog.cn-->

<style> body .layui-layer-ns .layui-layer-btn0{ background-color:#1E9FFF; color:#fff;} 
body .layui-layer-ns .layui-layer-btn1{ background-color:#1E9FFF; color:#fff;} 
body .layui-layer-ns .layui-layer-btn2{ background-color:red; color:#fff;} </style>
<script>
var Android_url='<?=$Android_url?>';
var Android_pwd='<?=$Android_pwd?>';
var Ios_url='<?=$Ios_url?>';
var Ios_pwd='<?=$Ios_pwd?>';
function app() {
layer.confirm("<center>下载APP，祛除水印更方便！<br><i class='layui-icon layui-icon-download-circle'></i>点击下方按钮选择下载<i class='layui-icon layui-icon-download-circle'></i></center>",{
title: '<i class="layui-icon layui-icon-app"></i>&nbsp;请选择APP类型',
skin: "layui-layer-btn2", 
btnAlign: "c",
area: "300px;",
anim:6, 
btn: ['<i class="layui-icon layui-icon-android"></i>&nbsp;'+"安卓APP", '<i class="layui-icon layui-icon-ios"></i>&nbsp;'+"苹果APP"] ,
success:function(layero){layero.find(".layui-layer-btn").css("text-align", "center");},
yes: function(index,layero){
layer.msg("正在为您跳转下载...请稍等");    
xiazai(Android_url,Android_pwd);   
  }
  ,btn2: function(index,layero){

    layer.confirm("1.请使用苹果自带浏览器Safari<img src=https://www.yuanxiapi.cn/api/fhurl/iphone.png width=6% style=max-width:100%;border-radius:50%;>,再进入本网站下载APP<hr>2.下载完成后,退出浏览器，打开设置-打开通用-打开描述文件(或者设备管理)<hr>3.最后进行安装，返回桌面即可看见", {title:"苹果app安装下载教程",type:1,icon:3,time:900000000,btn:"知道了，立即下载安装APP",success:function(layero){layero.find(".layui-layer-btn").css("text-align", "center");},yes: function(index,layero){ xiazai(Ios_url,Ios_pwd);  } });
 
  }
  ,cancel: function(){ 
} }); }

function xiazai(appurl,pwd) {
layer.msg("正在为您跳转下载...请稍等");  
  $.ajax({
		type : "GET",
		url : "https://www.yuanxiapi.cn/api/lanzou/",
      data : {url:appurl,pwd:pwd}, 
		dataType : "json",
		success : function(data) {
if(data.code == 200){ 
window.location.href=data.download; 
}else{
layer.alert(data.msg,{icon:2},function(){ window.location.reload(); }); 
}  },error:function(data){  layer.alert("请稍后重试，"+data.msg);  return false;  } });    
}

function cx_jiexi() { 
 layer.open({
        type: 1
        ,title:'<i class="layui-icon layui-icon-video"></i>重新解析的窗口提示' 
        ,closeBtn:2  //关闭按钮，1 2和false
        ,skin: 'layui-layer-molv' 
        ,shade: 0.8
        ,btn: ['确定重新解析','立即关闭窗口']
        ,btnAlign: 'c'
        ,anim:6 //弹出动画，6抖动
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding:50px;line-height:22px;background-color:#393D49;color:#fff;font-weight:300;">若视频或图片无法查看，重新解析基本可以解决！<br>建议您解析后尽快下载保存，否则过会儿 可能会超时失效，得重新解析才行！</center></div>'
,success:function(layero){layero.find(".layui-layer-btn").css("text-align", "center");}
,yes:function(index,layero){ jiexi('<?=$user['url']?>'); }
,btn2:function(index,layero){  }    
 });  }
 
 
 <? $ios_wj='FreeBox';?>
 function ios_course() {
layer.open({
        type: 1
        ,title:'<i class="layui-icon layui-icon-ios"></i>苹果手机下载视频教程' 
        ,closeBtn:2  //关闭按钮，1 2和false
        ,area: '380px'
        ,shade: 0.8
        ,btn: ['好的知道了']
        ,btnAlign: 'c'
        ,anim:6 //弹出动画，6抖动
        ,moveType: 1 //拖拽模式，0或者1
         ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"> 1、首先需要安装[<?=$ios_wj?>]文件管理软件<img src=/assets/img/FreeBox.png width=9% style=max-width:100%;border-radius:50%;><br>2、打开<?=$ios_wj?>软件，点击底部的【浏览器】按钮<br>3、输入本网站的网址在[<?=$ios_wj?>软件]搜索框中，前往查看视频并下载即可<hr><sub>提示：如果视频没有保存到照片相册文件夹里，一般需要用到<?=$ios_wj?>软件将视频移动到【照片文件夹】，点击左下角【文件夹】按钮，找到视频文件位置，移动到照片文件夹即可<br>简而言之：就是使用<?=$ios_wj?>软件里的浏览器，然后再打开本网站即可下载视频</sub></div>'
 });}


 function jiexi(url) {  
if(empty(url)){  var url = $("#url").val(); }
if(empty(url)){ return layer.msg('请输入链接，再进行解析', {icon: 2});  }   
var ii=layer.msg('正在解析中，请稍等', {icon:16,time:88888000,shade:[0.3, "#000"]});
$.ajax({
			type : "POST",
			url : "./ajax.php",
			data : {url:url },
			dataType : 'json',
			success : function(data) {
				layer.close(ii);
		if(data.code==200) { layer.msg('解析成功，正在加载中…',{icon:16,time:88888000}); window.location.href=data.url; }
	   if(data.code==202) { layer.msg(data.msg, {icon:2,anim:6,closeBtn:2,time:8000}); }
	   if(data.code==203) { tuiguang(); }
			},
error: function() { layer.alert('系统出错，请稍后重试一下', {icon: 0}); }
	}); }

</script>


<script src="./assets/lightgallery/js/lightgallery.min.js"></script>
<link href="./assets/lightgallery/css/lightgallery.min.css" rel="stylesheet" type="text/css">
    <script type="text/javascript">
        $(document).ready(function() {
            $("body").lightGallery({
                selector: ".LightGallery_YX"  });
        });</script>
</body>
</html>