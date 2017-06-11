<?php
    error_reporting(0);
	header("Content-type: text/html; charset=UTF-8");
    $con = mysql_connect("localhost", "root", "");
    mysql_query("set names 'utf8'",$con);
    if (!$con) {
	    die('Could not connect');
    }
	else{
		mysql_select_db("tea",$con);
		$checkVal=$_GET['checkVal'];
		/* sql语句 */
		$sql="UPDATE user SET `member`=1 WHERE `userName`='$checkVal'";
		if(mysql_query($sql,$con)){
		}
		else{
			echo "failed";
		}
	}   
?>