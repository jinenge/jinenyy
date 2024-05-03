<?  //千山万水总是情，留个版权行不行，@远昔博客 yuanxiblog.cn
$dir='jiexi_jilu'; if(!is_dir($dir)){ mkdir($dir); }

function file_name($url){ global $dir;
if(ifurl($url)!='网址'){ return false; }
$file_url = str_replace(["/","\\","'",".php",":","：","?","？","*","<",">"],null,$url).'.txt';
$file = $dir.'/'.$file_url; 
return $file;}

 function get_host($url=""){
    $url = $url ? $url : $_SERVER["HTTP_HOST"];
    $dual_host = array('aaa.pro','ac.cn','ac.kr','ac.mu','aca.pro','acct.pro','ae.org','ah.cn','ar.com','avocat.pro','bar.pro','biz.ki','biz.pl','bj.cn','br.com','busan.kr','chungbuk.kr','chungnam.kr','club.tw','cn.com','co.ag','co.am','co.at','co.bz','co.cm','co.com','co.gg','co.gl','co.gy','co.il','co.im','co.in','co.je','co.kr','co.lc','co.mg','co.ms','co.mu','co.nl','co.nz','co.uk','co.ve','co.za','com.af','com.ag','com.am','com.ar','com.au','com.br','com.bz','com.cm','com.cn','com.co','com.de','com.ec','com.es','com.gl','com.gr','com.gy','com.hn','com.ht','com.im','com.ki','com.lc','com.lv','com.mg','com.ms','com.mu','com.mx','com.nf','com.pe','com.ph','com.pk','com.pl','com.ps','com.pt','com.ro','com.ru','com.sb','com.sc','com.se','com.sg','com.so','com.tw','com.vc','com.ve','cpa.pro','cq.cn','daegu.kr','daejeon.kr','de.com','ebiz.tw','edu.cn','edu.gl','eng.pro','es.kr','eu.com','fin.ec','firm.in','fj.cn','game.tw','gangwon.kr','gb.com','gb.net','gd.cn','gen.in','go.kr','gov.cn','gr.com','gs.cn','gwangju.kr','gx.cn','gyeongbuk.kr','gyeonggi.kr','gyeongnam.kr','gz.cn','ha.cn','hb.cn','he.cn','hi.cn','hk.cn','hl.cn','hn.cn','hs.kr','hu.com','hu.net','idv.tw','in.net','incheon.kr','ind.in','info.ec','info.ht','info.ki','info.nf','info.pl','info.ve','jeju.kr','jeonbuk.kr','jeonnam.kr','jl.cn','jp.net','jpn.com','js.cn','jur.pro','jx.cn','kg.kr','kiwi.nz','kr.com','law.pro','ln.cn','me.uk','med.ec','med.pro','mex.com','mo.cn','ms.kr','ne.kr','net.af','net.ag','net.am','net.br','net.bz','net.cm','net.cn','net.co','net.ec','net.gg','net.gl','net.gr','net.gy','net.hn','net.ht','net.im','net.in','net.je','net.ki','net.lc','net.lv','net.mg','net.mu','net.my','net.nf','net.nz','net.ph','net.pk','net.pl','net.ps','net.ru','net.sb','net.sc','net.so','net.vc','net.ve','nm.cn','no.com','nom.ag','nom.co','nom.es','nom.ro','nx.cn','or.at','or.jp','or.kr','or.mu','org.af','org.ag','org.am','org.bz','org.cn','org.es','org.gg','org.gl','org.gr','org.hn','org.ht','org.il','org.im','org.in','org.je','org.ki','org.lc','org.lv','org.mg','org.ms','org.mu','org.my','org.nz','org.pk','org.pl','org.ps','org.ro','org.ru','org.sb','org.sc','org.so','org.uk','org.vc','org.ve','pe.kr','pro.ec','qc.com','qh.cn','radio.am','radio.fm','re.kr','recht.pro','ru.com','sa.com','sc.cn','sc.kr','sd.cn','se.com','senet','seoul.kr','sh.cn','sn.cn','sx.cn','tj.cn','tw.cn','uk.com','uk.net','ulsan.kr','us.com','us.org','uy.com','web.ve','xj.cn','xz.cn','yn.cn','za.com','zj.cn'); 
    $url_arr   = explode(".", $url);
    if (count($url_arr) <= 2) {
        $host = $url;
    } else {
        $last   = array_pop($url_arr);
        $last_1 = array_pop($url_arr);
        $last_2 = array_pop($url_arr);
        $host   = $last_1.'.'.$last;
        if (in_array($host, $dual_host)) {
            $host = $last_2.'.'.$last_1.'.'.$last;
        }
    }
    return $host;}
    
    	 function get_url($type=0) //当前页面完整URL，1为不获取get参数
    {
        $sys_protocal = isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://' : 'http://';
        $php_self = $_SERVER['PHP_SELF'] ? $_SERVER['PHP_SELF'] : $_SERVER['SCRIPT_NAME'];
        $path_info = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';
        $relate_url = isset($_SERVER['REQUEST_URI'])&&$type!=1? $_SERVER['REQUEST_URI'] : $php_self . (isset($_SERVER['QUERY_STRING'])&&$type!=1? '?' . $_SERVER['QUERY_STRING'] : $path_info);
        return $sys_protocal . (isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '') . $relate_url;
    }
    
      function ifurl($domain){
$domain = strtolower($domain);   
if(preg_match('/^([a-z0-9]+([a-z0-9-]*(?:[a-z0-9]+))?\.)?[a-z0-9]+([a-z0-9-]*(?:[a-z0-9]+))?(\.us|\.tv|\.top|\.org\.cn|\.org|\.net\.cn|\.cn|\.net|\.mobi|\.me|\.la|\.info|\.hk|\.gov\.cn|\.edu|\.com\.cn|\.com|\.co\.jp|\.co|\.cn|\.cc|\.biz)$/i', $domain)){ return '域名';} //是域名
if(preg_match("/http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&\+\%]*/is",$domain)&&!preg_match("/[\x7f-\xff]/", $domain)&&strpos($domain,'.')!==false){
return '网址';   } 
return '啥也不是'; }

