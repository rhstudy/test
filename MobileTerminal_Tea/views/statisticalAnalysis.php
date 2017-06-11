<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
		<title>统计分析</title>
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
						<h3 class="pSetTitle">统计分析</h3>
						<div class="p3Set" id="p3Set">
							<table>
								<tr>
									<th>茶商数量</th>
									<th>茶叶种类</th>
									<th>用户数量</th>
									<th>会员数量</th>
								</tr>
								<tr>
									
								    <!--<td>-->
								    <?php
										error_reporting(0);
										header("Content-type: text/html; charset=UTF-8");
										$con = mysql_connect("localhost", "root", "");
										mysql_query("set names 'utf8'", $con);
										if (!$con) {
											die('Could not connect');
										} else {
											mysql_select_db("tea", $con);
											$sql = "SELECT * FROM user where userValue='商家'";
											$query=mysql_query($sql);											
											$row=mysql_num_rows($query);																			
											echo "<td id='countBusiness'>";												
											echo $row;
											echo "</td>"; 
											
											$sql1 = "SELECT * FROM tea";
											$query1=mysql_query($sql1);											
											$row1=mysql_num_rows($query1);																			
											echo "<td id='countTea'>";												
											echo $row1;
											echo "</td>"; 
															
											$sql2 = "SELECT * FROM user";
											$query2=mysql_query($sql2);											
											$row2=mysql_num_rows($query2);																			
											echo "<td id='countUser'>";												
											echo $row2;
											echo "</td>";   
											
											$sql3 = "SELECT * FROM user where member=1";
											$query3=mysql_query($sql3);											
											$row3=mysql_num_rows($query3);																			
											echo "<td id='countMember'>";												
											echo $row3;
											echo "</td>";       
										}
								    ?>
								</tr>
							</table>
						</div>
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