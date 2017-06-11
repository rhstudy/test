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
		$teaGardenName=$_GET['teaGardenName'];
		$teaGardenProduct=$_GET['teaGardenProduct'];
		$teaGardenEquipment=$_GET['teaGardenEquipment'];
		$teaGardenTelphone=$_GET['teaGardenTelphone'];
		// echo $teaGardenProduct;
		// echo $username." ".$password." ".$identification;
		$sql="INSERT INTO teagarden VALUES ('$teaGardenName','$teaGardenProduct','$teaGardenEquipment','$teaGardenTelphone')";
		if(mysql_query($sql,$con)){
			echo "success";
		}
		else{
			echo "failed";
		}
		}
    
?>