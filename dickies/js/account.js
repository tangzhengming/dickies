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