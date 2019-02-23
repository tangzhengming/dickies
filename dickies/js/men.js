$(function(){
    $("#header").load("./header.html")
    $("#footer").load("./weibu.html")
    $(".man-top span:last-child").click(function(){
        var $span=$(this);
        if($span.parent().next().css("display")=="none"){
          $span.css("transform","rotate(180deg)")
          .parent().next().css("display","block");
        }else{
          $span.css("transform","rotate(0deg)")
          .parent().next().css("display","none");
        }
    })
    
})