function printdir($dir){ 
    $files = array();
    //opendir() 打开目录句柄
    if($handle = @opendir($dir)){
    //readdir()从目录句柄中（resource，之前由opendir()打开）读取条目,
    //如果没有则返回false
        while(($file = readdir($handle)) !== false){//读取条目
            if( $file != ".." && $file != "."){//排除根目录
                if(is_dir($dir . "/" . $file)) {//如果file 是目录，则递归
                    $files[$file] = printdir($dir . "/" . $file);
                } else {
                    //获取文件修改日期
                    $filetime = date('Y-m-d H:i:s', filemtime($dir ."/". $file));
                    //文件修改时间作为健名
                    $files[$filetime] = $file; 
                $i++; if($i==50){ return $files; break; } //最多显示多少行解析记录
                }
            }
        }
        @closedir($handle);
        return $files;
    }
}


function curl($url, $paras=[]){ 
$paras = array_change_key_case($paras, CASE_LOWER); //键名全部转小写
$dl=array("82.156.212.11"); 
shuffle($dl); if($paras['daili']){ $url='http://'.$dl[0] .'/?url='.urlencode($url); 
$paras['post']=$paras; $paras['post']=array_merge($paras['post'],['daili_status'=>1]); unset($paras['post']['daili'],$paras['header']); }
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    if ($paras['header']) { //伪造Header
        $Header = $paras['header'];
    } else {
        $Header[] = "Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9";
        $Header[] = "Accept-Encoding:gzip, deflate, br";
        $Header[] = "Accept-Language:zh-CN,zh;q=0.9";
        $Header[] = "Connection:max-age=0";
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, $Header);
    if ($paras['ctime']) { // 连接超时
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $paras['ctime']);
    } else { curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10); }
    if ($paras['rtime']) { // 读取超时
        curl_setopt($ch, CURLOPT_TIMEOUT, $paras['rtime']);
    }
    if ($paras['ip']) { //伪造IP
    $num=count(explode('.',$paras['ip']));   //获取数组长度
    if($num!=4&&$num!=6||!filter_var($paras['ip'], FILTER_VALIDATE_IP)){
curl_setopt($ch, CURLOPT_HTTPHEADER, array("X-FORWARDED-FOR:220.181.".rand(1,230).".".rand(1,230), "CLIENT-IP:220.181.".rand(1,230).".".rand(1,230)));
    }else{  curl_setopt($ch, CURLOPT_HTTPHEADER, array("X-FORWARDED-FOR:".$paras['ip'], "CLIENT_IP:".$paras['ip']
    ,"CF-CONNECTING-IP:".$paras['ip'],"X-REAL-IP:".$paras['ip'] )); }
    }
    
 if(!$paras['loadurl']){ curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); }//默认跟随跳转抓取
    
    if ($paras['post']) { //POST提交
if(is_array($paras['post'])){ $paras['post']=http_build_query($paras['post']); } 
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $paras['post']);
    }
    if ($paras['get_header']) { //查看返回Header信息
        curl_setopt($ch, CURLOPT_HEADER, true);
    }
