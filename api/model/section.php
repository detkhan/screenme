<?php
require_once("model/database.php");
class sections
{

public function getsection($param)
{
  $student_id=$param['student_id'];
  $clsMyDB = new MyDatabase();
  $strCondition2 = "
  SELECT *   FROM `register_sec` WHERE student_id = '$student_id'";
     $objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
     if(!$objSelect2)
     {
       $response[] =
       [
         'sec_id' => '0',
         'status' => "false",
       ];
     }
     else{
       foreach ($objSelect2 as $value) {
         $response[] =
         [
           'sec_id' => $value['sec_id'],
           'status' => "success",
         ];
       }
     }
       return $response;


}

}
?>
