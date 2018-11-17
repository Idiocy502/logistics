function LongIn()
{

	var formData = $("#LongForm").serializeArray();//获取登陆表单的数据

	var Count = formData[0]["value"];//获取用户名信息
	var Pwd = formData[1]["value"];//获取用户登陆密码信息


	if(Count == '')
	{
		$('#msg').html('请输入用户名');
		return;
	}
	else if(Count != '' && Pwd == '')
	{
		$('#msg').html('请输入密码');
		return;
	}

	//用正则表达式验证邮箱格式
	if(checkEmail(Count) == false)
	{
		alert("请输入合法的邮箱地址")
		return;
	}

	//将数据发送给服务器校验

	//拼接成json格式的数据
	var par={"EmailCount":Count,"UserPwd":Pwd};

	$.ajax({

		url:'LongInPage.php',//请求的地址
		data:par,//表单的值
		type:'POST',//设置请求方式

		success:function(data)//服务器返回调用的函数
		{
			if(data.code == '200')
			{
				$('#msg').html('登陆成功，跳转中');
				
				window.location.href='http://localhost/WorkSpace/projrect/MianPage/%E7%89%A9%E6%B5%81%E7%BD%91%E7%AB%99-%E9%A6%96%E9%A1%B5.html';
			}
			else
			{
				$('#msg').html(data.message);
			}
		},

		dataType:'Json'//返回数据格式

	});

	
}

//返回主页面
function BackHome()
{
	window.location.href ='http://localhost/WorkSpace/projrect/MianPage/%E7%89%A9%E6%B5%81%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5.html';
}

//邮箱验证
function checkEmail(str)
 {
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if(re.test(str))
    {
        return true;
    }else
    {
        return false;
    }
}