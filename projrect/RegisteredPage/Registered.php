<?php

header("Content-Type: text/html; charset=utf-8");//该改编码方式


if(isset($_POST['UserEmail']))//如果接收到数据
{
	$Email = $_POST['UserEmail'];//获取账户名信息
	$Pwd = $_POST['UserPwd'];//获取密码信息
	$Name = $_POST['UserName'];//获取用户姓名
	$ID = $_POST['UserID'];//获取用户身份证号
	$Phone = $_POST['UserPhone'];//获取用户手机号
	//$Sex = $_POST['UserEmail'];//
	//$Birthday = $_POST['UserEmail'];//
	//$Addesss = $_POST['UserEmail'];//

	if($Email !='')//如果账户名不为空
	{
		$connect = mysql_connect("localhost","root","");//创建服务器与数据库的连接

		if (!$connect) //如果连接失败！
		{
		    die('未能连接到数据库'.mysql_error());//输出连接错误信息
		}

		mysql_select_db("logisticsdata",$connect);//连接到数据库中的具体表
		
		


		$Select = "SELECT UID FROM userinfo WHERE EmailAddress = '$Email'";//设置数据库查询语句


		$Result = mysql_query($Select);//查询数据库
		$row = mysql_fetch_array($Result);//获取查询结果的第一行

		if($row)//如果有数据
		{
			$ResponseData=array("code"=>"300",
					              "message"=>"该账户已经被注册"); //将信息拼接为json格式的数据

			echo json_encode($ResponseData);//返回该数据
		    return;
		}
		else//如果没有找到数据
		{
			$Insert = "insert into  userinfo(EmailAddress,UserName,UserID,UserPwd,UserSex,UserBirthday,UserAddeess,UserPhone,UserZhuShi)  VALUES('$Email','$Name','$ID','$Pwd','1','1994-2-1','SiChuan DaiZhou','$Phone','')";//设置数据库查询语句
			mysql_query($Insert);//将信息写入到数据库

	        $ResponseData=array("code"=>"200",
					              "message"=>"注册成功"); //将信息拼接为json格式的数据

			echo json_encode($ResponseData);//返回该数据
		}
	}
	else
	{
		$ResponseData=array("code"=>"400","message"=>"账户名不能为空"); //将信息拼接为json格式的数据
					              
		echo json_encode($ResponseData);//返回该数据
		return;
	}
}
else
{
	$ResponseData=array("code"=>"500",
			              "message"=>"服务器错误");

		echo json_encode($ResponseData);
}

?>