if($paras['cookie']) { //携带Cookie，必须用;分隔
if(is_array($paras['cookie'])){  foreach($paras['cookie'] as $key=>$value){ 
if(preg_match("/^[1-9][0-9]*$/",$key)&&strlen($key)<=2){ $cookie.=$value.'; '; 
}else{ $cookie.=$key.'='.$value.'; '; }  } //有些需要urlencode编码格式
}else{ $cookie=$paras['cookie']; }
        curl_setopt($ch, CURLOPT_COOKIE, $cookie);
    }
    if ($paras['refer']) { //伪造来访网址
        if ($paras['refer'] == 1) {
            curl_setopt($ch, CURLOPT_REFERER, 'http://m.qzone.com/infocenter?g_f=');
        } else {
            curl_setopt($ch, CURLOPT_REFERER, $paras['refer']);
        }
    }
    if ($paras['ua']) {  //伪造UA
        curl_setopt($ch, CURLOPT_USERAGENT, $paras['ua']); 
    } else {
        curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Linux; U; Android 11; zh-cn; PEGT00 Build/RKQ1.200903.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 MQQBrowser/11.8 Mobile Safari/537.36"); //默认QQ手机浏览器UA值
    }
    if ($paras['nobody']&&!$paras['daili']) { //不返回网页源代码信息
        curl_setopt($ch, CURLOPT_NOBODY, 1);
    }
    curl_setopt($ch, CURLOPT_ENCODING, "gzip");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    
    if (($paras['getcookie']||$paras['get_cookie'])&&!$paras['daili']) {  //获取请求的全部信息
        curl_setopt($ch, CURLOPT_HEADER, 1);
        $result = curl_exec($ch);
        preg_match_all("/Set-Cookie: (.*?);/m", $result, $matches);
        $headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
        $header = substr($result, 0, $headerSize);
        $body = substr($result, $headerSize);
        $ret = [
"Cookie"=>$matches,"cookie"=>$matches, "body" => $body, "header" => $header, 'code' => curl_getinfo($ch, CURLINFO_HTTP_CODE), //code是响应状态码
        ]; curl_close($ch);
        if($paras['daili_status']){ return json_encode($ret);  }
        return $ret; }
        
    $ret = curl_exec($ch);
    if ($paras['loadurl']&&!$paras['daili']) { 
    $Headers = curl_getinfo($ch);
    if ($Headers['redirect_url']) { $ret=$Headers['redirect_url'];
    } else { $ret = false; }  }
    curl_close($ch); 
if(($paras['getcookie']||$paras['get_cookie'])&&$paras['daili']){ $ret=json_decode($ret,true);
 $ret=array_merge($ret,['dl_ip'=>$dl[0]]);   return $ret;  } 
    return $ret; }
function json($code,$name,$msg=false) {
	if(is_array($name)) {
		//是数组
		$foundation=array(
		'code'=>$code,
		);
		$array=array_merge($foundation,$name);
	} else {
		//不是数组
		header('Content-type: application/json');
		$array=array(
		'code'=>$code,
		$name=>$msg,
		);
	}
header('Content-type: application/json');	
	return json_encode($array,JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); }
    
    function mobile() {
	$useragent = strtolower($_SERVER['HTTP_USER_AGENT']);
	$ualist = array('android', 'midp', 'nokia', 'mobile', 'iphone', 'ipod', 'blackberry', 'windows phone');
	if((deep_in_array($useragent, $ualist) || strexists($_SERVER['HTTP_ACCEPT'], "VND.WAP") || strexists($_SERVER['HTTP_VIA'],"wap")))
if(strpos($useragent,'iphone')!==false||strpos($useragent,'ipod')!==false) return '苹果'; else return '安卓';
	else
  return '电脑'; }
  
  
