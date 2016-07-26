<?php
	/**** Class Database ****/
	Class MyDatabase
	{
		/**** function connect to database ****/
		function MyDatabase()
		{
$strHost = "localhost";
$strUser = "root";
$strPassword = "000000";
$strDB="screenme";
				$this->objConnect = mysql_connect($strHost,$strUser,$strPassword);
				$this->DB = mysql_select_db($strDB);
				mysql_query('SET NAMES UTF8');
		}

		/**** function insert record ****/
		function fncInsertRecord($strinsert)
		{
				$strSQL = "$strinsert";
				$objQuery = @mysql_query($strSQL);
				return $objQuery;
		}

		/**** function select record ****/
		function fncSelectRecord($strCondition)
		{
				$strSQL = "$strCondition";
				$objQuery = @mysql_query($strSQL);
				if(!$objQuery){
					$num_rows =0;
				}else{
					$num_rows = mysql_num_rows($objQuery);
				}

				$rowResult = array();
				if ($num_rows>0) {
					while($row =mysql_fetch_array($objQuery)){
					$rowResult[] = $row;
				}

}
			return   $rowResult;
				//return $strSQL;
		}

		/**** function update record (argument) ****/
		function fncUpdateRecord($strCondition)
		{
				$strSQL ="$strCondition";
				return @mysql_query($strSQL);
		}

		/**** function delete record ****/
		function fncDeleteRecord()
		{
				$strSQL = "DELETE FROM $this->strTable WHERE $this->strCondition ";
				return @mysql_query($strSQL);
		}

		/*** end class auto disconnect ***/
		function __destruct() {
				return @mysql_close($this->objConnect);
	    }
	}

?>
