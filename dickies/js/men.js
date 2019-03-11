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
      console.log($back.parent().index()-1)
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
    var $onList=$(this).children(".last-item").find(".active").parents().eq(1).index()//设置默认值
    //var $small=$(this).children().last().children().first().children().children().children(".small");
    var $small=$(this).find(".small")                                               //获取到颜色图片
    //$big_img=$small.parents().eq(4).children(".first-item").find(".item");//找到每一个大图片
    var $big_img=$(this).children(".first-item").find(".item")                       //获取所有的大图片
    $($big_img[$onList]).addClass("active")                                          //给默认值的图片显示
    $small.on("mouseenter",function(){
      $small=$(this)
        $list=$small.parents().eq(1).index();//找当鼠标当前移入的小图片的下标值
      $big_img.removeClass("active")//清除所有大图片的显示
      $($big_img[$list]).addClass("active")//移入小图片相对应的大图片显示
    })
    $small.on("mouseleave",function(){
      $big_img.removeClass("active");
      $($big_img[$onList]).addClass("active")
    })
    $small.on("click",function(){
      var $small=$(this)
      $small.parents().eq(2).find(".item").removeClass("active")//清除之前的勾选图片
      $small.prev().addClass("active");//显示出勾选图片
       $list=$small.parents().eq(1).index();
      //$small.parent().parent().siblings().children().children(".item").removeClass("active"); //先寻找点击图片在通过关系找到相对于兄弟下子元素下的勾选图片清除掉
      $onList=$list  //把自定义的值赋值给onlist
    })
  })
})

$(function(){
  var pno=0;
  var pageSize=0;
  $.ajax({
    url:"http://127.0.0.1:3001/details",
    type:"get",
    data:{ pno,pageSize },
    dataType:"JSON",
    success:function(res){
      var html="";
      var arr=[];
      console.log(res);
      for(var i=0;i<res.length;i++){ 
        console.log(res[i].small_url)
      var small=res[i].small_url.split(",");
      //console.log(small)
      
      arr.push(small)
      //console.log(arr);
      html+=`<li>
      <div class="first-item">`
        for(var a=0;a<arr.length;a++){
          //for(var j=0;j<arr)
            html+=`<a href='javascript:;' class='item active'>"+
               "<img src='${arr[i]}'>"+
            "</a>`
          }
          //console.log(arr.length)
     /*</div>
      <div class="last-item">
          <ul>
              <li>
                  <a href="javascript:;">
                      <div class="item active"></div>
                      <img src="img/color/NV.jpg" class="small"  >
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div class="item"></div>
                      <img src="img/color/GY.jpg" class="small" >
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div class="item"></div>
                      <img src="img/color/BK.jpg" class="small">
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div class="item"></div>
                      <img src="img/color/GR.jpg" class="small">
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div class="item"></div>
                      <img src="img/color/WH.jpg" class="small" data-list="4">
                  </a>
              </li>
          </ul>
          <div class="title"><a href="">${res[i].title}</a></div>
          <div class="subhead"><span>${res[i].id}</span>
          <div class="nexthead"><span>¥${res[i].price}</span></div></div>
      </div>
  </li>*/
       }
    }
  })
})


  
