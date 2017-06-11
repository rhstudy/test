<?php
    error_reporting(0);
	header("Content-type: text/html; charset=UTF-8");
    $con = mysql_connect("localhost", "root", "");//连接数据库
    mysql_query("set names 'utf8'",$con);//设置数据库中的字段编码格式
    if (!$con) {
	    die('Could not connect');
    }
	else{
		mysql_select_db("tea",$con);//查询tea表
		/* 获取插入的数据值 */
		$username=$_GET['signupUsername'];
		$email=$_GET['signupEmail'];
		$password=$_GET['signupPwd'];
		$identification=$_GET['moduleIdentification'];
		/* sql语句 */
		$sql="INSERT INTO user VALUES ('$username','$password','$email','$identification',0)";
		if(mysql_query($sql,$con)){
//			echo "success";
		}
		else{
			echo "failed";
		}
	}   
?>