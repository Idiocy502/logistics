

 $(document).ready(function()
 {    

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





 var t=2;
   $(".时间下拉列表").slideDown(300); 
 $("#time").click(  function(){

    if (t==1) { 
         $(".时间下拉列表").slideDown(300); 
         t = 2;
    }
    else
    {
        $(".时间下拉列表").slideUp(300); 
        t = 1;
    };


 }) ;  
  
 })    

     


var i = 0;
var imgs = [

' Image/首页3.jpg',
' Image/首页2.png',
' Image/首页1.png'
];
var len = imgs.length;function cImg() {
var img = document.getElementById('img');
img.src = imgs[i % len];
i = ++i % len;
}




var c = 0;
var imgc = [

' Image/s3.jpg',
' Image/s2.jpg',
' Image/s1.jpg'
];
var leng = imgc.length;
function SImg() {
var img = document.getElementById('Cimg');
img.src = imgc[c % leng];
c = ++c % len;
}