function strexists($string, $find) { return !(strpos($string, $find) === false); }
  function deep_in_array($value, $array) {   //判断数组包含存在某个值，某值 数组
        foreach($array as $item) {   
            if(!is_array($item)) {   
                if (strpos($value, $item) !== false) {  
                    return true;  
                } else {  continue; } }   
                
            if(in_array($value, $item)) {  
                return true;      
            } else if(deep_in_array($value, $item)) {  
                return true;      
            }  
        }   return false;   }			
		
		function dstrpos($string, $arr) { if(empty($string)) return false; foreach((array)$arr as $v) {
		if(strpos($string, $v) !== false) { return true;}}return false; }

    
    function filter_array($arr, $values = ['', null, false, 0, '0',[]]) { //删除数组中空白的元素
    foreach ($arr as $k => $v) {
        if (is_array($v) && count($v)>0) {
            $arr[$k] = filter_array($v, $values);
        }
        foreach ($values as $value) {
            if ($v === $value) {
                unset($arr[$k]);
                break;  }  } }
    return $arr;  }
    
    function tdk($name,$id){ 
if($id==0){
$title=$name.'去水印 - '.$name.'水印去除,'.$name.'视频在线免费去水印,'.$name.'去水印解析下载平台'; 
$description=$name.'等多个短视频平台在线免费去水印解析下载，永久免费、速度快、去视频水印、去封面水印，'.get_host().'-致力提供全网最优质的'.$name.'去水印解析服务!'; 
}elseif($id==1){
$title=$name.'去水印解析 - '.$name.'短视频去水印平台,'.$name.'视频免费去水印平台,'.$name.'免费去水印解析工具网站'; 
$description=$name.'('.get_host().')祛水印平台-可去水印抖音、快手、火山、皮皮虾等大众短视频平台，免费、速度快、无水印。';
}elseif($id==2){
$title=$name.'免费去水印解析 - '.$name.'短视频免费去水印解析,'.$name.'去水印下载,'.$name.'自助免费祛水印平台'; 
$description=$name.'等100多个平台的水印获取无水印视频链接,并且同时支持电脑和手机端在线下载。最好用的短视频在线去水印网站就在'.get_host();
}elseif($id==3){
$title=$name."在线去水印 - "."{$name}视频去水印解析,{$name}图片去水印解析下载,{$name}/快手抖音祛水印平台"; 
$description=$name."在线去水印(".get_host().")，全网最好用的短视频去水印解析服务平台，永久免费提供，感谢大家的支持与信任。";
}elseif($id==4){
$title=$name."去水印 - {$name}视频无水印下载,{$name}保存无水印视频到手机,{$name}视频去水印下载"; 
$description=$name."短视频在线去水印下载工具支持去水印任何{$name}短视频,并且下载的视频没有水印.手机、平板、电脑上都可以用的辅助下载工具,轻松一键保存无水印抖音短视频到手机相册或电脑本地(".get_host().")";
}
$keywords=str_replace([" - ","-","|","_","，"],',',$title);
return array('title'=>$title,'keywords'=>$keywords,'description'=>$description);
}
    
    function httpStatus($num){//网页状态码
        static $http = array (
            100 => "HTTP/1.1 100 Continue",
            101 => "HTTP/1.1 101 Switching Protocols",
            200 => "HTTP/1.1 200 OK",
            201 => "HTTP/1.1 201 Created",
            202 => "HTTP/1.1 202 Accepted",
            203 => "HTTP/1.1 203 Non-Authoritative Information",
            204 => "HTTP/1.1 204 No Content",
            205 => "HTTP/1.1 205 Reset Content",
            206 => "HTTP/1.1 206 Partial Content",
            300 => "HTTP/1.1 300 Multiple Choices",
            301 => "HTTP/1.1 301 Moved Permanently",
            302 => "HTTP/1.1 302 Found",
            303 => "HTTP/1.1 303 See Other",
            304 => "HTTP/1.1 304 Not Modified",
            305 => "HTTP/1.1 305 Use Proxy",
            307 => "HTTP/1.1 307 Temporary Redirect",
            400 => "HTTP/1.1 400 Bad Request",
            401 => "HTTP/1.1 401 Unauthorized",
            402 => "HTTP/1.1 402 Payment Required",
            403 => "HTTP/1.1 403 Forbidden",
            404 => "HTTP/1.1 404 Not Found",
            405 => "HTTP/1.1 405 Method Not Allowed",
            406 => "HTTP/1.1 406 Not Acceptable",
            407 => "HTTP/1.1 407 Proxy Authentication Required",
            408 => "HTTP/1.1 408 Request Time-out",
            409 => "HTTP/1.1 409 Conflict",
            410 => "HTTP/1.1 410 Gone",
            411 => "HTTP/1.1 411 Length Required",
            412 => "HTTP/1.1 412 Precondition Failed",
            413 => "HTTP/1.1 413 Request Entity Too Large",
            414 => "HTTP/1.1 414 Request-URI Too Large",
            415 => "HTTP/1.1 415 Unsupported Media Type",
            416 => "HTTP/1.1 416 Requested range not satisfiable",
            417 => "HTTP/1.1 417 Expectation Failed",
            500 => "HTTP/1.1 500 Internal Server Error",
            501 => "HTTP/1.1 501 Not Implemented",
            502 => "HTTP/1.1 502 Bad Gateway",
            503 => "HTTP/1.1 503 Service Unavailable",
            504 => "HTTP/1.1 504 Gateway Time-out"
        );
        header($http[$num]); }
        
