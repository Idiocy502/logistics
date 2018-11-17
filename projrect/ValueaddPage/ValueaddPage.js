

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
  $(".TobeMlist").slideDown(1000); 

 $("#TobeM").click(  function(){

    if (t==1) { 
        $(".TobeMlist").slideDown(300); 
        $(".Memberlist").slideUp(300);
        $(".selflist").slideUp(300); 
        $(".Aboutlist").slideUp(300); 
        $(".Controllist").slideUp(300);  
         t = 2;
    }
    else
    {
        $(".TobeMlist").slideUp(300); 
        t = 1;
    };
 }) ;  


 var M=1
  $("#Member").click(  function(){

    if (M==1) { 
        $(".Memberlist").slideDown(300); 
        $(".selflist").slideUp(300); 
        $(".TobeMlist").slideUp(300); 
        $(".Controllist").slideUp(300); 
        $(".Aboutlist").slideUp(300); 
         M = 2;
    }
    else
    {
        $(".Memberlist").slideUp(300); 
        M = 1;
    };
 }) ;  

var s=1
 $("#self").click(  function(){

    if (s==1) { 
        $(".selflist").slideDown(300); 
        $(".Memberlist").slideUp(300);
        $(".Aboutlist").slideUp(300);  
        $(".TobeMlist").slideUp(300); 
        $(".Controllist").slideUp(300); 
         s = 2;
    }
    else
    {
        $(".selflist").slideUp(300); 
        s = 1;
    };
 }) ; 
 var c=1
 $("#Control").click(  function(){

    if (s==1) { 

        $(".Controllist").slideDown(300); 
        $(".Aboutlist").slideUp(300); 
        $(".Memberlist").slideUp(300); 
        $(".TobeMlist").slideUp(300); 
        $(".selflist").slideUp(300); 
         s = 2;
    }
    else
    {
        $(".Controllist").slideUp(300); 
        s = 1;
    };
 }) ; 
 
  var a=1
 $("#About").click(  function(){

    if (s==1) { 

        $(".Aboutlist").slideDown(300); 
        $(".Controllist").slideUp(300); 
        $(".Memberlist").slideUp(300); 
        $(".TobeMlist").slideUp(300); 
        $(".selflist").slideUp(300); 
         s = 2;
    }
    else
    {
        $(".Aboutlist").slideUp(300); 
        s = 1;
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
