<?php

header("Content-Type: text/html; charset=utf-8");//该改编码方式

if(isset($_GET['DanHao']))//如果接收到数据
{
	$TrackingNumber = $_GET['DanHao'];//获取单号信息

	if ( $TrackingNumber !='') 
	{
		$connect = mysql_connect("localhost","root","");//创建服务器与数据库的连接

		if (!$connect) //如果连接失败！
		{
		    die('未能连接到数据库'.mysql_error());//输出连接错误信息
		}


		mysql_select_db("logisticsdata",$connect);//连接到数据库


		$Select = " SELECT * FROM trackingnumberdata WHERE TrackingID ='$TrackingNumber' ";//设置数据库查询语句

		$Result = mysql_query($Select);//查询数据库
		$row = mysql_fetch_array($Result);//获取查询结果的第一行
		$data=array();
		array_push($data, $row);


		if($row)//如果有数据
		{
			$ResponseData=array("code"=>"200",
				              "message"=>"查询成功",
				              "data"=>$data); //将信息拼接为json格式的数据

			echo json_encode($ResponseData);//返回该数据
		}
		else//如果没有找到数据
		{
			$ResponseData=array("code"=>"300",
				              "message"=>"未查询到相关数据");

			echo json_encode($ResponseData);
		}
	}
	else
	{
		$ResponseData=array("code"=>"400",
			              "message"=>"请输入运单号");

		echo json_encode($ResponseData);
	}
}
else
{
	$ResponseData=array("code"=>"500",
			              "message"=>"对不起，服务器异常，请稍后重试");

		echo json_encode($ResponseData);
}

?>