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
    $(".color_img").on("click",function(){
        var list=$(this).index();
        $(".color_img").find(".item").removeClass("show");
        $(this).find(".item").addClass("show");
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
$(function(){
    
})