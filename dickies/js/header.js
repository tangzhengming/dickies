var as=document.querySelectorAll("div.xia>ul.one>li>a");
for(var a of as){
    console.log(a);
a.onmouseenter=function(){
    var a=this;
    var div=a.nextElementSibling;
    a.className="mon";
    div.style.display="block";

 }
 var divs=document.querySelectorAll(".one>li>div.xiala")
 console.log(div)
 for(var div of divs)
div.onmouseleave=function(){
    var div=this;
    a.className="";
    div.style.display="none";
}
}
