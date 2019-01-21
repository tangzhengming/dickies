 //引入头部
/* 
 $(function(){
     $('#header').load('./header.html');
     $('#foot').load('./weibu.html');
   })
*/   
   //DOM操作 获得焦点失去焦点事件
 /*var inputs=document.querySelectorAll("form>div.biao>div.label_input>div>input")
 for(var input of inputs){
   input.onfocus=function(){
     var inp=this;
     if(inp.className!="input_red")
       inp.className="input_black";
   }
   input.onblur=function(){
     var inp=this;
     var span=inp.nextElementSibling;
    if(inp.value==""){
      inp.className="input_red";
      span.innerHTML="这是必填项";
      span.style.marginBottom="10px";
    }else{
      inp.className="";
      span.innerHTML="";
    }
   }
 }*/
 //获得焦点失去焦点事件juqery
 $(":text").focus(function(){
   var $inp=$(this);
   if(!$inp.hasClass("input_red"))
      $inp.addClass("input_black")
 })
 .blur(function(){
   var $inp=$(this);
   if($inp.val()==""){
      $inp.addClass("input_red")
      .next().html("这是必填项");
   }else{
      $inp.removeClass()
      .next().html("");
   }
 })

//点击button按钮
/*$("button").click(function(e){
    e.preventDefault();
    $.each($(".label_input>div>input"),function(i,elem){
        if($(elem).val()==""){
            $(elem).addClass("input_red");
        }else{
            $(elem).addClass("input_black");
        }
    })
})*/
//button按钮加载input框

$("button").click(function(e){
    e.preventDefault();
    var $chebox=$(".read>input:checkbox").prop("checked");
    console.log($chebox);
    if(!$chebox){
        $(".read>span").html("这是必填项");
    }
    $(":text").each(function(){
      if($(this).val()==""){
          $(this).addClass("input_red").next().html("这是必填项");
      }else{
          if(!$chebox){
              $(".read>span").html("这是必填项");
          }else{
              //$(this).removeClass().next().html("");
              $(".read>span").html("");
              var email=vail($("#email"),/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'电子邮件地址无效');
              var semail=vail($("#semail"),/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'电子邮件地址无效');
              var puwd=vail($("#puwd"),/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,255}$/,"8~255位字符");
          }
      }
    })
})

function vail(txt,reg,html){
  if(!reg.test(txt.val())){
     txt.prev().css("color","#c41230")
     .next().addClass("input_red")
     .next().html(html)  
     return false;
  }else{
    txt.prev().css("color","#444")
    .next().removeClass()
    .next().html("");
    return true;
  }
}
/*$("button").on("click",function(){
   
    
})
*/