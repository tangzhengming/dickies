$(function(){
    $('#header').load('./header.html');
	$('#footer').load('./weibu.html');
});
$(function(){
    var url=window.location.search.split("=");
    var id=url[1].slice(0,8);
    var show=url[2];
    $.ajax({
        url:"http://127.0.0.1:3001/details/index",
        type:"get",
        data:{id},
        dataType:"JSON",
        success: function(res) {
            var result=res[0]
            console.log(result)
            var html1='';
            var html2='';
            var small=result.small_url.split(",");
            var big=result.big_url.split(",");
            var size=result.size.split(",");
            var color=result.color.split(",");
            var detail=result.detail.split(",");
            html1+=`<div class="left">
            <ul>`
            for(var i=0;i<big.length;i++){
               html1+= `<li class="item">
                    <a href="javascript:;">
                        <img src="" class="big_img">
                        <img src="" alt="">
                    </a>   
                    <ul class="small">`
                    var bigimg=big[i].split("&");
                    for(var a=0;a<bigimg.length;a++){
                        if(a==0) {html1+= `<li>
                            <a href="javascript:;">
                                <img src="${bigimg[a]}" class="small_img  border" data-img="${bigimg[a]}">
                            </a>
                        </li>`}else{
                            html1+= `<li>
                            <a href="javascript:;">
                                <img src="${bigimg[a]}" class="small_img " data-img="${bigimg[a]}">
                            </a>
                        </li>`
                        }
                    }  
                    html1+= `</ul>
                </li>
                 `}

            html1+=`</ul>
           </div> 
           <div class="right">
               <div class="title">
                <h1 class="product-name">${result.title}</h1>
                <h1 class="product-id">${result.id}</h1>
                <p class="product-subtitle">${result.subtitle}</p>
               </div>  
               <div class="product-price">
                <span data-price=${result.price}>¥${result.price.toFixed(2)}</span>
               </div>
               <ul>
                <li class="color">
                    <span>已选择 颜色:</span>
                    <span></span>`
                    html1+=`<ul>`
                      for(var index=0;index<small.length;index++){
                        if(index==show){
                        html1+= `<li class="color_img">`
                        var bigImg=big[index].split("&");
                        //console.log(bigImg[0]);
                        html1+=  `<a href="javascript:;"  data-limg="${bigImg[0]}">`
                        
                        html1+=   `<div class="item show"></div>
                                <img src="${small[index]}" title="${color[index]}">
                            </a>
                        </li>`}else{
                            html1+= `<li class="color_img">`
                             var bigImg=big[index].split("&");
                             //console.log(bigImg[0]);
                             html1+=  `<a href="javascript:;"  data-limg="${bigImg[0]}">`
                             
                             html1+=   `<div class="item"></div>
                                     <img src="${small[index]}" title="${color[index]}">
                                 </a>
                             </li>`
                        }
                    }   
                   html1+=`</ul>
                </li>
                <li class="size">
                    <span>选择 尺码</span>
                    <span></span>
                    <ul>`
                    for(var j=0;j<size.length;j++){
                        html1+= ` <li class="available"><a href="javascript:;" title="${size[j]}">${size[j]}</a></li>`
                    }
                  html1+= `</ul>
                </li>
               </ul> 
               <div class="sizedetails">
                    <a href="javascript:;">尺码详情</a>
               </div>
               <div>
                    <div class="num">
                        <span>数量</span>
                        <div>
                            <button id="minusBtn">-</button>
                            <input type="text" value="1" id="value">
                            <button id="addBtn">+</button>
                        </div>
                    </div>
                    <div class="button">
                            <span>请选择 颜色 和 尺码</span>
                            <button id="add">加入购物车</button>
                            <button id="buy">立即购买</button>
                    </div>
                    <div class="share">
                        <span>分享:</span>
                        <a href="javascript:;"><img src="./img/tencent-weibo.svg" ></a>
                        <a href="javascript:;"><img src="./img/weixin.svg"></a>
                        <a href="javascript:;"><img src="./img/weibo.svg"></a>
                        <a href="javascript:;"><img src="./img/douban.svg"></a>
                    </div>
               </div>
           </div>`
           html2+=` <h2>
                <span class="xuleft"></span>
                <span>产品详情</span>
                <span class="xuright"></span>
                </h2>
             </div>
           <div class="beijing">
                        <img src="${result.backimg}" alt="">
                    </div>
                    <div class="deta">
                        <h1>商品细节</h1>`
                        for(var k=0;k<detail.length;k++){
                        html2+= `<li>${detail[k]}</li>`
                        }
                       html2+= `<h1>材质说明</h1>
                        <li>${result.texture}</li>
                        <h1>价格说明</h1>
                        <li>划线价格：划线的价格可能是商品的专柜吊牌价或正品零售价指导价或该商品的曾经展示过的销售价等，仅供您参考</li>
                        <li>未划线价格：未划线的价格是商品在官网上的销售标价，具体的成交价格可能因会员使用优惠券发生变化，最终以订单结算页价格为准</li>
                    </div>`
           $(".details").html(html1);
           $(".image").html(html2);
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
    $(".big_img").attr("src",onsrc);
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
            $(this).siblings().children().removeClass("background");
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
$(function(){
	var value=$("#value").val()
	$("#addBtn").on("click",function(){
		if(value<15){
			value++;
			$("#value").val(value);
		}
	})
	$("#minusBtn").on("click",function(){
		console.log(value)
		if(value>1){
			value--;
			$("#value").val(value);
		}
	})
})
$(function(){
	$("#add").on("click",function(){
		var size=$(".available>a").hasClass("back background");
		var color=$(".color_img div").hasClass("item show");
		if(size&&color){
			var id = $(".product-id").html();
			var price = $(".product-price").children("span").attr("data-price");
			var title = $(".product-name").html();
			var color = $(".color").children().eq(1).html();
			var size = $(".size").children().eq(1).html();
			var img = $(".big_img").attr("src");
            var count = $("#value").val();
			$.ajax({
				type:"get",
				url:"http://127.0.0.1:3001/card",
				data:{id,price,title,color,size,img,count},
				dataType:"JSON",
				success:function(res){
					if(res.code == 0){
						alert("请先登录才能加入购物车");
						location.href = "login.html"
					}else{
                        alert(res.msg)
                    }
				}
			});
		}else{
			$(".button>span").show();
			setTimeout(function(){
				$(".button>span").hide();
			},2000)
		            }
	            })
            })
        }
    })
})