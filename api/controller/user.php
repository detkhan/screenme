<?php
require_once("../model/database.php");

class user
{



//var_dump($pack_data);
public function registration($username,$password)
{
  $join_date=date("Y-m-d H:i:s");
  $clsMyDB = new MyDatabase();
  $strCondition2 = "SELECT  *  FROM  user WHERE  `username` ='$username'";
  $objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);

  if(!$objSelect2)
  {
    $strinsert ="INSERT INTO  user(username,password,join_date) VALUES ('$username','$password','$join_date')";
    $objInsert2 = $clsMyDB->fncInsertRecord($strinsert);
    $objInsert="add";
  }
  else{
  $objInsert="no";

  }
  return $objInsert;
}//function Registration


public function login($username,$password)
{
  $clsMyDB = new MyDatabase();
  $strCondition2 = "SELECT  *  FROM  user WHERE  `username` ='$username' and `password` ='$password'";
  $objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
  if(!$objSelect2)
  {
    $objInsert="no";
  }
  else{
  $objInsert="yes";

  }
  return $objInsert;
}//function login
}//class
 ?>
