<?php
/**
 *
 */
require_once("model/user.php");
class user
{
public function index($param)
{
  echo "function test";
  echo "<br>";
  echo $param;
}


public function login($param)
{
$model=new Users();
$response=$model->login($param);
$data= json_encode($response);
echo $data;
}

}


 ?>
