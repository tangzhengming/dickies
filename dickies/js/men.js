$(function(){
    $("#header").load("./header.html")
    $("#footer").load("./weibu.html")
    $("ul").each(function(){
      if($(this).css("display")=="none"){
        $(this).prev().children("span:last-child").css("transform","rotate(0deg)");
      }else{
        $(this).prev().children("span:last-child").css("transform","rotate(180deg)");
      }
    })
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
   
    $("ul.list>li>a").click(function(){
       var $back=$(this);
       $back.addClass("background").parent().siblings().children().removeClass();
       

    })
})