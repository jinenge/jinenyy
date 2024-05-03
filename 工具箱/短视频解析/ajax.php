<?  //千山万水总是情，留个版权行不行，@远昔博客 yuanxiblog.cn
include_once("./includes/config.php");
$url=$_REQUEST['url'];

if($url==null){ exit(json(202,'msg','解析失败，url不能为空'));  
}else{
if(strpos($url,'https://') !==false){
$arr1=explode('https://',$url)[1]; $arr2=explode(' ',$arr1)[0];
$url='https://'.explode('，',$arr2)[0];  
}else{
$arr1=explode('http://',$url)[1]; $arr2=explode(' ',$arr1)[0];
$url='http://'.explode('，',$arr2)[0];  } 
if(!preg_match("/http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&\+\%]*/is",$url) || preg_match("/[\x7f-\xff]/", $url)){ 
 exit(json(202,'msg','请检查音频或者视频链接是否正确！<br>且链接不能带有任何汉字和空格等！')); } 
}

$file=file_name($url); if($file==null){ exit(json(202,'msg','请检查链接是否输入正确！')); }
if(file_exists($file)){ $data_file=@json_decode(file_get_contents($file),true); }
if($data_file!=null&&$data_file['date']>=date("Y-m-d H:i:s", strtotime("-1 min"))){
exit(json(200,'url','./user.php?url='.$data_file['url'])); }

if(!filter_var($ip, FILTER_VALIDATE_IP)){ exit(json(202,'msg','IP验证失败，请稍后重试下'));  }

$data=curl('https://yuanxiapi.cn/api/jiexi_video/?url='.$url,['GetCookie'=>1]);
if($data['code']!=200){ exit(json(202,'msg','解析失败，请稍后重试下')); }
$data2=json_decode($data['body'],true);
if($data2['code']!=200){ exit(json(202,'msg',$data2['msg']));  }
$arr=@filter_array([
'name'=>$data2['name'],
'url'=>($data2['url']),
'desc'=>($data2['desc']),
'video'=>($data2['video']),
'cover'=>($data2['cover']),
'type'=>$data2['type'],
'images'=>$data2['images'],
'date'=>date("Y-m-d H:i:s")
    ]);
if(!$arr['video']&&!$arr['cover']){ exit(json(202,'msg','解析不完整或失败了，请您稍后重试下'));  }

@file_put_contents($file,json(200,$arr,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));  
exit(json(200,'url','./user.php?url='.$arr['url']));
