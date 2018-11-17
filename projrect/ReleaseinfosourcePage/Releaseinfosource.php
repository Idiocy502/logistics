<?php

header("Content-Type: text/html; charset=utf-8");//该改编码方式

if(isset($_GET['SendLocation']) && isset($_GET['SendName']) && isset($_GET['SendPhone']) && isset($_GET['ArriveLocation']) && isset($_GET['ArriveName']) && isset($_GET['ArrivePhone']))//如果接收到数据
{
	$SendLocation = $_GET['SendLocation'];//获取信息
	$SendName = $_GET['SendName'];//获取信息
	$SendPhone = $_GET['SendPhone'];//获取信息

	$ArriveLocation = $_GET['ArriveLocation'];//获取信息
	$ArriveName = $_GET['ArriveName'];//获取信息
	$ArrivePhone = $_GET['ArrivePhone'];//获取信息


	if ( $SendLocation !='') 
	{
		$connect = mysql_connect("localhost","root","");//创建服务器与数据库的连接

		if (!$connect) //如果连接失败！
		{
		    die('未能连接到数据库'.mysql_error());//输出连接错误信息
		}

		mysql_select_db("logisticsdata",$connect);//连接到数据库

		$currentTime = date('Ymd',time());


		$Select = " SELECT count(*) from trackingnumberdata WHERE TrackingID like '".$currentTime."%' ";//设置数据库查询语句
		$Result = mysql_query($Select);//查询数据库
		$row = mysql_fetch_array($Result);//获取查询结果的第一行
		$count = $row[0];

		$DanHao = $currentTime*100000 + $count +1;//拼接单号信息

		$Select1 = " INSERT INTO trackingnumberdata(TrackingID,FUserName,FPhone,FAddress,SUserName,SPhone,SAddress,CurrentState,CurrentPosition) values('$DanHao','$SendName','$SendPhone','$SendLocation','$ArriveName','$ArrivePhone','$ArriveLocation','Waiting','$SendLocation') ";

		mysql_query($Select1);//执行SQL 语句

		echo "success";

	}
}

?>