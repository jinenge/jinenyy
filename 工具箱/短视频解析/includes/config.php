<? 
define('SYSTEM_ROOT', dirname(__FILE__).'/');
define('ROOT', dirname(SYSTEM_ROOT).'/');

$config=array(
'kfqq'=>'2958613932',//客服QQ
'siteurl'=>($_SERVER['SERVER_PORT']=='443'?'https://':'http://').$_SERVER['HTTP_HOST'],
'sitename'=>'短视频解析', //网站简称
'title'=>'去除水印', //网站标题
'keywords'=>'解析短视频', //网站关键词
'description'=>'短视频解析功能，仅供参考使用，请于24小时内将解析保存或者下载的视频进行删除操作，感谢您的支持。', //网站描述
    );
include_once ROOT."includes/functions.php";



$ip=real_ip(2);
//0 极易被伪造IP，1 在网站使用CDN的情况下选择此项，在不使用CDN的情况下也会被伪造，2 直接获取真实请求IP，无法被伪造，但可能获取到的是CDN节点IP