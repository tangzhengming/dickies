$(function(){
    $("#header").load("./header.html")
    $("#footer").load("./weibu.html")
  })

  //页面加载 左边导航栏显示情况
$(function(){
  //开始加载页面箭头方向 下拉列表隐藏出现
    $("ul").each(function(){
      if($(this).css("display")=="none"){
        $(this).prev().children("span:last-child").css("transform","rotate(0deg)");
      }else{
        $(this).prev().children("span:last-child").css("transform","rotate(180deg)");
      }
    })
    //点击后箭头改变方向 下拉列表隐藏出现
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
  })

  //导航栏点击跳转和按钮跳转
$(function(){
    //点击跳转
    $("ul.list>li>a").click(function(){
       var $back=$(this);
       $back.addClass("background").parent().siblings().children().removeClass();
    })

    //向后跳页按钮
   $("ul.list>li:last-child").on("click",function(){
       var list=$("ul.list>li>a[data-list]");
       var num=$(".background").attr("data-list");
       $(list).removeClass();
          if(num<list.length-1){
              num++;
              console.log(num);
            }else{
              num=0;
            }
       $(list[num]).addClass("background");
   })

   //向前跳页
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

//商品列表的图片鼠标移入移出点击事件
$(function(){
  //鼠标移入显示快速浏览
  $(".first-item").hover(function(){
   $(this).children(".browse").css("display","block")
  },function(){
    $(this).children(".browse").css("display","none")
  })
  //图片跳转点击鼠标移入点击事件
  $("#details>li").each(function(){
    var $small=$(this).children().last().children().first().children().children().children(".small");
    $small.on("mouseenter",function(){
      $small=$(this)
      $small.parent().prev().addClass("active");
      $small.parent().parent().siblings().children(".item").removeClass("active");
     
    })
  })
})