$(function(){
    $('#header').load('./header.html');
	$('#footer').load('./weibu.html');
});
//点击小图片显示大图片
$(function(){
    //点击小图片切换大图片
    $(".small").each(function(){
        var $small_img=$(this).find(".small_img");
        $small_img.on("click",function(){
       var src= $(this).attr("data-img");
       $(this).parents().eq(2).find(".small_img").removeClass("border");
       $(this).addClass("border");
       $(".big_img").attr({src});
    })
})
    //点击小图片求换整个大图
    var  onsrc=$(".color_img").find(".item.show").parent().attr("data-limg");
    var  list=$(".color_img").find(".item.show").parents().eq(1).index();
    //$(".item").removeClass("active");
    $(".item").eq(list).addClass("active");
    $(".color_img").on("click",function(){
        list=$(this).index();
        //点击图片后给对应的图片添加勾
        //$(".color_img").find(".item").removeClass("show");
        //$(this).find(".item").addClass("show");
        //显示对应的整个大图片
        $(".item").removeClass("active");
        $(".item").eq(list).addClass("active");
        onsrc=$(this).children().attr("data-limg");
        //跳转后图片默认显示第一张
        $(".small_img").removeClass("border");
        $(".small").each(function(){
            var small=$(this).find(".small_img");
            $(small[0]).addClass("border");
           
        })
    })
    //移入移出小图片改变大图片
    $(".color_img>a").hover(function(){
        var src=$(this).attr("data-limg");
        $(".big_img").attr({src});
    },function(){
        $(".big_img").attr("src",onsrc);
    }
    )
})

//点击图片获取选择颜色改变span颜色
$(function(){
    //获取默认的颜色列表
    var color=$(".color_img").find(".item.show").next().attr("title")
    $(".color>span").last().html(color);
    $(".color_img>a").on("click",function(){
        if($(this).children("div").hasClass("show")){
            $(this).children("div").removeClass("show")
            $(".color>span").first().html("选择 颜色:")
            $(".color>span").last().html("");
        }else{
            $(".color_img").find(".item").removeClass("show")
            $(this).children("div").addClass("show");
             color=$(this).children("img").attr("title")
            $(".color>span").first().html("已选择 颜色:")
            $(".color>span").last().html(color);
        }
    })
})
//点击尺码改变所选的尺码
$(function(){
    var index="";
    $(".available>a").on("mouseenter",function(){
        $(this).addClass("background");
    })
    $(".available>a").on("mouseleave",function(){
        $(".available").children().removeClass("background"); //清除所有的class
        var available=$(".available")                         //找到他的父元素
        $(available[index]).children().addClass("background")//给点击后的a标签增加class
    })

    $(".available").on("click",function(){
        if($(this).children().hasClass("back")){
            $(this).children().removeClass("back")
            //$(this).siblings().children().removeClass("background");
            $(".size>span").first().html("选择 尺码")
            $(".size>span").last().html("");
            index="";
        }else{
            $(this).children().addClass("back")
            $(this).siblings().children().removeClass("back")
            $(this).siblings().children().removeClass("background");
            index=$(this).index();
            $(".size>span").first().html("尺码:")
            var size=$(this).find(".back").attr("title");
            $(".size>span").last().html(size);
        }
    })
})



