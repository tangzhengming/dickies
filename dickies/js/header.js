//dom操作下拉菜单
/*var lis=document.querySelectorAll("ul.one>li")
for(var li of lis){
     li.onmouseover=function(){
        var li=this;
        var a=li.firstElementChild;
        var div=li.lastElementChild;
        a.className="mon";
        div.style.display="flex";
    }
    li.onmouseout=function(){
        var li=this;
        var a=li.firstElementChild;
        var div=li.lastElementChild;
        a.className=""
        div.style.display="none";
    }
}*/
//jqery下拉菜单
$("ul.one>li").hover(function(){
    var $a=$(this).children(":first")//.first()
    $a.addClass("mon")
    .next().css("display","flex");
},function(){
    var $a=$(this).children("a");
    $a.removeClass()
    .next().css("display","none");
})

$(function(){
    var uname=document.cookie.split("=")[1];
    if(!uname==""){
        $(".exam").removeClass("active");
        $(".exam").first().addClass("active");
    }else{
        $(".exam").addClass("active");
        $(".exam").first().removeClass("active");
    }
})