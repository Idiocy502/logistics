function Register()
{
	var RegisterData = $("#RegisteredForm").serializeArray();//获取注册表单的数据

    var Email = RegisterData[0]["value"];//获取账户名信息
    var Name = RegisterData[1]["value"];//获取用户姓名
    var ID = RegisterData[2]["value"];//获取用户身份证号
	var Pwd = RegisterData[3]["value"];//获取密码信息
	var RePwd = RegisterData[4]["value"]
	var Phone = RegisterData[5]["value"];//获取用户手机号

	//var Sex = $_POST['UserEmail'];//
	//var Birthday = $_POST['UserEmail'];//
	//var Addesss = $_POST['UserEmail'];//

	var issuccess;  //1表示成功 0表示不成功

	issuccess =1;

	//用正则表达式验证邮箱格式
	if(checkEmail(Email) == false)
	{
		$('#msg1').html('* 请检查您的邮箱地址');
		issuccess = 0;
		return;
	}

    //检测省份证号
	if(checkUserID(ID) == false)
	{
		$('#msg3').html('* 请检查您的身份证号');
		issuccess = 0;
	}

    //检测密码
    if(Pwd == '')
    {
    	$('#msg7').html('* 请输入密码');
		issuccess = 0;
    }
    else if (Pwd != RePwd) 
    {
    	$('#msg4').html('* 密码不一致');
	    issuccess = 0;
	}

	//检测手机号
	if(checkPhone(Phone) == false)
	{
		$('#msg5').html('* 请输入正确的手机号码');
		issuccess = 0;
	}



	if(issuccess != 0)
	{

		//将数据发送给服务器校验

		//拼接成json格式的数据
		var Finish = {"UserEmail":Email,"UserPwd":Pwd,"UserName":Name,"UserID":ID,"UserPhone":Phone};

		$.ajax({

			url:'Registered.php',//请求的地址
			data:Finish,//表单的值
			type:'POST',//设置请求方式

			success:function(data)//服务器返回调用的函数
			{
				if(data.code == '200')
				{
					$('#msg6').html('注册成功');
					window.location.href='http://localhost/WorkSpace/projrect/LongInPange/%E7%89%A9%E6%B5%81%E7%BD%91%E7%AB%99-%E7%99%BB%E5%BD%95%E9%A1%B5.html';
				}
				else
				{
					$('#msg6').html(data.message);
				}
			},

			dataType:'Json'//返回数据格式

		});

		}

}


//邮箱验证
function checkEmail(str)
 {
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if(re.test(str))
    {
        //alert("正确");
        return true;
    }else
    {
        //alert("错误");
        return false;
    }
}
//手机号验证
function checkPhone(str)
{
	var telReg = !!str.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
    //如果手机号码不能通过验证
    if(telReg == false)
    {
    	return false;
    }
    else
    {
    	return true;
    }
}
//省份证号验证
function checkUserID(str)
{
	// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
   var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
   if(reg.test(str) === false)  
   {   
       return  false;  
   }
   else
   {
   	return true;
   }

}

var code; //在全局 定义验证码 

window.onload = function createCode() {
     code = "";
   var codeLength = 6;//验证码的长度  
   var checkCode = document.getElementById("checkCode");
   var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的  
  
  for (var i = 0; i < codeLength; i++) {
    var charIndex = Math.floor(Math.random() * 36);
    code += selectChar[charIndex];//根据索引取得随机数加到code上
    code +=' ';
  }
  //alert(code);
    checkCode.className = "code";
    checkCode.value = code;
}

function createCode() {
     code = "";
   var codeLength = 6;//验证码的长度  
   var checkCode = document.getElementById("checkCode");
   var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的  
  
  for (var i = 0; i < codeLength; i++) {
    var charIndex = Math.floor(Math.random() * 36);
    code += selectChar[charIndex];//根据索引取得随机数加到code上
    code +=' ';
  }
  //alert(code);
    checkCode.className = "code";
    checkCode.value = code;
}