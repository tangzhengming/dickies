var lis=document.querySelectorAll("ul.one>li")
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
}