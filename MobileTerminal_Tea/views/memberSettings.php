<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
		<title>会员设置</title>
		<link rel="stylesheet" type="text/css" href="../css/basics.css" />
		<link rel="stylesheet" type="text/css" href="../css/administratorsOthers.css" />
	</head>

	<body>
		<div class="container" id="container">
			<header class="head" id="head" title="head">
				<div class="return" id="return">
					<a href="index3.html">
						<img src="../img/home.png" />
					</a>
				</div>
				<div class="contact" id="contact">
					<a href="javascript:;">
						<img src="../img/contact.png" />
					</a>
				</div>
			</header>
			<div class="content" id="content">
				<div>
					<div class="p1Set" id="p1Set">
						<div class="iconTitle"></div>
						<h3 class="pSetTitle">会员设置</h3>
						<ul class="p4Set">
							<li class="p4SetLi">
								<a href="#" class="memberSettings" id="ordinaryUser">普通用户</a>
							</li>
							<li class="p4SetLi">
								<a href="#" class="memberSettings" id="member">会员</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="setMember" id="setMember">
				<div class="setMemberPage" id="setMemberPage">
					<table id="setMemberPageTable">
						<tr>
							<th>升级成会员</th>
							<th>用户名</th>
						</tr>
						
						<?php
						    error_reporting(0);
						    header("Content-type: text/html; charset=UTF-8");
						    $con = mysql_connect("localhost", "root", "");
						    mysql_query("set names 'utf8'", $con);
						    if (!$con) {
							    die('Could not connect');
						    } else {
							    mysql_select_db("tea", $con);
							    $sql = "SELECT * FROM user";
							    $query = mysql_query($sql, $con);
								while($row = mysql_fetch_array($query)){
									echo "<tr><td colspan='2'><input type='checkbox' class='setMemberName' name='setMemberName' value='";
									echo $row[userName];
									echo "'/><span>";
									echo $row[userName];
									echo "</span>";
									echo "</td></tr>";
								}
							}
						?>
						<tr>
							<td colspan="2"><button class="setToMember" id="setToMember">添加</button></td>
						</tr>
					</table>
				</div>
			</div>
			<div class="setMember" id="memberShow">
				<div class="setMemberPage" id="memberPageShow">
					<table id="setMemberPageTable1">
						<tr>
							<th>用户名</th>
						</tr>
						<?php
						    error_reporting(0);
						    header("Content-type: text/html; charset=UTF-8");
						    $con = mysql_connect("localhost", "root", "");
						    mysql_query("set names 'utf8'", $con);
						    if (!$con) {
							    die('Could not connect');
						    } else {
							    mysql_select_db("tea", $con);
							    $sql = "SELECT * FROM user";
							    $query = mysql_query($sql, $con);
								while($row = mysql_fetch_array($query)){
									if($row[member] == 1)
									{
										echo "<tr><td>";
									    echo $row[userName];
									    echo "</td></tr>";
									}
								}
							}
						?>
					</table>
				</div>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="../js/zepto.min.js"></script>
	<script type="text/javascript" src="../js/jquery-2.1.1.min.js" ></script>
	<script type="text/javascript" src="../js/administratorsOthers.js"></script>

</html>