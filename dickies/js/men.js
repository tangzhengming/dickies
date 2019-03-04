$(function(){
    $("#header").load("./header.html")
    $("#footer").load("./weibu.html")

    //页面开始箭头向上
    $("#man ul").each(function(){
      if($(this).css("display")=="none"){
        $(this).prev().children("span:last-child").css("transform","rotate(0deg)");
      }else{
        $(this).prev().children("span:last-child").css("transform","rotate(180deg)");
      }
    })

    //点击后显示列表
    $(".man-top>span:last-child").click(function(){
        var $span=$(this);
        if($span.parent().next().css("display")=="none"){
          $span.css("transform","rotate(180deg)")
          .parent().next().css("display","block");
        }else{
          $span.css("transform","rotate(0deg)")
          .parent().next().css("display","none");
        }
    })
    //点击跳转页面
    $("ul.list>li>a[data-list]").click(function(){
       var $back=$(this);
      /* num=$back.attr("data-list")
       console.log(num)*/
       $back.addClass("background").parent().siblings().children().removeClass();
    })
    //向后跳页按钮
   $("ul.list>li:last-child").on("click",function(){
       var list=$("ul.list>li>a[data-list]");
       var num=$(".background").attr("data-list");
       $(list).removeClass();
          if(num<list.length-1){
              num++;
            }else{
              num=0;
            }
       $(list[num]).addClass("background");
   })
   $("ul.list>li:first-child").on("click",function(){
    var list=$("ul.list>li>a[data-list]");
    var num=$(".background").attr("data-list");
    $(list).removeClass();
       if(num==0){
          num=0;
         }else{
           num--;
         }
    $(list[num]).addClass("background");
})
})