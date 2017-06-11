<?php
    error_reporting(0);
	header("Content-type: text/html; charset=UTF-8");
    $con = mysql_connect("localhost", "root", "");
    mysql_query("set names 'utf8'",$con);//设置数据库中的字段编码格式
    if (!$con) {
	    die('Could not connect');
    }
	else{
		mysql_select_db("tea",$con);
		$teaName=$_GET['teaName'];
		$teaOrigin=$_GET['teaOrigin'];
		$teaIntroduction=$_GET['teaIntroduction'];
		// echo $teaGardenProduct;
		// echo $username." ".$password." ".$identification;
		$sql="INSERT INTO tea VALUES ('$teaName','$teaOrigin','$teaIntroduction')";
		if(mysql_query($sql,$con)){
			echo "success";
		}
		else{
			echo "failed";
		}
		}
    
?>