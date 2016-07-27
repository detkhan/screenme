<?php
include("../controller/user.php");
$pack_data=$_GET[pack_data];

//var_dump($pack_data);

$username=$pack_data[username];
$password=md5($pack_data[password]);
$obj_getdata=new user();
$getdata_login=$obj_getdata->login($username,$password);
$json_data[]=array(
"msg_check"=>"$getdata_login",
 );
$callback = $_GET['jsoncallback'];
$data= json_encode($json_data);
echo $callback.'('.$data.');';
 ?>
