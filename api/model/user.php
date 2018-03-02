<?php
require_once("model/database.php");
class users
{

public function login($param)
{
  $email=$param['email'];
  $password=$param['password'];
  $clsMyDB = new MyDatabase();
    $strCondition2 = "SELECT  *  FROM  user WHERE  `email` ='$email' and`password` = md5('$password')";
     $objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
     if(!$objSelect2)
     {
       $response[] =
       [
         'track' => '0',
         'status' => "false",
       ];
     }
     else{
       foreach ($objSelect2 as $value) {
         $track=md5($value['user_id'].$email);
         $response[] =
         [
           'track' => $track,
           'status' => "success",
         ];
       }
     }
       return $response;


}

//SELECT * FROM user WHERE MD5(CONCAT(user_id,email))='a90b679965f4a3eb35554e4a4775c3ed'

}
?>
