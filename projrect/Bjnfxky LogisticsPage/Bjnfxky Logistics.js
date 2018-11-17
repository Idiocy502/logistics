window.onload = function()
{
    //直接加载地图
    //初始化地图函数  自定义函数名init
    function init() {
        //定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
         var map = new qq.maps.Map(document.getElementById("container"), {
            center: new qq.maps.LatLng(39.916527,116.397128),      // 地图的中心地理坐标。
            zoom:8                                                 // 地图的中心地理坐标。
        });
    }
    //调用初始化函数地图
    init();
}

$(document).ready(function()
 {    var x=1;


      $(".物流查询").mouseenter(function()
     {    
             $(".物流查询下拉列表").slideDown(150);     // 展开    
     });

     $(".物流查询").on("mouseleave",function(e)
     {    
        
        var list=$(".物流查询下拉列表");
        var dot=list.offset();//.slideDown(150);     // 展开    
        if (dot.top>e.clientY) 
            {

                $(".物流查询下拉列表").slideUp(150);  
            };
     });
    
     $(".物流查询下拉列表").mouseleave(function () 
     {
 			
             $(".物流查询下拉列表").slideUp(150);　　  // 收缩    
     });  





      $(".增值业务").mouseenter(function()
     {    
             $(".增值业务下拉列表").slideDown(150);     // 展开    
     });
      $(".增值业务").on("mouseleave",function(e)
     {    
        
        var list=$(".增值业务下拉列表");
        var dot=list.offset();//.slideDown(150);     // 展开    
        if (dot.top>e.clientY) 
            {
                $(".增值业务下拉列表").slideUp(150);  
            };
     });
    
     $(".增值业务下拉列表").mouseleave(function () 
     {
 
             $(".增值业务下拉列表").slideUp(150);　　  // 收缩    
     });  
      $(".客服服务").mouseenter(function()
     {    
             $(".客服服务下拉列表").slideDown(150);     // 展开    
     });

       $(".客服服务").on("mouseleave",function(e)
     {    
        
        var list=$(".客服服务下拉列表");
        var dot=list.offset();//.slideDown(150);     // 展开    
        if (dot.top>e.clientY) 
            {
                $(".客服服务下拉列表").slideUp(150);  
            };
     });
     $(".客服服务下拉列表").mouseleave(function () 
     {
 
             $(".客服服务下拉列表").slideUp(150);　　  // 收缩    
     }); 
 })    



var i = 0;
var z = 0;
var j = 0;


var imgs = [
' Image/广告1.png',
' Image/广告2.png',
' Image/广告2.png',
' Image/广告.png'
];
var len = imgs.length;function cImg() {
var img1 = document.getElementById('img1');
img1.src = imgs[i % len];
i = ++i % len;
}




var imgc = [
' Image/轮播2.png',
' Image/轮播3.png',
' Image/轮播4.png',
' Image/轮播1.png'
];
var len = imgc.length;function Img() {
var img2 = document.getElementById('img2');
img2.src = imgc[j % len];
j = ++j % len;
}






var imgm = [
' Image/首页1.png',
' Image/首页3.jpg',
' Image/首页2.png',
' Image/首页1.png'
];
var len = imgm.length;function mImg() {
var img3 = document.getElementById('imgm');
img3.src = imgm[i % len];
z = ++z % len;
}
