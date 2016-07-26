<?php
include("class/adduser.php");
$pack_data=$_GET[pack_data];

//var_dump($pack_data);

$username=$pack_data[username];
$password=md5($pack_data[password]);
$obj_getdata=new adduser();
$getdata_registration=$obj_getdata->registration($username,$password);
$json_data[]=array(
"msg_check"=>"$getdata_registration",
 );
$callback = $_GET['jsoncallback'];
$data= json_encode($json_data);
echo $callback.'('.$data.');';
 ?>
