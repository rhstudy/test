<?php
    error_reporting(0);
    header("Content-type: text/html; charset=UTF-8");
    $con = mysql_connect("localhost", "root", "");
    mysql_query("set names 'utf8'", $con);
    if (!$con) {
	    die('Could not connect');
    } else {
	    mysql_select_db("tea", $con);
		/* 获取查询的值 */
        $loginName = $_GET['login-username'];
	    $loginPassword = $_GET['login-password'];	
		/* 如果输入数据名和密码均是admin的话，跳转index3界面 */
		if ($loginName == "admin" && $loginPassword == "admin") {
		    echo "<script>
			        window.location.href = '../views/index3.html';
			      </script>";
	    }
		/* sql查询语句 */
	    $sql = "SELECT * FROM `user` WHERE userName='$loginName' and userPassword='$loginPassword '";
	    $query = mysql_query($sql, $con);
	    $row = mysql_fetch_array($query);
		/* 通过比对数据身份value值跳转商家或用户界面 */
	    if ($row['userValue'] == "商家") {
		    echo "<script>
			        window.location.href = '../views/index1.html';
			      </script>";
	    } 
	    else if ($row['userValue'] == "用户") {
		    echo "<script>
			        window.location.href = '../views/index2.html';
			      </script>";
	    }
		else if($loginName != $row['userName'] && $loginPassword != $row['userPassword']){
			echo "<script>
			        alert('没有此用户！');
			        window.location.href = '../index.html';
			      </script>";
		}
		else{
			echo "<script>
			        window.location.href = '../index.html';
			      </script>";
		}
    }
?>