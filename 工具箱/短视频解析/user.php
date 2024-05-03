<? //千山万水总是情，留个版权行不行，@远昔博客 yuanxiblog.cn
include_once('./includes/config.php');
$url=$_GET['url'];
$file=file_name($url); if($file==null){ exit(include_once('./404.php')); }
if(file_exists($file)){ $user=@json_decode(file_get_contents($file),true); }
if($user==null||!is_array($user)){   swal(2,'系统提示','解析错误，请您返回重新解析试下!','知道了','./');  }
$images=$user['images'];
?>

<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
     <meta name="referrer"  content="no-referrer" />
    
    <title><?=$user['desc'].' - '.$config['sitename']?></title>
    <link rel="stylesheet" href="./assets/layui/css/layui.css">
    <link href="./assets/user/css/bootstrap.min.css" rel="stylesheet">
    <link href="./assets/user/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./assets/user/css/main.css">
    <link rel="stylesheet" href="./assets/user/css/oneui.css">

</head>

<body><br>

<style>body { background: linear-gradient(to right, #2F4F4F, #483D8B) fixed; }</style>

<div class="col-xs-12 col-sm-10 col-md-8 col-lg-5 center-block" style="float: none;">
<div class="widget">



  

        
 

            
<div class="tab-content">
<div class="tab-pane active" id="yx_1">

<?  if(strpos($user['type'],'视频')!==false){ ?>
<div class="form-group"><div class="input-group">
<div class="input-group-addon"><i class="fa fa-vimeo"></i> 视频地址</div>
<? if($user['video']){ ?>
<input type="text" class="form-control" value="<?=$user['video']?>" id="qsy_url" download="<?=$user['video']?>" onclick="copy( $('#qsy_url').val() )">
<span class="input-group-btn"><a class="btn btn-default" href="<?=$user['video']?>" rel="noreferrer" id="chakan"target="_blank">查看视频</a></span>
 <?}else{?><input type="text"  class="form-control" value="获取失败"disabled><?}?>
</div>

<? if(mobile()=='电脑'){?>
<pre><i class="layui-icon layui-icon-windows"></i>电脑用户：点击查看视频后，一般右下角有下载或另存为的按钮</pre>
<? }if(mobile()=='安卓'){?>
<pre><i class="layui-icon layui-icon-android"></i>安卓用户：建议使用UC、360、QQ等浏览器使用本站方便下载视频</pre>
<? }if(mobile()=='苹果'){?>
<pre><i class="layui-icon layui-icon-ios"></i>苹果用户：<button onclick="ios_course()" class="layui-btn layui-btn-xs"><i class="layui-icon layui-icon-next"></i>点我查看视频下载教程<i class="layui-icon layui-icon-prev"></i></button></pre><?}?>
</div><?}?>


<div class="input-group">
<span class="input-group-addon"><i class="layui-icon layui-icon-picture"></i> 封面图片</span>
<? if($user['cover']){ ?><img src="<?=$user['cover']?>" width="100%" height="80px" class="LightGallery_YX"lg-data-src="<?=$user['cover']?>">
<?}else{?><input type="text"  class="form-control" value="获取失败"disabled><?}?>
</div><br>

<? if(strpos($user['type'],'图集')!==false && $images[0]!=null){ ?>
<div class="input-group">
<span class="input-group-addon"><i class="layui-icon layui-icon-carousel"></i> 图集列表</span>
<? foreach($images as $row){?><img src="<?=$row?>" width="25%" height="80px" class="LightGallery_YX"lg-data-src="<?=$row?>"> <?}?>
</div><pre><i class="layui-icon layui-icon-speaker"></i>小提示：点击图片即可放大查看并保存图片</pre>
<?}?>


<div class="input-group">
<span class="input-group-addon"><i class="layui-icon layui-icon-headset"></i> 描述文案</span>
<? if($user['desc']){?><input type="text" id="desc" class="form-control" value="<?=$user['desc']?>" onclick="copy( $('#desc').val() )">
<span class="input-group-btn"><button class="btn btn-default" data-clipboard-target="#desc">复制</button></span>
<?}else{?><input type="text"  class="form-control" value="获取失败"disabled><?}?>
</div><br>

<div class="input-group">
<span class="input-group-addon"><i class="layui-icon layui-icon-note"></i> 作品类型</span>
<input type="text" class="form-control" value="<?=($user['type']!=null?$user['type']:'未知')?>"disabled>
</div><br>

<div class="input-group">
<span class="input-group-addon"><i class="fa fa-ge"></i> APP名称</span>
<input type="text" class="form-control" value="<?=($user['name']!=null?$user['name']:'未知')?>"disabled>
</div><br>

</div>

<div class="tab-pane" id="yx_2">
    
  		<table class="table table-borderless table-pricing">
            <tbody>
                
<tr class="active"><td>
<div align="center">
    






<button type="button" style="width:49%; margin: 0;" class="layui-btn layui-btn-fluid layui-btn-normal layui-btn-radius" onclick="copy('<?=get_url()?>')"><i class="layui-icon layui-icon-file"></i>复制链接</button>



</div>

<tr><td class="text-muted">
<small><em>* <?=$config['sitename']?> <i class="fa fa-arrows-h"></i> <?=get_host()?>
<br>原作品链接：<?=$user['url']?></em></small>
</td></tr>

</tbody></table>
 
</div>
</div>

<div class="btn-group btn-group-justified form-group">
<a class="btn btn-block btn-success btn-rounded" href="./"><i class="fa fa-home sidebar-nav-icon"></i>返回首页</a>
<a class="btn btn-block btn-primary btn-rounded" id="cxjx" onclick="cx_jiexi()"><i class="fa fa-repeat"></i>重新解析</a></div>
            
        </div>

<center><li class="list-group-item">
<b style="text-shadow: LightSteelBlue 1px 0px 0px;">
<span style="font-weight:bold">
<?  if(strpos($user['type'],'视频')!==false){ ?>如果去水印视频加载不出来或打不开，请重新解析视频再试下！<br><?}?>
视频版权归相关网站及作者所有，<?=$config['sitename']?>不存储任何视频及图片<br>
</span></b>
</li></center></div>

<script src="./assets/user/js/jquery.min.js"></script>
<script src="./assets/user/js/bootstrap.min.js"></script>

<? include_once('./includes/js.php');?>