function real_ip($type=0){
$ip = $_SERVER['REMOTE_ADDR'];
if($type<=0 && isset($_SERVER['HTTP_X_FORWARDED_FOR']) && preg_match_all('#\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}#s', $_SERVER['HTTP_X_FORWARDED_FOR'], $matches)) {
	foreach ($matches[0] AS $xip) {
		if (filter_var($xip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
			$ip = $xip;
			break;
		}
	}
} elseif ($type<=0 && isset($_SERVER['HTTP_CLIENT_IP']) && filter_var($_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
	$ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif ($type<=1 && isset($_SERVER['HTTP_CF_CONNECTING_IP']) && filter_var($_SERVER['HTTP_CF_CONNECTING_IP'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
	$ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
} elseif ($type<=1 && isset($_SERVER['HTTP_X_REAL_IP']) && filter_var($_SERVER['HTTP_X_REAL_IP'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
	$ip = $_SERVER['HTTP_X_REAL_IP'];
}
return $ip; }


function swal($type=1, $title='提示信息', $text='修改成功', $btn='知道了' ,$url='' ,$miao='30'){ //btn,url多个用|分隔，url为空则返回上页
httpStatus(403);
$type=($type==1?'success':null).($type==2?'error':null).($type==3?'warning':null).($type==4?'info':null);
$btn=filter_array(explode('|',$btn));$i=0;

foreach($btn as $row){ $btns.="button{$i}:{ text:'{$row}',  value:'btn{$i}',  color:'#3085d6'},
"; $i++;}

if($url==null){$url=$_SERVER['HTTP_REFERER'];} 
$url=explode('|',$url); $i2=0;
foreach($url as $row){
if($row==null){ $row=$_SERVER['HTTP_REFERER']; }
$urls.="if(value=='btn{$i2}'){ return window.location.href='$row'; }
";  $i2++;}
$urls.="else{ return window.location.href='".end($url)."';  }";  //end 最后数组一个元素

exit('
<html lang="zh">
<head>
<title>'.$text.'</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
<script src="/assets/sweetalert/main.js"></script>
<body>
<script>
swal({
icon : "'.$type.'",
title : "'.$title.'",
text : "'.$text.'",
timer:'.round($miao*1000).',
focusCancel:false,
buttons:{
'.$btns.'
},
}).then(function(value) {   //这里的value就是按钮的value值，只要对应就可以啦
'.$urls.'
});
</script> 
</body>
</html>');  }