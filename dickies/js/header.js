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
$("ul.one>li").hover(function(){
    console.log($("ul.one>li"))
    console.log($(this).first());
    $(this).first().toggleClass("mon")
    
})