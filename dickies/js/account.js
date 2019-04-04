$(function(){
    $("#header").load("header.html")
    $("#footer").load("weibu.html")
})
$(function(){
    $(".toggle").on('click',function(){
        var ul=$(this).next();
        if(ul.css("display")=="block"){
            ul.hide();
        }else{
            ul.css("display","block");
        }
    })
})
$(function(){
    var uname=document.cookie.split("=")[1]
    console.log(uname);
    $(".around").html(uname);
    $("#quit").on("click",function(){
        document.cookie="uname="+"";
        location.href = "login.html"
    })
})