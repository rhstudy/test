<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
		<title>茶叶管理</title>
		<link rel="stylesheet" type="text/css" href="../css/basics.css" />
		<link rel="stylesheet" type="text/css" href="../css/businessOthers.css" />
		<script type="text/javascript" src="../js/zepto.min.js"></script>
		<script type="text/javascript" src="../js/jquery-2.1.1.min.js"></script>
		<script type="text/javascript" src="../js/businessBasics.js"></script>
		<script type="text/javascript" src="../js/teaGardenRecord.js"></script>
		<script type="text/javascript" src="../js/businessShow_.js"></script>

	</head>

	<body>
		<div class="container" id="container">
			<header class="head" id="head" title="head">
				<div class="return" id="return">
					<a href="index1.html">
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
						<h3 class="pSetTitle">茶叶管理</h3>
					</div>

					<div class="item">
						<div class="item-date">
							<p class="date"> 六</p>
							<p class="month"> 六</p>
						</div>
						<div class="item-content">
							<div class="grayDialog">
								<p>祁红茶园<br /><br />产自安徽祁门<br /><br />纯手工制造</p>
							</div>
						</div>
					</div>
					
					<?php
						error_reporting(0);
						header("Content-type: text/html; charset=UTF-8");
						$con = mysql_connect("localhost", "root", "");
						mysql_query("set names 'utf8'", $con);
						if (!$con) {
							die('Could not connect');
						} else {
							mysql_select_db("tea", $con);
							$sql = "SELECT * FROM tea";
							$query = mysql_query($sql, $con);
							while ($row = mysql_fetch_array($query)) {
								echo "<div class='item'>";
								echo "<div class='item-date'>";
								echo "<p class='date'>";
								echo "<script>
										var dayOffset = 0;
										function getNewDate(dayOffset) {
											var today = new Date();
											var newDate = new Date(today.getTime() + (dayOffset * 24 * 60 * 60 * 1000));
											return newDate;
										}
										function getDate(dayOffset) {
											var date = getNewDate(dayOffset);
											var dateNum = date.getDate();
												if(dateNum < 10) {
													return '0' + dateNum;
												}
												return dateNum;
							            }
									    document.write(getDate(dayOffset));
									  </script>";
								echo "</p>";
								echo "<p class='month'>";
								echo "<script>
										function getMonth(dayOffset) {
									        var monthEn = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
									        var date = getNewDate(dayOffset);
									        var monthNum = date.getMonth();
									        return monthEn[monthNum];
								        }
										document.write(getMonth(dayOffset));
									  </script>";
								echo "</p>";
								echo "</div>";
								echo "<div class='item-content'>";
								echo "<span>茶园名称：</span>";
								echo "&nbsp;";
								echo "<span id='teaGardenName'>";
								echo $row[teaName];
								echo "</span>";
								echo "<br/>";
								echo "<span>茶园产地：</span>";
								echo "&nbsp;";
//								echo "<span id='teaPlantation'>";
//								echo $row[teaProduct];
//								echo "</span>";						
								echo "<br/>";
								echo "<span>茶园设备：</span>";
								echo "&nbsp;";
//								echo "<span id='teaPlant'>";
//								echo $row[teaIntroduce];
//								echo "</span>";
								echo "<div class='grayDialog'>";
								echo "<p>";
								echo $row[teaName];
								echo "<br /><br />";
								echo $row[teaProduct];
								echo "<br /><br />";
								echo $row[teaIntroduce];
								echo "</p>";						
								echo "</div>";
								echo "</div>";
								echo "</div>";
							}						
						}
					?>
					<div class="foot">
						<div id="scrollTop">
							<a href="javascript:;">
								<img src="../img/top.png">
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>

</html>