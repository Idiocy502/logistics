<?php

header("Content-Type: text/html; charset=utf-8");//该改编码方式

if(isset($_POST['EmailCount']) && isset($_POST['UserPwd']))//如果接收到数据
{
	$Email = $_POST['EmailCount'];//获取账户名信息
	$Pwd = $_POST['UserPwd'];//获取密码信息

	if ( $Email !='' && $Pwd !='') 
	{
		$connect = mysql_connect("localhost","root","");//创建服务器与数据库的连接

		if (!$connect) //如果连接失败！
		{
		    die('未能连接到数据库'.mysql_error());//输出连接错误信息
		}


		mysql_select_db("logisticsdata",$connect);//连接到数据库中的具体表


		$Select = "SELECT * FROM userinfo WHERE EmailAddress = '$Email'  and UserPwd = '$Pwd'";//设置数据库查询语句


		$Result = mysql_query($Select);//查询数据库
		$row = mysql_fetch_array($Result);//获取查询结果的第一行

		if($row)//如果有数据
		{
			//echo "用户登录成功!";
			$ResponseData=array("code"=>"200",
				              "message"=>"登陆成功"); //将信息拼接为json格式的数据

			echo json_encode($ResponseData);//返回该数据

			$uid = $row['UID'];
		    $_SESSION['uid'] = $uid;//记录当前用户的ID编号，用于设置该用户的登陆状态

			return;
		}
		else//如果没有找到数据
		{
			$ResponseData=array("code"=>"300",
				              "message"=>"用户名或密码错误");

			echo json_encode($ResponseData);
		}
	}
	else
	{
		$ResponseData=array("code"=>"400",
			              "message"=>"请输入用户名");

		echo json_encode($ResponseData);
	}
}
else
{
	$ResponseData=array("code"=>"500",
			              "message"=>"服务器错误");

		echo json_encode($ResponseData);
}

?>