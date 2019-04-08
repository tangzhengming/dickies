$(function(){
 $("#header").load("header.html")
 $("#footer").load("weibu.html ")
})
$(function(){
    var cookie = document.cookie.split("=")[1];
    if(cookie == ""){
        $(".null").css("display","block");
        $(".have").css("display","none");
    }else{
    $.ajax({
        url:"http://127.0.0.1:3001/card/details",
        type:"GET",
        data:{},
        dataType:"JSON",
        success:function(res){
           var html = "";
            if(res == ""){
                $(".null").css("display","block");
                $(".have").css("display","none");
            }else{
                html+=`
                <div class="tou">
                    <div class="product"><span>产品</span></div>
                    <div class="number"><span>数量</span></div>
                    <div class="pice"><span>价格</span></div>
                    <div class="cont"><span>总价</span></div>
                </div>`
                for(var list of res){
                    html+=`<div class="details">
                        <div class="detail">
                            <a href=""><img src="${list.img}"></a>
                            <div>
                                <div class="title"><a href=""${list.title}</a></div>
                                <div class="color"><span>颜色: </span><span>${list.color}</span></div>
                                <div class="size"><span>尺码: </span> <span>${list.size}</span></div>
                                <div class="bianji"><a href="javascript">编辑详情信息</a></div>
                            </div>
                        </div>`
                        html += 
                        `<div class="number">
                            <div class="select">
                                <select name="number" class="number1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                </select>
                            </div>
                            <div>
                                <span>有现货</span>
                                <div><a href="javascript:;" class="remove" data-pid=${list.pid}>清除</a></div>
                            </div>
                        </div>
                        <div class="price">
                            <span data-price="${list.price.toFixed(2)}" id="price">￥${list.price.toFixed(2)}</span>
                        </div>
                        <div class="conten">
                            <span class="subtotal"></span>
                        </div>
                     </div>`
                }
                $(".card-details").html(html);
                for(var i=0;i<res.length;i++){
                    var number = $(".number1").eq(i).children()
                    var count = res[i].count
                    for(var j=0;j<number.length;j++){
                        if($(number[j]).val() == count){    
                            $(number[j]).attr("selected",true)
                        }
                    }
                    }
                $(".details").each(function(){
                    var number = $(this).find(".number1").val();
                    var price = $(this).find("#price").attr("data-price");
                    var sum = (number*price).toFixed(2)
                    $(this).find(".subtotal").html(sum);
                    var a = 0;
                    var det = $(".card-details").children(".details"); 
                        for(var i = 0;i<det.length;i++){
                            a += parseFloat($(det[i]).find(".subtotal").html())
                            }
                        $(".total").html(a.toFixed(2));
                    $(this).find(".number1").on("change",function(){
                        //console.log($(this).find("#number"));
                        var number =$(this).val()
                        var price =$("#price").attr("data-price");
                        var sum = (number*price).toFixed(2)
                        $(this).parents().eq(2).find(".subtotal").html(sum)
                        var det = $(".card-details").children(".details"); 
                         a = 0;
                        for(var i = 0;i<det.length;i++){
                            a += parseFloat($(det[i]).find(".subtotal").html())
                            }
                        $(".total").html(a.toFixed(2));
                        })
                    })
                $(".remove").on("click",function(){
                    var pid = $(this).attr("data-pid");
                    $.ajax({
                        url:"http://127.0.0.1:3001/card/remove",
                        data:{pid},
                        type:"GET",
                        dataType:"JSON",
                        success:function(res){
                            if(res.code == 1){
                                location.reload() 
                            }
                        }
                    })
                })
            }
        }
    })
}
    })
    

