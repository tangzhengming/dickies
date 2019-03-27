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
  var pno=0;
  var pageSize=12;
  var list1=$("ul.list").eq(0).find("a");
  var list2=$("ul.list").eq(1).find("a");
  var remove=function(){
    $(list1).removeClass("background");
    $(list2).removeClass("background");
  } 
  var add=function(){
    $(list1[pno]).addClass("background");
    $(list2[pno]).addClass("background");
  }
  $(".list>li>a").on("click",function(){
    remove()
    pno=$(this).attr("data-list");
    add()
    ajax(pno,pageSize)
})

$(".btnleft").on("click",function(){
    pno=$(".background").attr("data-list")
    if(pno==0){
      pno=0
    }else{
      pno--
    }
    remove();
    add();
    ajax(pno,pageSize)
})
$(".btnright").on("click",function(){
  pno=$(".background").attr("data-list")
  if(pno<list1.length-1){
    pno++;
  }else{
    pno=0
  }
  remove();
  add();
  ajax(pno,pageSize)
})

$("select#show").on("change",function(){
   pageSize=$(this).val()
   $(".page>span").html(`显示 1 - ${pageSize} 于 204 结果`)
    ajax(pno,pageSize);
  })
})

$(window).load(function(){
   ajax();
})
function ajax(pno,pageSize){
  $.ajax({
    url:"http://127.0.0.1:3001/details",
    type:"get",
    data:{ pno,pageSize },
    dataType:"JSON",
    success:function(res){
      var html="";
      for(var list of res){
        var small=list.small_url.split(",");
        var big=list.big_url.split(",");
      html+=`<li>
      <div class="first-item">`
        for(var a=0;a<big.length;a++){
          var bigImg=big[a].split("&");
           if(a==0){html+=`<a href='javascript:void(0)' class='item active' data-uid=${list.uid}>
               <img src=${bigImg[0]}>
            </a>`}
            else{html+=`<a href='javascript:void(0)' class='item' data-uid=${list.uid}>  
            <img src=${bigImg[0]}>
         </a>`}
          }
     html+=`<a href="javascript:;" class="browse">快速浏览</a></div>
      <div class="last-item">
          <ul>`
            for(var i=0; i<small.length;i++){
              if(i==0){
              html+=
              `<li>
                  <a href="javascript:;">
                      <div class="item active"></div>
                      <img src="${small[i]}" class="small" >
                  </a>
              </li>`}else{
                html+=
              `<li>
                  <a href="javascript:;">
                      <div class="item"></div>
                      <img src="${small[i]}" class="small">
                  </a>
              </li>`
              }
            }
          html+=`</ul>
          <div class="title"><a href="">${list.title}</a></div>
          <div class="subhead"><span>${list.id}</span>
          <div class="nexthead"><span>¥${list.price.toFixed(2)}</span></div></div>
      </div>
  </li>`
        $("#details").html(html);
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
            var $jump=$(this).children(".first-item").find(".item");
            $jump.on("click",function(){
              //console.log($(this).attr("data-uid"));
              var uid = $(this).attr("data-uid");
              for(var Item of res){
              if(uid == Item.uid){
                  var url="http://127.0.0.1:3001/details.html?id="+Item.id+"&uid="+$onList;
                  window.location.href = url 
                }
              }
            })     
          })
        })
      }
    }
  }
)}




/*$(function(){
  $("ul.list").each(function(){
    var $list=$(this).find("a");
    console.log($list)
    $list.on("click",function(){
      $list=$(this)
      var index=$list.parent().index()-1
      $list.addClass("background").parent().siblings().children().removeClass();
    })
    
  })
})*/
