<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
		<title>客户管理</title>
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
						<h3 class="pSetTitle">客户管理</h3>
						<ul id="p4Set" class="p4Set">
							<!--<li class="p4SetLi">
								<a href="#" id="queryTeaNum">茶商</a>
								<ol>-->
									<?php
										error_reporting(0);
										header("Content-type: text/html; charset=UTF-8");
										$con = mysql_connect("localhost", "root", "");
										mysql_query("set names 'utf8'", $con);
										if (!$con) {
											die('Could not connect');
										} else {
											mysql_select_db("tea", $con);
											echo "<li class='p4SetLi'><a href='#' id='queryTeaNum'>茶商</a><ol>";
											echo "<li><a href='javascript:;'>茶园拥有数量：";		
											$sql = "SELECT * FROM teagarden";
											$query=mysql_query($sql);											
											$row=mysql_num_rows($query);																			
											echo "<label id='quantityOfTeaGarden'>";												
											echo $row;
											echo "</label></a></li><li><a href='javascript:;'>茶叶种类数量：<label id='quantityOfTea'>"; 								
									        $sql1 = "SELECT * FROM tea";
											$query1=mysql_query($sql1);											
											$row1=mysql_num_rows($query1);																														
											echo $row1;
											echo "</label></a></li></ol></li><li class='p4SetLi'><a href='#' id='queryPersonNum'>用户</a><ol><li><a href='javascript:;'>茶商注册数量：<label id='userRegistrationNumber'>"; 															
											$sql2 = "SELECT * FROM user where userValue='商家'";
											$query2=mysql_query($sql2);											
											$row2=mysql_num_rows($query2);																																									
											echo $row2;
											echo "</label></a></li><li><a href='javascript:;'>用户拥有数量：<label id='membershipNumber'>";	  								
											$sql3 = "SELECT * FROM user";
											$query3=mysql_query($sql3);											
											$row3=mysql_num_rows($query3);												
											echo $row3;
											echo "</label></a></li></ol></li>";       
										}
								    ?>
									<!--</label></a>
									</li>
								</ol>
							</li>
							<li class="p4SetLi">
								<a href="#" id="queryPersonNum">用户</a>
								<ol>
									<li>
										<a href="javascript:;">用户注册数量：<label id="userRegistrationNumber">1</label></a>
									</li>
									<li>-->
										<!--<a href="javascript:;">会员拥有数量：<label id="membershipNumber">1</label></a>
									</li>
								</ol>
							</li>-->
							<div class="returnHistory_" id="returnHistory_">退出登录</div>
						</ul>
					</div>
					<!--<div class="foot">
						<div id="scrollTop">
							<a href="javascript:;">
								<img src="../img/top.png">
							</a>
						</div>
					</div>-->
				</div>
			</div>
		</div>
		</div>
	</body>
	<script type="text/javascript" src="../js/zepto.min.js"></script>
	<script type="text/javascript" src="../js/jquery-2.1.1.min.js" ></script>
	<script type="text/javascript" src="../js/administratorsOthers.js"></script>

</html>